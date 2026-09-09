import Link from "next/link";
import { content, footer } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="foot-top">
        <p className="foot-label">
          <i className="dot" />
          Contact
        </p>
        <h2 className="foot-cta">{footer.cta}</h2>
        <a className="foot-mail" href={`mailto:${content.email}`}>
          {content.email}
        </a>
      </div>

      <div className="foot-cols">
        <div className="foot-col">
          <span className="foot-col-title">Pages</span>
          <ul>
            {footer.nav.map((n) => (
              <li key={n.label}>
                {n.href.startsWith("/") && !n.href.endsWith(".pdf") ? (
                  <Link href={n.href}>{n.label}</Link>
                ) : (
                  <a href={n.href} target="_blank" rel="noreferrer">
                    {n.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <span className="foot-col-title">Elsewhere</span>
          <ul>
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <span className="foot-col-title">Based in</span>
          <ul>
            <li>
              <span>{footer.location}</span>
            </li>
            <li>
              <span>Open to remote & hybrid</span>
            </li>
          </ul>
        </div>
      </div>

      {/* the big wordmark, like the reference */}
      <div className="foot-mark" aria-hidden="true">
        {content.name}
      </div>

      <div className="foot-base">
        <span>
          © {new Date().getFullYear()} {content.name}
        </span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
