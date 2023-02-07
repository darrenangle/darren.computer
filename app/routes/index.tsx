import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex-column ">
        <h1 className="cursor-pointer warble">
          {/* <Link to="/bio"> darren angle</Link> */}
          darren angle
        </h1>
        <br />
        <br />
        <ul>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/griefmachines"
              rel="noreferrer noopener"
              className="hover:red-500"
            >
              🎨 @griefmachines
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://youshouldquityourjob.com"
              rel="noreferrer noopener"
            >
              🙌🏽 youshouldquityourjob.com
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://unlock.dev"
              rel="noreferrer noopener"
            >
              👔 unlock.dev
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
