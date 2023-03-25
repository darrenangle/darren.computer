import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className="cursor-pointer warble">
          <Link to="/bio"> darren angle</Link>
        </h1>
        <br />

        <ul>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/griefmachines"
              rel="noreferrer noopener"
              className="hover:red-500"
            >
              <span className="mr-7 emoji">🦑</span>ai art
            </a>
          </li>
          <li>
            <Link to="/poems">
              <span className="mr-7 emoji">🌀</span>poems
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/darrenangle"
              rel="noreferrer noopener"
            >
              <span className="mr-7 emoji">🤷🏽‍♂️</span>tweets
            </a>
          </li>

          <li>
            <Link to="/bio">
              <span className="mr-7 emoji">🫥</span>about
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
