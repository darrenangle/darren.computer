import { Link } from "@remix-run/react";

export default function Poems() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex-column ">
        <h1>
          <Link className="warble" to="/">
            👈🏽 back
          </Link>
        </h1>
        <br />
        <div>
          <p>
            <a
              target="_blank"
              href="https://bombmagazine.org/articles/four-poems-13/"
              rel="noreferrer noopener"
              className=""
            >
              <strong>BOMB Magazine: </strong>
              <br />
              Knowing This Life Holds a Passage to the Next <br />
              Fire in Bone <br />
              Frost Monsters in the Microchip Business <br />
              Origin Story <br />
              <br />
            </a>
            <a
              target={"_blank"}
              href={"https://thevolta.org/ewc62-tribute-dangle-p1.html"}
              rel="noreferrer noopener"
              className=""
            >
              <strong>The Volta: </strong>
              <br />
              elegy (for c.d. wright)
              <br />
            </a>
            <br />
            <a
              target={"_blank"}
              href={
                "https://mnartists.walkerart.org/what-light-this-weeks-poem-darren-angle"
              }
              rel="noreferrer noopener"
              className=""
            >
              <strong>MN Artists: What Light </strong>
              <br />
              The Good Advice
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
