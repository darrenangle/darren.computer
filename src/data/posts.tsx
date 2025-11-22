import React from 'react';
import { CodeBlock } from '../components/research/CodeBlock';
import { Figure } from '../components/research/Figure';
import { Equation } from '../components/research/Equation';
import { CiteRef, Citation } from '../components/research/Citation';

export interface WritingPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  content: React.ReactNode;
}

export const posts: WritingPost[] = [
  {
    id: 'hello-world-research',
    title: 'Notes on Synthetic Data Generation',
    date: '2024-05-22',
    summary: 'Exploring techniques for generating high-quality synthetic datasets for training small models.',
    image: '/blog-image.jpeg',
    content: (
      <>
        <p>
          In this note, I explore the effectiveness of synthetic data generation for bootstrapping small language models. 
          Recent work suggests that "textbooks are all you need" <CiteRef id="1" />.
        </p>
        
        <h4>Methodology</h4>
        <p>
          We define a simple transformation $T$ applied to a seed dataset $D$.
        </p>
        
                <Equation label="1">
                  {"L = \\sum_{i=1}^{N} \\log P(x_i | x_{<i}; \\theta)"}
                </Equation>
        <p>
          The core implementation loop looks like this:
        </p>

        <CodeBlock 
          language="python"
          filename="generator.py"
          code={`def generate_synthetic_sample(seed, model, temperature=0.7):
    prompt = f"Expand on the following concept: {seed}"
    return model.complete(prompt, temperature=temperature)`}
        />

        <h4>Results</h4>
        <p>
          Initial experiments show a promising reduction in perplexity.
        </p>

        <Figure 
          src="https://placehold.co/600x300/e9e9eb/333?text=Loss+Curve" 
          alt="Loss curve showing convergence"
          caption="Fig 1. Training loss over 1000 steps."
        />

        <hr />
        
        <h4>References</h4>
        <div style={{ fontSize: '0.9em' }}>
          <Citation id="1">
            Gunasekar, S., et al. (2023). "Textbooks Are All You Need". arXiv preprint arXiv:2306.11644.
          </Citation>
        </div>
      </>
    )
  },
  {
    id: 'optimizing-react-render-cycles',
    title: 'Optimizing React Render Cycles in Large Applications',
    date: '2024-04-10',
    summary: 'A deep dive into preventing unnecessary re-renders using memoization and composition patterns, specifically in the context of data-heavy dashboards.',
    image: '/blog-image-2.jpeg',
    content: (
      <>
        <p>
          Performance bottlenecks in React often stem from unnecessary re-renders. When building complex dashboards, even small inefficiencies compound quickly.
        </p>
        <p>
          This post examines common pitfalls and demonstrates how `useMemo` and component composition can salvage frame rates.
        </p>
      </>
    )
  },
  {
    id: 'future-of-browser-agents',
    title: 'The Future of Browser Agents',
    date: '2024-02-15',
    summary: 'Reflections on the transition from chat-based interfaces to active agents that can navigate the web, manipulate DOM elements, and perform complex workflows.',
    content: (
      <>
        <p>
          We are moving beyond simple text generation. The next frontier is agency: models that can perceive the web as we do and act upon it.
        </p>
      </>
    )
  },
  {
    id: 'poetry-and-code',
    title: 'On Poetry and Code',
    date: '2023-11-30',
    summary: 'Drawing parallels between the constraint-based creativity of sestinas and the rigid logic of type systems.',
    content: (
      <>
        <p>
          Code is often called a language, but it is a language of action. Poetry, conversely, is often seen as a language of expression. Yet both rely heavily on structure and constraint to generate meaning.
        </p>
      </>
    )
  }
];
