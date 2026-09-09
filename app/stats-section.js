import { stats } from "../content";
import Counter from "./counter";

export default function StatsSection() {
  return (
    <section className="section stats-section" id="numbers">
      <span className="section-label">
        <i className="dot" />
        By the numbers
      </span>

      <dl className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <dt>
              <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
