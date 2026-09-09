import { content } from "../content";
import Cursor from "./cursor";
import Headline from "./headline";

export default function Page() {
  return (
    <main className="shell">
      <Cursor />

      <nav className="nav reveal">
        <span className="mark">VV</span>
        <a
          className="nav-link"
          href={content.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>

      <div className="meta reveal" style={{ animationDelay: "0.06s" }}>
        <span className="meta-left">
          <i className="dot" />
          {content.name} — {content.role}
        </span>
        <span className="meta-right">{content.tagRight}</span>
      </div>

      <section className="hero">
        <Headline lines={content.headline} />
      </section>

      <footer className="bottom">
        <p className="intro reveal" style={{ animationDelay: "0.5s" }}>
          {content.intro}
        </p>

        <div className="actions reveal" style={{ animationDelay: "0.58s" }}>
          <a className="link" href={`mailto:${content.email}`}>
            Email
          </a>
          <a
            className="link"
            href={content.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn"
            href={content.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M6 1v9M6 10 2.5 6.5M6 10l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
