import Link from "next/link";
import { content } from "../../../content";
import Counter from "../../counter";
import SiteFooter from "../../site-footer";
import { Reveal, SplitText } from "../../reveal";

export const metadata = {
  title: "Clinic Core — POS for clinical billing · Vaibhav Vishal",
  description:
    "A unified, state-driven POS that replaced fragmented billing tools for 300+ frontline healthcare staff. 40% faster invoicing.",
};

const metrics = [
  { to: 40, suffix: "%", label: "faster invoice processing" },
  { to: 25, suffix: "–30%", label: "less manual effort for field & ops" },
  { to: 300, suffix: "+", label: "staff across care centres" },
];

const facts = [
  ["Role", "Product Designer — end to end"],
  ["Client", "Emoha Elder Care"],
  ["Year", "2024–25"],
  ["Type", "0 to 1 · Mobile · Payments"],
];

const findings = [
  [
    "Billing spanned multiple tools; staff rebuilt the same customer context in each one",
    "One node-scoped system — customer, invoice and cash in a single place",
  ],
  [
    "Cash was tracked by hand and reconciled at day close",
    "Cash became a first-class payment method with its own state, not an offline afterthought",
  ],
  [
    "At peak hours, nobody could say whether a payment had actually landed",
    "Explicit payment state on every invoice",
  ],
  [
    "Invoice creation took too many steps to complete at the counter",
    "Linear guided checkout, mobile-first",
  ],
  [
    "No live view of what had been collected",
    "Dashboard surfacing receivables and pending cash per node",
  ],
];

const decisions = [
  {
    title: "State-driven billing",
    body: "Every invoice carries an explicit payment state rather than an implied one. This was the core bet — clarity over speed.",
  },
  {
    title: "Mobile-first",
    body: "The people billing are standing up and moving between rooms, not sitting at a desk.",
  },
  {
    title: "Node-based architecture",
    body: "Staff are assigned to a node at signup and select it at login, so invoices, customers and cash are scoped correctly without manual filtering.",
  },
  {
    title: "Guided, linear checkout",
    body: "Search customer → cart → payment method → confirmation. Prevents errors instead of correcting them afterwards.",
  },
];

