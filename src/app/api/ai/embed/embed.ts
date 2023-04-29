import { Configuration, OpenAIApi } from "openai";
import { CreateEmbeddingRequest } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

interface MetaData {
  content: string;
  embedding?: number[];
  [key: string]: any;
}

export async function embed(metaData: MetaData): Promise<MetaData> {
  const { content } = metaData;

  try {
    const request: CreateEmbeddingRequest = {
      model: "text-davinci-002",
      input: content,
    };

    const response = await openai.createEmbedding(request);

    const { data } = response;

    return { ...metaData, embedding: data.data[0].embedding };
  } catch (error) {
    console.error(error);
    return metaData;
  }
}
