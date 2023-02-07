import { Link } from "@remix-run/react";

export default function Bio() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex-column ">
        <h1>
          <Link to="/"> darren angle bio</Link>
        </h1>
        <br />
        <div>
          <p>mostly interested in love and art-related glory</p>
          <p>writing also, some of that should happen</p>
        </div>
      </div>
    </main>
  );
}
