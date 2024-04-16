import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h3>DARREN ANGLE</h3>
      <p>
        I'm a software engineer and AI researcher with 12 years experience
        building and managing teams in biotech, healthcare, and e-commerce. I
        also have two poetry degrees. <br />
        <a target="_blank" href="https://openreview.net/forum?id=0gl0SJtd2E">
          Resume
        </a>
        {" | "}
        <a target="_blank" href="https://github.com/darrenangle">
          Github
        </a>
      </p>

      <br />
      <h3>FORTHCOMING</h3>
      <p>Talk is Deep: Training LLMs on 1M Conversations With Themselves</p>
      <br />
      <h3>RECENT WORK</h3>
      <p>
        NeurIPS '23 Paper: Identifying Neglected Hypotheses In Neurodegenerative
        Diseas With Large Language Models <br />
        <a target="_blank" href="https://openreview.net/forum?id=0gl0SJtd2E">
          (Open Review)
        </a>
      </p>
      <p>
        Lead AI Engineer: Ontology of Digital Health Technologies <br />
        <a
          target="_blank"
          href="https://vaults.prism.bio/vaults/dht/Overview/Overview"
        >
          (NeurIPS 23)
        </a>
      </p>
      <p>
        Lead AI Engineer: Shopify Help Center AI Experience <br />
        <a target="_blank" href="https://help.shopify.com/en/">
          (Shopify)
        </a>
      </p>
    </>
  );
}

export default App;