export default function CaseStudy() {
  return (
    <>
      <main className="doc">
      <nav className="doc-nav">
        <Link className="back" href="/">
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 7H3M3 7l3.5-3.5M3 7l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
        <span className="doc-nav-meta">Emoha Elder Care · 2024–25</span>
      </nav>

      {/* sticky hero — the page slides up over it */}
      <div className="cs-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/pos-cover.jpg" alt="Clinic Core — a unified POS for clinical billing" />
        <div className="cs-hero-veil" />
        <span className="cs-scroll">Scroll</span>
      </div>

      <div className="cs-sheet">
        <div className="cs-sheet-inner">
          <Reveal as="p" className="eyebrow">
            <i className="dot" />
            Case study · 0 to 1
          </Reveal>

          <SplitText as="h1" className="cs-title" text="Clinic Core" stagger={70} />

          <SplitText
            as="p"
            className="doc-lede"
            text="A unified POS for clinical billing — invoicing, payment collection and reconciliation in one guided flow."
          />

          <Reveal as="dl" className="facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal as="dl" className="metrics" delay={80}>
            {metrics.map((m) => (
              <div key={m.label}>
                <dt>
                  <Counter to={m.to} suffix={m.suffix} />
                </dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>01</span> Problem
        </h2>
        <p>
          Frontline clinic staff were billing across multiple disconnected tools.
          Invoice creation took too many steps, cash was tracked manually, and payment
          status went stale during peak hours — so staff couldn&rsquo;t tell what had
          actually been collected without chasing someone. Across 300+ users and
          multiple care centres, that uncertainty showed up as reconciliation errors
          and repeated follow-ups.
        </p>
      </Reveal>

      <Reveal as="figure" className="doc-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/pos-hands.jpg" alt="Invoice creation in context" />
        <figcaption>Billing happens standing up, mid-shift — not at a desk.</figcaption>
      </Reveal>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>02</span> Research
        </h2>
        <p>
          I walked the existing billing flow end to end with the staff who run it, then
          worked through the PRD with product and engineering to separate the hard
          constraints from the assumptions. Five patterns held across users, and each
          one produced a decision.
        </p>

        <div className="findings">
          <div className="findings-head">
            <span>What we found</span>
            <span>What it changed</span>
          </div>
          {findings.map(([found, changed]) => (
            <div className="finding" key={found}>
              <p>{found}</p>
              <p>{changed}</p>
            </div>
          ))}
        </div>

        <p className="pull">
          Almost every complaint was about <em>not knowing</em> something, not about the
          system being slow. Speed was what people reported; missing state was what
          caused it.
        </p>

        <p>
          That reframe is what moved the solution toward state-driven billing rather
          than a faster invoice form — and it&rsquo;s why the gain came from clarity
          rather than from cutting clicks.
        </p>
      </Reveal>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>03</span> Iteration
        </h2>

        <h3>What I built first</h3>
        <p>
          Invoicing lived inside the customer record. To bill someone you searched the
          customer list, opened their profile, and hit <em>Create invoice</em> there. It
          was structurally clean — the invoice belongs to the customer, so put the
          action where the object lives.
        </p>

        <h3>Why it failed</h3>
        <p>
          Staff told me it was uncomfortable in practice. At the counter they
          aren&rsquo;t thinking <em>&ldquo;open this person&rsquo;s record&rdquo;</em> —
          they&rsquo;re thinking <em>&ldquo;take this payment.&rdquo;</em> I&rsquo;d
          modelled the data relationship instead of the task, and buried a
          high-frequency action two levels down for someone standing up with a queue in
          front of them.
        </p>

        <h3>What replaced it</h3>
        <p>
          A floating <strong>+</strong> on the home screen that goes straight to invoice
          creation, with the customer chosen from a dropdown inside the flow before
          adding cart items. Same steps, inverted order — the task starts first, the
          customer is picked as part of it. The customer-profile route stayed, because
          it&rsquo;s still right when you&rsquo;re already looking at someone&rsquo;s
          history. It stopped being the only path.
        </p>

        <p className="pull">
          The frequent action belongs on the surface, not behind the object it relates
          to.
        </p>
      </Reveal>

      <Reveal as="figure" className="doc-figure doc-figure--split">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/pos-home.jpg" alt="Home screen with the floating create-invoice action" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/pos-flow.jpg" alt="Invoice creation flow — entry point through to customer search" />
      </Reveal>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>04</span> Decisions
        </h2>
        <ol className="decisions">
          {decisions.map((d) => (
            <li key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </li>
          ))}
        </ol>
        <p className="tradeoff">
          <strong>What it cost:</strong> the linear flow adds steps for experienced staff
          who&rsquo;d otherwise skip ahead, and mobile-first meant trading away the
          density a desktop reconciliation view could have offered.
        </p>
      </Reveal>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>05</span> Outcome
        </h2>
        <p>
          Invoicing got materially faster, but the changes staff talked about were the
          quieter ones: fewer reconciliation errors, fewer payment follow-ups, and fewer
          billing disputes — all downstream of payment status being visible rather than
          inferred.
        </p>

        <blockquote>
          <p>
            &ldquo;Creating invoices now takes seconds. I no longer switch between tools
            or worry about missing payments.&rdquo;
          </p>
          <cite>Vishal Mishra · COCO</cite>
        </blockquote>

        <p>
          <strong>What I&rsquo;d measure next:</strong> error rate per invoice before vs.
          after, and time-to-reconcile at day close — both stronger signals than raw
          speed.
        </p>
      </Reveal>

      <Reveal as="section" className="doc-section">
        <h2>
          <span>06</span> What I took from it
        </h2>
        <p>
          Speed mattered more than polish. Clear state removed more confusion than any
          visual refinement did. And preventing an error is worth more than a good error
          message.
        </p>
      </Reveal>
      </div>
    </main>
      <SiteFooter />
    </>
  );
}
