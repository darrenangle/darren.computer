import "./App.css";

function App() {
  return (
    <>
      <img className="ellipse" src="/ellipse.svg" alt="Ellipse Graphic" />
      <h4>DARREN ANGLE</h4>
      <p>
        Software engineer and AI researcher with deep experience shipping code
        and managing teams in biotech, healthcare, e-commerce, and advertising.
        Also: two kids and two poetry degrees.
      </p>
      <p>
        <a target="_blank" href="./Darren.Angle.Resume.2024.pdf">
          Resume
        </a>
        {" • "}
        <a target="_blank" href="https://github.com/darrenangle">
          Github
        </a>
        {" • "}
        <a target="_blank" href="https://twitter.com/darrenangle">
          Twitter
        </a>
      </p>

      <br />
      <h4>FORTHCOMING</h4>
      <p>
        Talk is Deep: Training LLMs on 1M Academic Conversations With Themselves
      </p>
      <br />
      <h4>RECENT WORK</h4>
      <p>
        Identifying Neglected Hypotheses In Neurodegenerative Disease With Large
        Language Models {" •  "}
        <a target="_blank" href="https://openreview.net/forum?id=0gl0SJtd2E">
          NeurIPS '23 GenBio
        </a>
      </p>
      <p>
        Ontology of Digital Health Technologies {" •  "}
        <a
          target="_blank"
          href="https://vaults.prism.bio/vaults/dht/Overview/Overview"
        >
          vaults.prism.bio
        </a>
      </p>
      <p>
        Shopify Help Center AI Experience {" •  "}
        <a target="_blank" href="https://help.shopify.com/en/">rt
          Shopify
        </a>
      </p>
    </>
  );
}

export default App;
