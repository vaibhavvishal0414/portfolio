import Link from "next/link";
import { projects } from "../content";

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11 11 3M11 3H4.5M11 3v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ project }) {
  const inner = (
    <>
      <div className="card-media">
        {project.cover ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={project.cover} alt={`${project.title} — preview`} loading="lazy" />
        ) : (
          <span className="card-media-empty" aria-hidden="true" />
        )}
        {project.metric ? (
          <span className="card-metric">
            <strong>{project.metric.value}</strong>
            {project.metric.label}
          </span>
        ) : null}
      </div>

      <div className="card-body">
        <div className="card-head">
          <h3>{project.title}</h3>
          <span className="card-go" aria-hidden="true">
            {project.href ? <Arrow /> : "In progress"}
          </span>
        </div>

        <p className="card-sub">{project.subtitle}</p>
        <p className="card-summary">{project.summary}</p>

        <div className="card-foot">
          <span>
            {project.context} · {project.year}
          </span>
          <span className="card-tags">
            {project.tags.map((t) => (
              <em key={t}>{t}</em>
            ))}
          </span>
        </div>
      </div>
    </>
  );

  if (project.href) {
    return (
      <Link className="card card--link" href={project.href}>
        {inner}
      </Link>
    );
  }
  return <article className="card">{inner}</article>;
}

export default function WorkSection() {
  return (
    <section className="section" id="work">
      <header className="section-head">
        <span className="section-label">
          <i className="dot" />
          Selected work
        </span>
        <p className="section-note">
          Enterprise platforms and consumer apps, mostly in healthcare. Case studies
          are written around the decisions, not the screenshots.
        </p>
      </header>

      <div className="cards">
        {projects.map((p) => (
          <Card key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
