import { Link } from "@remix-run/react";

export default function Bio() {
  const emailHandler = () => {
    window.location.href = "mailto:darren@unlock.dev";
  };
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex-column page">
        <h1>
          <Link className="warble" to="/">
            👈🏽 back
          </Link>
        </h1>
        <br />
        <div>
          <p>
            i'm darren angle.
            <br /> i'm good at telling the truth and taking action.
            <br />
          </p>
          <p>
            <span
              onClick={emailHandler}
              className="cursor-pointer pink-to-teal-hover underline decoration-2"
            >
              let's get coffee or beer (s)
            </span>
          </p>
          <br />

          <strong>
            <i>current adventures:</i>
          </strong>
          <p>
            {/* tech exec coaching @{" "}
            <a
              target="_blank"
              href="https://unlock.dev"
              rel="noreferrer noopener"
              className="pink-to-teal-hover"
            >
              unlock.dev
            </a>{" "}
            <br />
            career wizardry @{" "}
            <a
              target="_blank"
              href="https://youshouldquityourjob.com"
              rel="noreferrer noopener"
              className="pink-to-teal-hover"
            >
              youshouldquityourjob.com
            </a>
            <br /> */}
            AI / LLM engineering @{" "}
            <a
              target="_blank"
              href="https://www.shopify.com/editions/winter2023"
              rel="noreferrer noopener"
              className="pink-to-teal-hover"
            >
              shopify
            </a>{" "}
            <br />
            making art @{" "}
            <a
              target="_blank"
              href="https://instagram.com/griefmachines"
              rel="noreferrer noopener"
              className="pink-to-teal-hover"
            >
              griefmachines
            </a>{" "}
            <br />
          </p>
          <br />

          <strong>
            <i>education:</i>
          </strong>
          <p>BA English & Creative Writing, Macalester College</p>
          <p>MFA Literary Arts, Brown University</p>
          <br />
          <strong>
            <i>some beliefs:</i>
          </strong>
          <p>
            people tend to work on unfinished business from childhood, sometimes
            knowingly
          </p>
          <br />
          <p>
            saying the unsaid and speaking the unspeakable-- very leveraged work
          </p>
          <br />
          <p>systems mirror the people who made them</p>
          <br />
          <strong>
            <i>past adventures:</i>
          </strong>
          <p>
            engineering lead @ dina <br />
            engineering lead @ casechek <br />
            freelance eng lead @ google, p&g, starbucks
            <br />
            director of digital @ upshot agency <br />
            consultant @ comed <br />
            poetry editor @ rhino <br />
            poetry instructor @ brown university <br />
          </p>
          <br />
        </div>
      </div>
    </main>
  );
}
