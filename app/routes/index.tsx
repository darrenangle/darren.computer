import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex-column ">
        <h1>
          <Link to="/bio"> darren angle</Link>
        </h1>
        <br />
        <ul>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/griefmachines"
              rel="noreferrer noopener"
            >
              @griefmachines
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://youshouldquityourjob.com"
              rel="noreferrer noopener"
            >
              youshouldquityourjob.com
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://unblock.dev"
              rel="noreferrer noopener"
            >
              unblock.dev
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
