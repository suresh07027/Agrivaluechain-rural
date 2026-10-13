import { useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import governmentPhoto from "../assets/government.jpeg";
import companiesPhoto from "../assets/companies.jpeg";
import ProjectCarousel, { PROJECTS } from "../components/ProjectCarousel";

const photos = {
  government: governmentPhoto,
  companies: companiesPhoto
};

// "**word**" -> <span class="accent">word</span>, everything else as-is.
function renderAccent(text) {
  return text.split("**").map((chunk, i) => (i % 2 === 1 ? <span className="accent" key={i}>{chunk}</span> : chunk));
}

const leafIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21v-8" />
    <path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6Z" />
    <path d="M12 13c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5Z" />
  </svg>
);

const handSproutIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19c2.8-2.8 5.5-3.4 8.2-2.1 1.2.6 2.3 1.3 3.8 1.3 1.6 0 2.7-.7 4-2" />
    <path d="M12.2 16.8c-.4-3.5.8-6.5 3.8-8.8" />
    <path d="M15.9 8c.1-2.4 1.7-4.1 4.5-4.3-.1 2.8-1.6 4.4-4.5 4.3Z" />
    <path d="M12.2 13.2c-2.1-2-4.3-2.1-6.3-.5 1.5 2.1 3.6 2.4 6.3.5Z" />
  </svg>
);

const landmarkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9h18L12 4 3 9Z" />
    <path d="M5 10v7M9 10v7M15 10v7M19 10v7M3 19h18M2 21h20" />
  </svg>
);

function BotanicalCluster({ className }) {
  return (
    <svg className={className} viewBox="0 0 260 220" fill="none" aria-hidden="true">
      <path d="M258 12C207 42 178 75 143 111 104 151 65 176 8 211" stroke="#1B4020" strokeWidth="3" strokeLinecap="round" />
      <path d="M205 54c-21-9-31-27-27-48 20 3 31 19 27 48Z" fill="#7CA33D" />
      <path d="M183 76c-19-2-31-13-35-31 19-4 33 8 35 31Z" fill="#C4D97D" />
      <path d="M157 102c-22-5-32-19-31-39 20 1 32 15 31 39Z" fill="#1B4020" />
      <path d="M133 125c-19 1-32-8-39-26 18-7 33 3 39 26Z" fill="#8DB93E" />
      <path d="M105 149c-21-1-34-13-38-32 20-3 34 9 38 32Z" fill="#7CA33D" />
      <path d="M78 170c-19 3-34-5-42-22 18-8 33-1 42 22Z" fill="#C4D97D" opacity="0.78" />
      <path d="M46 193c-17 1-29-7-35-22 16-5 28 2 35 22Z" fill="#1B4020" opacity="0.82" />
      <path d="M221 45c-13-14-13-27-4-40 13 10 15 24 4 40Z" stroke="#1B4020" strokeWidth="2" opacity="0.18" />
      <path d="M118 143c-15-13-17-27-10-40 15 9 18 23 10 40Z" stroke="#7CA33D" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

// Must stay in sync with SLUG_TO_PROJECT_NUM in ProjectDetailPage.jsx —
// used here to filter ProjectCarousel's PROJECTS down to this audience's
// related projects (matched by slug).
const PROJECT_NUM_TO_SLUG = {
  "01": "tamil-nadu-warehousing-corporation",
  "02": "vegetable-cluster-development-olakkur",
  "03": "lemon-value-chain",
  "04": "onion-value-chain",
  "05": "agro-food-supply",
  "06": "carrot-value-chain",
  "07": "mango-drone-study"
};

const option = options.find((o) => o.id === "option1");

export default function AudiencePage() {
  const { audienceId } = useParams();
  const segment = option.segments.find((s) => s.slug === audienceId);
  const page = option.audiencePages[audienceId];

  useReveal([audienceId]);

  if (!segment || !page) return <Navigate to="/option1" replace />;

  const photo = photos[page.photo];

  const relatedSlugs = (page.relatedProjectNums || []).map(
    (num) => PROJECT_NUM_TO_SLUG[num]
  );
  const carouselItems = PROJECTS.filter((p) => relatedSlugs.includes(p.slug));

  return (
    <div className={`page active page-audience accent-${segment.accent}`} id={`page-${segment.slug}`}>
      <div className="audience-hero">
        <div className="audience-hero-photo">
          <img src={photo} alt={`${segment.name} working in the agricultural value chain`} />
        </div>
        <div className="audience-hero-copy">
          <div className="wrap">
            <h1>{renderAccent(page.heroTitle)}</h1>
            <div className="title-divider">
              <span className="divider-leaf">{leafIcon}</span>
            </div>
            <p className="sub">{page.heroSub}</p>
          </div>
        </div>
      </div>

      <section className={`section audience-work section-serve${audienceId === "government-institutions" ? " government-serve" : ""}${audienceId === "private-companies" ? " private-serve" : ""}`}>
        {(audienceId === "government-institutions" || audienceId === "private-companies") && (
          <>
            <BotanicalCluster className="government-botanical government-botanical-top" />
            <BotanicalCluster className="government-botanical government-botanical-bottom" />
          </>
        )}
        <div className="wrap">
          <div className="government-serve-heading">
            <span className="government-serve-rule" aria-hidden="true" />
            <div>
              <div className="section-eyebrow">Our role</div>
              <h2>{audienceId === "government-institutions" ? "Technical consulting support for government institutions" : `How we work with ${segment.name.toLowerCase()}`}</h2>
              {audienceId === "government-institutions" && (
                <div className="government-divider" aria-hidden="true"><span>{leafIcon}</span></div>
              )}
            </div>
          </div>
          <div className="audience-blocks">
            {segment.blocks.map((b, i) => (
              <div className="audience-block" key={i}>
                <div className="government-card-top">
                  <span className="government-card-icon">{i === 0 ? handSproutIcon : landmarkIcon}</span>
                  <div className="government-card-label-wrap">
                    <div className="label">{b.label}</div>
                    <span className="government-card-label-line" aria-hidden="true" />
                  </div>
                </div>
                {b.text && <p>{b.text}</p>}
                {b.list && (
                  <ul className="whom-list">
                    {b.list.map((item, j) => (
                      <li key={j}>
                        <span className="num">{j + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {carouselItems.length > 0 && (
        <section className="projects section-projects projects-photo-bg">
          <div className="wrap">
            <h2>Our experience on work with {segment.name.toLowerCase()}</h2>
            <ProjectCarousel
              items={carouselItems}
              imageWidth={340}
              imageHeight={340}
              labelColor="#F7F2E4"
            />
          </div>
        </section>
      )}

      <CtaStrip contact={contact} />
    </div>
  );
}