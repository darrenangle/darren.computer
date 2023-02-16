import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex-column ">
        <h1 className="cursor-pointer warble">
          <Link to="/bio"> darren angle</Link>
        </h1>
        <br />
        <br />
        <ul>
          <li>
            <a
              target="_blank"
              href="https://unlock.dev"
              rel="noreferrer noopener"
            >
              <span className="mr-2">👔</span>unlock.dev
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/griefmachines"
              rel="noreferrer noopener"
              className="hover:red-500"
            >
              <span className="mr-2">🎨</span>@griefmachines
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://youshouldquityourjob.com"
              rel="noreferrer noopener"
            >
              <span className="mr-2">🙌🏽</span>youshouldquityourjob.com
            </a>
          </li>

          <li>
            <Link to="/bio">
              <span className="mr-2">❤️‍🔥</span>about
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
