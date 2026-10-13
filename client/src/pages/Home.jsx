import { Link } from "react-router-dom";
import { heroShowcase, options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";
import option1Photo from "../assets/option1-photo.jpg";
import option2Photo from "../assets/option2-photo.jpeg";
import option3Photo from "../assets/option3-photo.jpeg";
import option4Photo from "../assets/option4-photo.jpeg";
import heroShowcasePhoto from "../assets/hero-showcase.jpg";

const optionPhotos = {
  option1: option1Photo,
  option2: option2Photo,
  option3: option3Photo,
  option4: option4Photo
};

// Photo(s) available for the hero showcase card — keyed to match
// heroShowcase.photo in content.js.
const showcasePhotos = {
  communityPhoto: heroShowcasePhoto
};

// Small line-style icon set for the audience badge and feature rows —
// kept minimal (single stroke weight, no fill) to match the reference look.
const icons = {
  sprout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6Z" />
      <path d="M12 13c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5Z" />
    </svg>
  ),
  trendDown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6l7 7 4-4 7 7" />
      <path d="M21 10v6h-6" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 10c0 1.66 3.58 3 8 3s8-1.34 8-3M4 14c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8.5 12 4l8.5 4.5v7L12 20l-8.5-4.5v-7Z" />
      <path d="M3.5 8.5 12 13l8.5-4.5" />
      <path d="M12 13v7" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9.5" r="2.4" />
      <path d="M15.7 14.2c2.4.4 4.3 2.4 4.3 5" />
    </svg>
  ),
  farmer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8.5h16" />
      <path d="M6.5 8.5 8 5h8l1.5 3.5" />
      <circle cx="12" cy="11" r="3" />
      <path d="M4.5 20c0-4.2 3-6.5 7.5-6.5s7.5 2.3 7.5 6.5" />
    </svg>
  ),
  youth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7.5c1.8-2.3 5.3-3.1 8.5-1.8l3.5 1.5-1.2 2.2" />
      <circle cx="12" cy="10.5" r="3.1" />
      <path d="M5 20c0-4.1 2.8-6.4 7-6.4s7 2.3 7 6.4" />
      <path d="M16.5 8.5h2" />
    </svg>
  ),
  women: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7.5" r="3" />
      <path d="M12 10.5v5.5M9 13.5h6M9.5 20l2.5-4 2.5 4" />
    </svg>
  )
};

const audienceIcon = { Farmers: "farmer", Youth: "youth", Women: "women" };

const optionDisplayOrder = ["option1", "option3", "option2", "option4"];

// "**word**" -> <strong>word</strong>, everything else rendered as-is.
function renderBold(text) {
  return text.split("**").map((chunk, i) => (i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk));
}

function OptionCard({ option, photo }) {
  const cardRef = useTilt(5);
  const hasPhoto = Boolean(photo);

  return (
    <Link
      ref={cardRef}
      className={`option-card${hasPhoto ? " has-photo" : ""}`}
      id={option.id}
      to={`/${option.id}`}
    >
      <div className={hasPhoto ? "card-copy" : undefined}>
        <h3>{option.title}</h3>
        <div className="desc">{option.desc}</div>
        <div className="go">
          Explore
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
      </div>
      {hasPhoto && (
        <div className="card-photo">
          <img src={photo} alt="" />
        </div>
      )}
    </Link>
  );
}

export default function Home() {
  useReveal([]);

  return (
    <div className="page active" id="page-home">
      <div className="hero-intro-wrap" id="intro">
        <div className="hero-bg"></div>

        <section className="hero">
          <div className="wrap showcase-wrap">
            <div className="showcase-top">
              <div className="showcase-title-group">
                <div className="showcase-eyebrow-row">
                  <span className="showcase-leaf">{icons.sprout}</span>
                  <h1 className="showcase-heading">{heroShowcase.titleLine}</h1>
                </div>
              </div>

              <div className="audience-badge">
                {heroShowcase.audiences.map((label) => (
                  <div className="audience-item" key={label}>
                    <span>{icons[audienceIcon[label]]}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="showcase-goal">
              <div className="feature-icon">{icons[heroShowcase.features[heroShowcase.features.length - 1].icon]}</div>
              <div className="feature-text">
                <span className="goal-label">Our goal</span>
                {renderBold(heroShowcase.features[heroShowcase.features.length - 1].text)}
              </div>
            </div>

            <div className="showcase-body">
              <div className="feature-panel">
                {heroShowcase.features.slice(0, 4).map((f, i) => (
                  <div className="feature-row" key={i}>
                    <div className="feature-icon">{icons[f.icon]}</div>
                    <div className="feature-text">
                      {renderBold(f.text)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="feature-photo">
                <img src={showcasePhotos[heroShowcase.photo]} alt={heroShowcase.photoAlt} />
              </div>
            </div>

          </div>
        </section>
      </div>

      <section className="options">
        <div className="wrap">
          <div className="options-head">
            <h2>Rural livelihood development </h2>
            <p>Select an area to see what we offer, who we serve, and the projects we've delivered.</p>
          </div>
          <div className="option-stack">
            {[...options]
              .sort((a, b) => optionDisplayOrder.indexOf(a.id) - optionDisplayOrder.indexOf(b.id))
              .map((opt) => {
              return <OptionCard option={opt} photo={optionPhotos[opt.id]} key={opt.id} />;
              })}
          </div>
        </div>
      </section>

      <CtaStrip contact={contact} />
    </div>
  );
}