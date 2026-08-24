import { Link } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel";
import useReveal from "../hooks/useReveal";
import technicalBg from "../assets/technical-hero-bg.jpeg";

const option = options.find((o) => o.id === "option1");

/* ---- Small inline icons for the "Who we serve" / "What we offer" cards ----
   Plain hand-drawn SVGs, no new dependency added. */
function IconLandmark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 21 8 3 8" />
    </svg>
  );
}
function IconBriefcase(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  );
}
function IconGraduationCap(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}
function IconFileText(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}
function IconSettings(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}
function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

const segmentIcons = {
  "government-institutions": IconLandmark,
  "private-companies": IconBriefcase,
  "educational-institutes": IconGraduationCap
};
const offerIcons = [IconFileText, IconSettings];

export default function TechnicalPage() {
  useReveal([]);

  return (
    <div className="page active page-technical" id="page-option1">
      <div className="detail-hero technical-hero">
        <img
          className="technical-hero-photo"
          src={technicalBg}
          alt="Agritech field scene with crop monitoring, drone, and farm infrastructure"
        />
        <div className="wrap">
          <Link className="back-link" to="/">
            &larr; Back to home
          </Link>
          <div className="technical-hero-copy">
            <h1>{option.heroTitle}</h1>
            <p className="sub">{option.heroSub}</p>
          </div>
        </div>
      </div>

      <section className="section who-serve section-serve">
        <div className="wrap serve-wrap">
          <div className="serve-heading">
            <div className="section-eyebrow">Our Clients</div>
            <h2>Whom we serve</h2>
            <p className="section-lede">
              We partner with organizations across sectors to deliver meaningful and measurable impact.
            </p>
          </div>
          <div className="audience-cards">
            {option.segments.map((seg) => {
              const Icon = segmentIcons[seg.slug];
              return (
                <Link
                  className={`audience-card accent-${seg.accent}`}
                  to={`/option1/${seg.slug}`}
                  key={seg.slug}
                >
                  <span className="audience-card-orbit" aria-hidden="true" />
                  <span className="audience-card-icon">{Icon && <Icon />}</span>
                  <span className="audience-card-name">{seg.name}</span>
                  {seg.teaser && <p className="audience-card-desc">{seg.teaser}</p>}
                  <span className="audience-card-arrow" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Summary — what we offer + scope of deliverables */}
      <section className="section section-offer">
        <div className="wrap">
          <div className="section-eyebrow">Our Services</div>
          <h2>What we offer</h2>
          <div className="offer-cards">
            {option.offerings.map((item, i) => {
              const Icon = offerIcons[i] || offerIcons[offerIcons.length - 1];
              return (
                <div className="offer-card" key={i}>
                  <span className="offer-card-icon">{Icon && <Icon />}</span>
                  <p>{item}</p>
                  <span className="offer-card-arrow" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-scope">
        <div className="wrap">
          <h2>Scope of deliverables</h2>
          <ul className="bullets">
            {option.scope.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Projects */}
      <section className="projects section-projects">
        <div className="wrap">
          <h2>Projects we&apos;ve worked on</h2>
          <ProjectCarousel imageWidth={340} imageHeight={340} />
          <div className="project-list">
            {option.projects.map((proj) => (
              <div className="project" key={proj.num}>
                <div className="pnum">{proj.num}</div>
                <div>
                  <h3>{proj.title}</h3>
                  <p>{proj.text}</p>
                  {proj.metrics.length > 0 && (
                    <div className="metric-row">
                      {proj.metrics.map((m, i) => (
                        <div className="metric" key={i}>
                          {m.value}
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip contact={contact} />
    </div>
  );
}