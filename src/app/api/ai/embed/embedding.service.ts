import { embed } from "./embed";
import fs from "fs/promises";
import math from "mathjs";

interface MetaData {
  content: string;
  [key: string]: any;
  embedding?: number[];
}

interface EmbeddedData extends MetaData {
  embedding: number[];
}

class EmbeddingService {
  private store: EmbeddedData[] = [];
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.initializeStore().catch(console.error);
  }

  private async initializeStore(): Promise<void> {
    try {
      await fs.access(this.filePath);
      await this.loadFromFile();
    } catch (error) {
      console.error(
        `File ${this.filePath} does not exist. Initializing an empty store.`
      );
    }
  }

  async findSimilar(text: string, topN: number): Promise<EmbeddedData[]> {
    const embedding = await embed({ content: text });
    return this.findSimilarEmbedding(embedding.embedding!, topN);
  }

  async saveMetadata(metadata: MetaData): Promise<void> {
    const { embedding } = await embed(metadata);
    const embeddedData: EmbeddedData = {
      ...metadata,
      embedding: embedding!,
    };
    this.store.push(embeddedData);
    await this.saveToFile(embeddedData);
  }

  private async loadFromFile(): Promise<void> {
    const data = await fs.readFile(this.filePath, "utf-8");
    this.store = data
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  private async saveToFile(embeddedData: EmbeddedData): Promise<void> {
    const data = `${JSON.stringify(embeddedData)}\n`;
    await fs.appendFile(this.filePath, data);
  }

  private findSimilarEmbedding(
    embedding: number[],
    topN: number
  ): EmbeddedData[] {
    const scored = this.store.map((item) => {
      const dotProduct = math.dot(embedding, item.embedding);
      const normsProduct = math.multiply(
        math.norm(embedding),
        math.norm(item.embedding)
      );
      const score = math.divide(dotProduct, normsProduct);
      return {
        ...item,
        score,
      };
    });

    return scored
      .sort((a, b) => Number(math.subtract(b.score, a.score)))
      .slice(0, topN);
  }
}
