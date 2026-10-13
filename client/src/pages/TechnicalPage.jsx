import { Link } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import technicalBg from "../assets/technical-hero-bg.jpeg";
import offerProduceImage from "../assets/option1-photo.jpg";
import offerFacilityImage from "../assets/integrated-packhouse-layout.jpeg";

// 3D Scope of Deliverables component
import ScopeOfDeliverables from "../components/scope/ScopeOfDeliverables";

const option = options.find((o) => o.id === "option1");

/* =========================================================
   WHO WE SERVE ICONS
========================================================= */

function IconLandmark(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  );
}

function IconFileText(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

function IconSettings(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function IconSnowflake(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v20M4.93 6l14.14 12M19.07 6 4.93 18M5 12h14" />
      <path d="m12 2-2 3m2-3 2 3m0 14-2 3m2-3 2 3M4.93 6l3.46.2M4.93 6l1.02 3.3m13.12-3.3-3.46.2m3.46-.2-1.02 3.3M4.93 18l3.46-.2M4.93 18l1.02-3.3m13.12 3.3-3.46-.2m3.46.2-1.02-3.3" />
    </svg>
  );
}

function IconLeaf(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.5 3.5C12 3.8 5.3 7.3 5.3 13.2c0 3.1 2.2 5.3 5.3 5.3 5.9 0 9.4-6.7 9.9-15Z" />
      <path d="M3.5 21c2.2-4.5 5.4-7.8 10.2-10.2" />
    </svg>
  );
}

function IconWarehouse(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 10 9-6 9 6v10H3V10Z" />
      <path d="M7 20v-6h10v6M3 10h18M7 10v2m5-2v2m5-2v2" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

/* =========================================================
   ICON MAPPING
========================================================= */

const segmentIcons = {
  "government-institutions": IconLandmark,
  "private-companies": IconBriefcase,
};

const offerIcons = [IconFileText, IconSettings];

/* =========================================================
   TECHNICAL PAGE
========================================================= */

export default function TechnicalPage() {
  useReveal([]);

  return (
    <div
      className="page active page-technical"
      id="page-option1"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="detail-hero technical-hero">
        <img
          className="technical-hero-photo"
          src={technicalBg}
          alt="Agritech field scene with crop monitoring, drone, and farm infrastructure"
        />

        <div className="wrap">
          <div className="technical-hero-copy">
            <h1>{option.heroTitle}</h1>

            <p className="sub">{option.heroSub}</p>
          </div>
        </div>
      </div>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="section who-serve section-serve">
        <div className="wrap serve-wrap">
          <div className="serve-heading">
            <div className="section-eyebrow">
              Our Clients
            </div>

            <h2>Whom we serve</h2>

            <p className="section-lede">
              We partner with organizations across sectors to
              deliver meaningful and measurable impact.
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
                  <span
                    className="audience-card-orbit"
                    aria-hidden="true"
                  />

                  <span className="audience-card-icon">
                    {Icon && <Icon />}
                  </span>

                  <span className="audience-card-name">
                    {seg.name}
                  </span>

                  {seg.teaser && (
                    <p className="audience-card-desc">
                      {seg.teaser}
                    </p>
                  )}

                  <span
                    className="audience-card-arrow"
                    aria-hidden="true"
                  >
                    <IconArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE OFFER
      ===================================================== */}

      <section className="section section-offer">
        <div className="wrap">
          <div className="offer-heading-row">
            <div className="offer-heading-copy">
              <div className="section-eyebrow">
                Our Services
              </div>

              <h2>What we offer</h2>
              <span className="offer-heading-rule" aria-hidden="true" />
            </div>

            <div className="offer-floating-icons" aria-hidden="true">
              <span className="offer-floating-icon offer-floating-icon-cold">
                <IconSnowflake />
              </span>
              <span className="offer-floating-icon offer-floating-icon-farm">
                <IconLeaf />
              </span>
              <span className="offer-floating-icon offer-floating-icon-warehouse">
                <IconWarehouse />
              </span>
            </div>
          </div>

          <div className="offer-cards">
            {option.offerings.map((item, i) => {
              const Icon =
                offerIcons[i] ||
                offerIcons[offerIcons.length - 1];

              return (
                <div className="offer-card" key={i}>
                  <div className="offer-card-visual" aria-hidden="true">
                    <img
                      src={i === 0 ? offerProduceImage : offerFacilityImage}
                      alt=""
                    />
                  </div>

                  <span className="offer-card-icon">
                    {Icon && <Icon />}
                  </span>

                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          3D SCOPE OF DELIVERABLES

          Replaces the old normal bullet-list section.

          Component:
          src/components/scope/ScopeOfDeliverables.jsx
      ===================================================== */}

      <ScopeOfDeliverables />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaStrip contact={contact} />
    </div>
  );
}
