import { Link } from "@remix-run/react";

export default function Poems() {
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
          <strong>darren angle poems</strong>
          <br />
          <p>
            <a
              target="_blank"
              href="https://www.instagram.com/p/CK8Z8Q8J8Z-/"
              rel="noreferrer noopener"
              className="hover:red-500"
            >
              BOMB Magazine: <br />
              Knowing This Life Holds a Passage to the Next <br />
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
