import { testimonials } from "../content";
import { Reveal } from "./reveal";

function Quote() {
  return (
    <svg className="quote-mark" viewBox="0 0 30 22" fill="none" aria-hidden="true">
      <path
        d="M0 22V12.4C0 5.9 3.7 1.3 10.6 0l1.3 3.2c-3.6 1.2-5.4 3.3-5.4 6.2h5.2V22H0Zm17.6 0V12.4C17.6 5.9 21.3 1.3 28.2 0l1.3 3.2c-3.6 1.2-5.4 3.3-5.4 6.2h5.2V22h-11.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className={`section reviews${testimonials.length === 1 ? " reviews--single" : ""}`}
      id="reviews"
    >
      <Reveal as="header" className="section-head">
        <span className="section-label">
          <i className="dot" />
          What people say
        </span>
        <p className="section-note">
          Feedback from the people who use what I design, and the teams I build it
          with.
        </p>
      </Reveal>

      <div className="review-grid">
        {testimonials.map((t, i) => (
          <Reveal as="figure" className="review" key={t.name + t.quote.slice(0, 20)} delay={i * 110}>
            <Quote />
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="review-name">{t.name}</span>
              <span className="review-role">
                {t.role}
                {t.context ? ` · ${t.context}` : ""}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
