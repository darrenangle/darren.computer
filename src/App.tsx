import "./App.css";

function App() {
  return (
    <>
      <img className="ellipse" src="/ellipse.svg" alt="Ellipse Graphic" />
      <h4>DARREN ANGLE</h4>
      <p>
        Computer programmer and AI researcher with experience shipping code and
        managing engineers in biotech, healthcare, e-commerce, and legal.
        Studied poetry at Macalester College and Brown University. Currently
        building browser agents at{" "}
        <a target="_blank" href="https://getfreed.ai">
          Freed.ai
        </a>
        .
      </p>
      <p>
        <a target="_blank" href="https://twitter.com/darrenangle">
          Twitter
        </a>
        {" • "}
        <a target="_blank" href="https://github.com/darrenangle">
          Github
        </a>
        {" • "}
        <a target="_blank" href="./Darren.Angle.Resume.2024.pdf">
          Resume
        </a>
      </p>

      <br />
      <h4>FORTHCOMING</h4>
      <p>jabberwocky bench</p>
      <p>RETURNER</p>
      <br />
      <h4>RECENT WORK</h4>
      <p>
        Identifying Neglected Hypotheses In Neurodegenerative Disease With Large
        Language Models {" •  "}
        <a target="_blank" href="https://openreview.net/forum?id=0gl0SJtd2E">
          NeurIPS '23 GenBio Workshop
        </a>
      </p>
      <p>
        Shopify Help Center AI Experience {" •  "}
        <a target="_blank" href="https://help.shopify.com/en/">
          Shopify
        </a>
      </p>
    </>
  );
}

export default App;
