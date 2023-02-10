import { Link } from "@remix-run/react";

export default function Bio() {
  const emailHandler = () => {
    window.location.href = "mailto:darren@unlock.dev";
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex-column ">
        <h1>
          <Link className="warble" to="/">
            👈🏽 back
          </Link>
        </h1>
        <br />
        <div>
          <p>i'm darren angle. i'm an artist.</p>
          <p>
            instead of reading all this <br />
            <span
              onClick={emailHandler}
              className="cursor-pointer pink-to-teal underline decoration-2"
            >
              let's get coffee or beer(s)
            </span>
          </p>
          <br />
          <strong>
            <i>education:</i>
          </strong>
          <p>BA Macalester College</p>
          <p>MFA Brown University</p>
          <br />
          <strong>
            <i>old titles:</i>
          </strong>
          <p>
            consultant, <br />
            senior software engineer, <br /> tech lead, director of digital,{" "}
            <br />
            poetry editor
            <br />
            founder
          </p>
          <br />
          <strong>
            <i>paid me b4:</i>
          </strong>
          <br />
          <p>
            shopify, google, <br />
            harvard, u chicago, <br />
            comed, upshot agency, <br />
            casechek, dina
          </p>
          <br />
        </div>
      </div>
    </main>
  );
}
