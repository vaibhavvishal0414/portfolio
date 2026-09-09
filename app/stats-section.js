import { stats } from "../content";
import Counter from "./counter";
import { Reveal } from "./reveal";

export default function StatsSection() {
  return (
    <section className="section stats-section" id="numbers">
      <Reveal as="span" className="section-label">
        <i className="dot" />
        By the numbers
      </Reveal>

      <dl className="stats">
        {stats.map((s, i) => (
          <Reveal className="stat" key={s.label} delay={i * 90}>
            <dt>
              <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </dt>
            <dd>{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
