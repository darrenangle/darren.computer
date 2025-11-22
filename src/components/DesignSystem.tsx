import React from 'react';
import { Navbar } from './Navbar';
import { CodeBlock } from './research/CodeBlock';
import { Figure } from './research/Figure';
import { Equation } from './research/Equation';
import { Citation, CiteRef } from './research/Citation';

export const DesignSystem: React.FC = () => {
  return (
    <div className="design-system">
      <Navbar />
      <div style={{ marginTop: '2rem' }}>
        <h1>Design System</h1>
        <p>Overview of typography, colors, and components.</p>

        <hr style={{ margin: '2rem 0', border: 0, borderTop: '1px solid var(--color-border-light)' }} />

        <section style={{ marginBottom: '4rem' }}>
          <h2>Typography</h2>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <p>
            Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <a href="#">Link example</a> within text.
          </p>
          <p>
            <strong>Bold text</strong>, <em>italic text</em>, and <code>inline code</code>.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>Research Components</h2>
          
          <h3>Code Block</h3>
          <CodeBlock 
            language="typescript" 
            filename="example.ts" 
            code={`function hello() {
  console.log("Hello, world!");
}`} 
          />

          <h3>Equation</h3>
          <Equation label="1">
            {"E = mc^2"}
          </Equation>

          <h3>Figure</h3>
          <Figure 
            src="https://placehold.co/600x300/e9e9eb/333?text=Figure+Example" 
            alt="Example figure"
            caption="Fig 1. An example figure with caption."
          />

          <h3>Citations</h3>
          <p>
            This is a statement that needs a citation <CiteRef id="1" />.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Citation id="1">
              Author, A. (2024). "The Cited Work". Journal of Examples.
            </Citation>
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2>CSS Source</h2>
          <p>Current styles from <code>src/App.css</code>:</p>
          <CodeBlock 
            language="css" 
            filename="src/App.css"
            code={`/* Research Components */

.research-code-block {
  background: var(--color-code-bg);
  padding: 1rem;
  border-radius: 4px;
  font-family: 'SF Mono', monospace;
  font-size: 0.9em;
  margin: 1.5rem 0;
  overflow-x: auto;
  border: 1px solid var(--color-border-light);
}

.research-code-filename {
  font-size: 0.8em;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
  border-bottom: 1px solid var(--color-border-light);
  padding-bottom: 0.25rem;
}

.research-figure {
  margin: 2rem 0;
  text-align: center;
}

.research-figure img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid var(--color-border-light);
}

.research-figure figcaption {
  margin-top: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.9em;
  font-style: italic;
}

.research-equation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--color-bg-equation);
  border-radius: 4px;
  position: relative;
}

.research-equation-content {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 1.1em;
  color: var(--color-text);
}

.research-equation-label {
  position: absolute;
  right: 1rem;
  color: var(--color-text-muted);
  font-size: 0.9em;
}

/* ... and so on ... */`}
          />
        </section>
      </div>
    </div>
  );
};