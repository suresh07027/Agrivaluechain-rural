import { Link, Navigate, useParams } from "react-router-dom";
import { contact, financePages } from "../data/content";
import { CtaStrip } from "../components/Footer";
import { HeroBackdrop, useHeaderOffset } from "../components/ecoShared";
import "../styles/ecoPackaging.css"; // shared page canvas + hero (eco-*)
import "../styles/financePage.css";

// Bolds ₹ amounts and percentages inside a sentence.
const FIGURE = /(₹[\d,.]+ lakhs|\d+%)/g;
function Figures({ text }) {
  return text
    .split(FIGURE)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>));
}

const inr = (n) => Number(n).toLocaleString("en-IN");
const STATUS_TONE = { Obtained: "done", Applied: "progress", "Still to apply": "pending" };
const isNumeric = (col) => col.type === "money" || col.type === "num";

function Eyebrow({ children }) {
  return <h2 className="fin-eyebrow"><span>{children}</span></h2>;
}

function Cell({ col, value }) {
  if (value === null || value === undefined || value === "") return <span className="fin-dash">—</span>;
  if (col.type === "money") return inr(value);
  if (col.type === "status") return <span className={`fin-pill tone-${STATUS_TONE[value] || "pending"}`}>{value}</span>;
  return value;
}

// Progress bar + counts for a status column (statutory clearances).
function StatusMeter({ bill }) {
  const col = bill.columns.find((c) => c.type === "status");
  const order = ["Obtained", "Applied", "Still to apply"];
  const counts = order.map((s) => ({ status: s, n: bill.rows.filter((r) => r[col.key] === s).length })).filter((c) => c.n);
  const total = bill.rows.length;
  const done = counts.find((c) => c.status === "Obtained")?.n ?? 0;
  return (
    <div className="fin-meter-wrap">
      <p className="fin-meter-top"><strong>{done} of {total}</strong> clearances obtained</p>
      <div className="fin-meter" role="img" aria-label={`${done} of ${total} clearances obtained`}>
        {counts.map((c) => <span key={c.status} className={`tone-${STATUS_TONE[c.status]}`} style={{ flexGrow: c.n }} />)}
      </div>
      <ul className="fin-meter-key">
        {counts.map((c) => <li key={c.status} className={`tone-${STATUS_TONE[c.status]}`}><i />{c.status} <b>{c.n}</b></li>)}
      </ul>
    </div>
  );
}

function Bill({ bill, no }) {
  const totalIdx = bill.total ? bill.columns.findIndex((c) => c.key === bill.total.col) : -1;
  const lead = totalIdx + (bill.index ? 1 : 0); // cells before the total value in the footer row
  const after = bill.columns.length - totalIdx - 1;

  return (
    <details className="fin-bill" id={bill.id} open={!bill.collapsed}>
      <summary>
        
        <span className="fin-bill-title">
          <strong>{bill.title}</strong>
          {bill.note && <em>{bill.note}</em>}
        </span>
        {bill.total && (
          <span className="fin-bill-total">
            <small>{bill.total.label}</small>
            <b>{bill.total.display}</b>
          </span>
        )}
        <i className="fin-chev" aria-hidden="true" />
      </summary>

      <div className="fin-bill-body">
        <p className="fin-unit">{bill.unit} · {bill.rows.length} {bill.rows.length === 1 ? "item" : "items"}</p>
        {bill.meter === "status" && <StatusMeter bill={bill} />}

        <div className="fin-tablewrap">
          <table className="fin-table">
            <thead>
              <tr>
                {bill.index && <th className="fin-sl">Sl no.</th>}
                {bill.columns.map((c) => (
                  <th key={c.key} className={isNumeric(c) ? "is-num" : ""}>{c.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bill.rows.map((row, i) => (
                <tr key={row.item}>
                  {bill.index && <td className="fin-sl">{i + 1}</td>}
                  {bill.columns.map((c) => (
                    <td key={c.key} className={isNumeric(c) ? "is-num" : ""} data-label={c.label}>
                      <Cell col={c} value={row[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {bill.total && (
              <tfoot>
                <tr>
                  <td colSpan={lead} className="fin-total-label">{bill.total.label}</td>
                  <td className="is-num fin-total-value">{bill.total.value}</td>
                  {after > 0 && <td colSpan={after} />}
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {bill.footnote && <p className="fin-footnote">{bill.footnote}</p>}
      </div>
    </details>
  );
}

function Section({ section }) {
  return (
    <section className="fin-block">
      <Eyebrow>{section.label}</Eyebrow>

      {section.kind === "text" && (
        <p className="fin-statement"><Figures text={section.text} /></p>
      )}

      {section.kind === "chips" && (
        <ul className="fin-chips">
          {section.items.map((c) => <li key={c}>{c}</li>)}
        </ul>
      )}

      {section.kind === "cards" && (
        <ol className="fin-cards">
          {section.items.map((it, i) => (
            <li key={it.label} className="fin-card">
              
              <h3>{it.label}</h3>
              <p><Figures text={it.text} /></p>
              {it.chips && (
                <ul className="fin-chips fin-chips-sm">
                  {it.chips.map((c) => <li key={c}>{c}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default function FinancePage() {
  const { sectionId } = useParams();
  useHeaderOffset();
  const page = financePages[sectionId];
  if (!page) return <Navigate to="/" replace />;

  const other = financePages[sectionId === "government" ? "private" : "government"];

  return (
    <main className={`eco-page fin-page fin-${page.id}`}>
      <section className="eco-hero">
        <HeroBackdrop />
        <div className="wrap fin-hero-copy">
          <span className="eco-tag">{page.tag}</span>
          <h1>{page.title}</h1>
          <p className="eco-lead">{page.lead}</p>
        </div>
      </section>

      <div className="wrap fin-wrap">
        <div className="fin-figures">
          {page.figures.map((f) => (
            <article key={f.value + f.label + f.caption} className="fin-figure">
              <p className="fin-figure-label">{f.label}</p>
              <p className="fin-figure-value">{f.value}</p>
              <p className="fin-figure-cap">{f.caption}</p>
            </article>
          ))}
        </div>

        {page.sections.map((s) => <Section key={s.label} section={s} />)}

        {page.bills?.length > 0 && (
          <section className="fin-block">
            <Eyebrow>{page.billsLabel}</Eyebrow>
            <div className="fin-bills">
              {page.bills.map((b, i) => <Bill key={b.id} bill={b} no={i + 1} />)}
            </div>
          </section>
        )}

        <Link to={`/financial-institutions/${other.id}`} className="fin-switch">
          <span className="fin-switch-text">
            <small>Also see</small>
            <strong>{other.title}</strong>
            <em>{other.sub}</em>
          </span>
          <span className="fin-switch-go" aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <CtaStrip contact={contact} />
    </main>
  );
}