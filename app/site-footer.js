import Link from "next/link";
import { content, footer } from "../content";
import { Reveal } from "./reveal";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      {/* video band — hard edge at the bottom, wordmark straddles it */}
      <div className="foot-band">
        <div className="foot-bg" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/footer-poster.jpg"
          >
            <source src="/footer-bg.mp4" type="video/mp4" />
          </video>
          <div className="foot-bg-veil" />
        </div>

        <div className="foot-grid">
          {/* left — direct contact */}
          <Reveal className="foot-block foot-block--contact">
            <span className="foot-rule" />
            {footer.phone ? (
              <a href={`tel:${footer.phone.replace(/\s/g, "")}`}>{footer.phone}</a>
            ) : null}
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </Reveal>

          {/* middle — navigation + elsewhere */}
          <Reveal className="foot-block foot-block--nav" delay={80}>
            <span className="foot-block-title">Navigation</span>
            <span className="foot-rule" />
            <ul className="foot-nav">
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
          </Reveal>

          <Reveal className="foot-block foot-block--social" delay={120}>
            <ul className="foot-social">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* right — availability */}
          <Reveal className="foot-block foot-block--cta" delay={160}>
            <span className="foot-block-title">{footer.availabilityTitle}</span>
            <span className="foot-rule" />
            <p className="foot-avail">
              <i className="pulse" />
              {footer.availability}
            </p>
            <p className="foot-note">{footer.blurb}</p>
            <a className="btn btn--solid" href={`mailto:${content.email}`}>
              Start a conversation
            </a>
          </Reveal>
        </div>
      </div>

      {/* the wordmark crosses the video edge */}
      <div className="foot-wordmark" aria-hidden="true">
        {content.name}
      </div>

      <div className="foot-base">
        <span>
          © {new Date().getFullYear()}
          <br />
          {content.name}
        </span>
        <span>
          {content.role}
          <br />
          {footer.location}
        </span>
        <span>
          Built with
          <br />
          Next.js
        </span>
        <span>
          Designed by
          <br />
          {content.name}
        </span>
      </div>
    </footer>
  );
}
