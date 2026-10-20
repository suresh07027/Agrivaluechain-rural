import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import collaborativeHeroBg from "../assets/collabrative/collab-hero-bg.jpeg";
import exportMarketImage from "../assets/capacity/Export.jpeg";
import postHarvestImage from "../assets/capacity/Post-harvest.jpeg";
import qualityImage from "../assets/capacity/Quality.jpeg";
import linkingBg from "../assets/Linking-farmers/linking-bg.jpeg";
import developmentFarmImage from "../assets/Linking-farmers/development-farm.jpeg";
import largerFarmersGroupImage from "../assets/larger-farmers-group.png";
import smallAndMediumFarmersImage from "../assets/small-and-medium-farmers.png";
import smallFarmersGroupImage from "../assets/small-farmers-group.png";
import solarPanelsHoverImage from "../assets/solar.png";
import sustainableSolarImage from "../assets/Linking-farmers/sustainable-solar.svg";
import sustainableCoolingImage from "../assets/Linking-farmers/sustainable-cooling.svg";
import sustainableEthyleneImage from "../assets/Linking-farmers/sustainable-ethylene.svg";
import sustainableRefrigerantImage from "../assets/Linking-farmers/sustainable-refrigerants.svg";
import ProjectCarousel, { PROJECTS } from "../components/ProjectCarousel";

const collaborativeOfferTitles = [
  "Scientific storage studies",
  "Controlled environment research",
  "Training and capacity building",
  "Innovative quality measurement"
];

const linkingSustainableCards = [
  {
    title: "Integration of solar panels system",
    description: "Harnessing clean energy for efficient and cost-effective operations.",
    image: sustainableSolarImage,
    hoverImage: solarPanelsHoverImage,
    accent: "green",
  },
  {
    title: "Evaporative cooling",
    description: "Natural and efficient cooling for longer freshness and better quality.",
    image: sustainableCoolingImage,
    accent: "blue",
  },
  {
    title: "Ethylene and carbon dioxide management",
    description: "Controlled ripening and extended shelf life of fresh produce.",
    image: sustainableEthyleneImage,
    accent: "gold",
  },
  {
    title: "Natural refrigerants",
    description: "Eco-friendly cooling solutions for a greener and healthier planet.",
    image: sustainableRefrigerantImage,
    accent: "purple",
  },
];

function renderAccentTitle(text) {
  return text.split("**").map((chunk, i) => (
    i % 2 === 1 ? <span className="accent" key={i}>{chunk}</span> : chunk
  ));
}

function SustainableTechIcon({ index }) {
  const icons = [
    <><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /><path d="m12 3-2 3m2-3 2 3m0 12-2 3m2-3 2 3" /></>,
    <><path d="M12 3v18M5.6 6.4l12.8 11.2M18.4 6.4 5.6 17.6M5 12h14" /><path d="M17 4.5v4M15.5 6.5h3" /></>,
    <><path d="M12 21c4-4 6-8.4 6-12.4C14 8.1 10 10 8 13.5 6.7 16 8.2 19.3 12 21Z" /><path d="M12 21c0-4 1.4-7.4 4.3-10.3" /></>,
    <><path d="M4 17.5 9 12l3 3 8-9M16 6h4v4" /><path d="M5 20h14" /></>,
  ];

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

function LinkingProcessIcon({ index }) {
  const paths = [
    <><circle cx="8" cy="15" r="3" /><circle cx="16" cy="15" r="3" /><path d="M5 15V9h7l3 3h4v3M8 9V6h4" /></>,
    <><path d="m3 10 9-6 9 6v10H3V10Z" /><path d="M7 20v-6h10v6M7 10h10" /></>,
    <><path d="M3 7h18M3 12h18M3 17h18" /><circle cx="7" cy="7" r="2" /><circle cx="13" cy="12" r="2" /><circle cx="18" cy="17" r="2" /></>,
    <><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="M4 8v8l8 4 8-4V8M8 10v8M16 10v8" /></>,
    <><path d="M12 3v18M4.9 7.1l14.2 9.8M19.1 7.1 4.9 16.9M5 12h14" /><path d="m12 3-2 3m2-3 2 3m0 12-2 3m2-3 2 3" /></>,
    <><path d="m3 10 9-6 9 6v10H3V10Z" /><path d="M7 20v-6h10v6M3 10h18" /><path d="M4 7h4" /></>,
  ];

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[index]}
    </svg>
  );
}

function LinkingCapacityIcon({ index }) {
  const icons = [
    <><path d="M4 10h16v10H4z" /><path d="M7 10V7h4v3m2 0V7h4v3M8 14h2m4 0h2M8 17h2m4 0h2" /><path d="M12 3v4m-2-2 2-2 2 2" /></>,
    <><path d="M12 3v18M5.6 6.4l12.8 11.2M18.4 6.4 5.6 17.6M5 12h14" /><path d="M17 4.5v4" /><path d="M15.5 6.5h3" /></>,
    <><path d="m3 10 9-6 9 6v10H3V10Z" /><path d="M7 20v-6h10v6M3 10h18" /><path d="M7 11h10" /></>,
  ];

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

function CollaborativeOfferIcon({ index }) {
  const icons = [
    <><path d="M4 20h16M6 20V9l6-4 6 4v11M9 12h6M9 16h6" /></>,
    <><path d="M12 21V8M12 8c0-3 2.5-5 6-5 0 3-2.5 5-6 5ZM12 12c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" /></>,
    <><circle cx="12" cy="8" r="3" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></>,
    <><path d="m4 17.5 5-5 3 3 8-9M16 6h4v4" /></>
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>;
}

function LeafWatermark() {
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M11 35c1-15 10-23 26-24-1 15-9 24-26 24Z" stroke="currentColor" strokeWidth="2" /><path d="M11 35 31 17" stroke="currentColor" strokeWidth="2" /></svg>;
}

function CourseIcon({ type }) {
  const icons = {
    sprout: <><path d="M12 20V9" /><path d="M12 12C8 12 5 9.5 5 5c4.5 0 7 2.5 7 7ZM12 10c0-4 2.5-7 7-7 0 4.5-2.5 7-7 7Z" /></>,
    list: <><path d="M8 5h11M8 12h11M8 19h11" /><path d="M4 5h.01M4 12h.01M4 19h.01" /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 17h2" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20c0-4 2.3-6 5.5-6s5.5 2 5.5 6" /><path d="M16 5.5a2.5 2.5 0 0 1 0 5M16 14c2.8.2 4.5 2.1 4.5 5" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[type]}</svg>;
}

function toRomanNumeral(value) {
  const numerals = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  let result = "";
  let remaining = value;

  numerals.forEach(([number, numeral]) => {
    while (remaining >= number) {
      result += numeral;
      remaining -= number;
    }
  });

  return result;
}

export default function ServicePage() {
  const { optionId } = useParams();
  const resolvedOptionId = optionId === "linking-farmers"
    ? "option3"
    : optionId === "collaborative"
      ? "option2"
      : optionId === "capacity-development"
        ? "option4"
        : optionId;
  const option = options.find((o) => o.id === resolvedOptionId);
  const isCapacity = option?.id === "option4";
  const isCollaborative = option?.id === "option2";
  const isLinking = option?.id === "option3";
  const midh = option?.midh;
  const [activeCapacityFeature, setActiveCapacityFeature] = useState(null);

  const capacityHighlights = isCapacity
    ? [
        {
          label: "Export & Market Linkages",
          text: "Export packhouses, cold chain logistics providers, food processing companies, organised retail outlets, and distribution markets.",
          image: exportMarketImage,
        },
        {
          label: "Post-Harvest Management & Value Addition",
          text: "Participants are trained in handling, storage, grading, and value addition of produce to reduce losses and improve market returns.",
          image: postHarvestImage,
        },
        {
          label: "Quality, Safety & Environmental Sustainability",
          text: "Operational efficiency, quality assurance, and safety standards are essential in today's competitive agri-business environment.",
          image: qualityImage,
        },
      ]
    : [];

  useReveal([optionId]);

  if (!option) return <Navigate to="/" replace />;

  const heroClassName = isLinking || isCapacity
    ? "detail-hero technical-hero"
    : `detail-hero service-hero${isCollaborative ? " collaborative-hero" : ""}`;

  return (
    <div className={`page active${isCollaborative ? " collaborative-page" : ""}`} id={`page-${option.id}`}>
      <div className={heroClassName}>
        {isCollaborative && <img className="collaborative-hero-photo" src={collaborativeHeroBg} alt="Researchers collaborating on agricultural value chain development" />}
        {isCapacity && (
          <img
            className="capacity-hero-photo"
            src={option.heroImage}
            alt={option.heroImageAlt || "Capacity development training"}
          />
        )}
        {isLinking && (
          <img
            className="technical-hero-photo"
            src={linkingBg}
            alt="Farmers and buyers trading produce in a market setting"
          />
        )}
        <div className="wrap">
          {!isCollaborative && !isLinking && !isCapacity && <div className="tag">{option.tag}</div>}
          <div className={isCollaborative ? "collaborative-hero-copy" : isLinking || isCapacity ? "technical-hero-copy" : undefined}>
            <h1>{option.heroTitle}</h1>
            <p className="sub">{option.heroSub}</p>
          </div>
        </div>
      </div>

      {option.mouText && (
        <section className={`section section-mou${isCollaborative ? " collaborative-mou" : ""}`}>
          {isCollaborative ? <div className="collaborative-mou-banner"><div className="wrap collaborative-mou-wrap"><div className="collaborative-mou-card"><div className="collaborative-mou-badge">DOC</div><div className="collaborative-mou-divider" /><div><span className="collaborative-mou-kicker">Partnership milestone</span><h3>Memorandum of Understanding</h3><div className="collaborative-mou-rule" /><p><strong>Agri Value Chain has signed a Memorandum of Understanding</strong> with Tamil Nadu Agricultural University, Coimbatore, to strengthen training and development programs.</p></div></div>{option.image && <div className="collaborative-mou-photo"><img src={option.image} alt="Collaborative agricultural research" /></div>}</div></div> : <div className="wrap"><div className="mou-box"><h3>Memorandum of Understanding</h3><p>{option.mouText}</p></div></div>}
        </section>
      )}

      {option.heroImage && !isCapacity && !isLinking && (
        <div className="detail-media">
          <div className="wrap">
            <img
              className="detail-banner"
              src={option.heroImage}
              alt={option.heroImageAlt || ""}
            />
            {isLinking && <p className="linking-hero-caption">Meeting Tindivanam Vegetable Growers</p>}
          </div>
        </div>
      )}

      {option.contentImage && !isCapacity && (
        <div className="detail-media capacity-content-media">
          <div className="wrap">
            <img
              className="detail-banner"
              src={option.contentImage}
              alt={option.contentImageAlt || ""}
            />
          </div>
        </div>
      )}

      {option.hasFullContent ? (
        <>
          {option.intro && (
            <section className="section section-intro-block">
              <div className="wrap">
                {isCapacity ? (
                  <div className="capacity-intro-layout">
                    <img
                      className="capacity-intro-image"
                      src={option.contentImage}
                      alt={option.contentImageAlt || ""}
                    />
                    <div>
                      <p className="intro-para">{option.intro[0]}</p>
                      <ul className="capacity-highlight-list">
                        {option.intro.filter((para) => typeof para === "object" && para !== null && "label" in para).map((para, i) => {
                          const featureLabel = para.label.replace(/^\*+\s*/, "");
                          const active = activeCapacityFeature === featureLabel;

                          return (
                            <li key={`${featureLabel}-${i}`} className={`capacity-highlight-block${active ? " active" : ""}`}>
                              <button
                                type="button"
                                className={`capacity-highlight-trigger${active ? " active" : ""}`}
                                onMouseEnter={() => setActiveCapacityFeature(featureLabel)}
                                onMouseLeave={() => setActiveCapacityFeature(null)}
                                onFocus={() => setActiveCapacityFeature(featureLabel)}
                                onBlur={() => setActiveCapacityFeature(null)}
                                onClick={() => setActiveCapacityFeature(featureLabel)}
                              >
                                <strong>{featureLabel}</strong>
                              </button>
                              {active && (
                                <div className="capacity-highlight-image-popout">
                                  <h3>{featureLabel}</h3>
                                  <p>{para.text}</p>
                                  <img
                                    src={capacityHighlights.find((item) => item.label === featureLabel)?.image || exportMarketImage}
                                    alt={featureLabel}
                                  />
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      {option.intro.slice(1).filter((para) => typeof para === "string").map((para, i) => (
                        <p className="intro-para" key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                ) : option.intro.map((para, i) => (
                  <p className="intro-para" key={i}>
                    {para}
                  </p>
                ))}
              </div>
            </section>
          )}

          {option.offerings && (
            <section className="section section-offer">
              <div className="wrap">
                <h2>{option.offeringsTitle || "What we offer"}</h2>
                {option.offeringsIntro && (
                  <p className="section-intro">{option.offeringsIntro}</p>
                )}
                {isCollaborative ? (
                  <div className="collaborative-offer-grid">
                    {option.offerings.map((item, i) => <article className={`collaborative-offer-card accent-${i}`} key={item}><div className="collaborative-offer-icon"><CollaborativeOfferIcon index={i} /></div><div className="collaborative-offer-divider" /><div className="collaborative-offer-copy"><h3>{collaborativeOfferTitles[i]}</h3><p>{item}</p></div><div className="collaborative-offer-watermark"><LeafWatermark /></div></article>)}
                  </div>
                ) : <ul className="bullets">{option.offerings.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              </div>
            </section>
          )}

          {option.segments && (
            <section className="section section-serve">
              <div className="wrap">
                <h2>Whom we serve</h2>
                <div className="segment-grid">
                  {option.segments.map((seg, i) => (
                    <div className="segment" key={i}>
                      <h3>{seg.name}</h3>
                      {seg.quote && <div className="quote">{seg.quote}</div>}
                      {seg.blocks.map((b, j) => (
                        <div key={j}>
                          <div className="label">{b.label}</div>
                          <div className="worklist">{b.text}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {option.solutionBlock && (
            <section className="section section-solution">
              <div className="wrap">
                {isLinking ? (
                  <>
                    {option.solutionBlock.title && <h2>{option.solutionBlock.title}</h2>}
                    {option.solutionBlock.subtitle && (
                      <p className="section-eyebrow-note">{option.solutionBlock.subtitle}</p>
                    )}

                    <div className="linking-solution-layout">
                      <div className="linking-process-panel">
                        <div className="linking-process-gallery">
                          <figure className="linking-process-figure">
                            <img
                              className="linking-process-image"
                              src={developmentFarmImage}
                              alt="Development of farm-level post-harvest management infrastructure facilities"
                            />
                          </figure>
                          <figure className="linking-process-figure">
                            <img
                              className="linking-process-image"
                              src={option.heroImage}
                              alt={option.heroImageAlt || "Farmers meeting in Tindivanam"}
                            />
                            <figcaption className="linking-grower-caption">Meeting Tindivanam Vegetable Growers</figcaption>
                          </figure>
                        </div>
                      </div>

                    </div>
                  </>
                ) : (
                  <>
                    {option.solutionBlock.title && <h2>{option.solutionBlock.title}</h2>}
                    {option.solutionBlock.subtitle && (
                      <p className="section-eyebrow-note">{option.solutionBlock.subtitle}</p>
                    )}
                    <div className="solution-layout">
                      <img className="solution-image" src={option.solutionBlock.image} alt={option.solutionBlock.imageAlt || ""} />
                      <p className="solution-text">{option.solutionBlock.text}</p>
                    </div>
                  </>
                )}
              </div>
            </section>
          )}

          {option.capacityTiers && (
            <section className="section section-capacity">
              <div className="wrap">
                <h2>{option.capacityTitle || "Capacities"}</h2>
                {option.capacityIntro && <p className="capacity-intro">{option.capacityIntro}</p>}
                <div className="capacity-grid">
                  {option.capacityTiers.map((tier, i) => (
                    <div className="capacity-card" key={i}>
                      {isLinking && i === 0 && (
                        <img className="capacity-hover-image" src={smallFarmersGroupImage} alt="Tractor spraying crops across a small farmers group field" />
                      )}
                      {isLinking && i === 1 && (
                        <img className="capacity-hover-image" src={smallAndMediumFarmersImage} alt="Small and medium farmers working in a field" />
                      )}
                      {isLinking && i === 2 && (
                        <img className="capacity-hover-image" src={largerFarmersGroupImage} alt="Tractor spraying crops in a large farmers group field" />
                      )}
                      <div className="capacity-label">{tier.label}</div>
                      <div className="capacity-card-top">
                        <span className="capacity-icon">
                          <LinkingCapacityIcon index={i} />
                        </span>
                        <div className="capacity-sqft">
                          {tier.sqft}
                          <span>sq.ft</span>
                        </div>
                      </div>
                      <div className="capacity-divider" />
                      {tier.details.map((detail) => (
                        <div className="capacity-detail-row" key={detail}>
                          <span className="capacity-detail-icon" aria-hidden="true">&#10022;</span>
                          <div className="capacity-detail">{detail}</div>
                        </div>
                      ))}
                      <span className="capacity-leaf" aria-hidden="true">&#10087;</span>
                    </div>
                  ))}
                </div>
                {option.capacityNote && (
                  <div className="capacity-note-row">
                    <span className="capacity-note-icon" aria-hidden="true">&#10022;</span>
                    <span className="capacity-note-line" />
                    <p className="capacity-note">*{option.capacityNote}</p>
                    <span className="capacity-note-line" />
                  </div>
                )}
              </div>
            </section>
          )}

          {option.sustainableTech && (
            <section className="section section-tech">
              <div className="wrap">
                <h2>{renderAccentTitle(option.sustainableTechTitle || "Sustainable technologies")}</h2>
                {isLinking ? (
                  <p className="linking-tech-intro">We embrace innovative and eco-friendly solutions to build a resilient and sustainable agricultural value chain for a better tomorrow.</p>
                ) : null}
                <div className={isLinking ? "linking-tech-grid" : "tech-grid"}>
                  {isLinking ? linkingSustainableCards.map((card, i) => (
                    <article className={`linking-tech-card accent-${card.accent}`} key={card.title}>
                      <div className="linking-tech-image-wrap">
                        <img src={card.image} alt="" />
                        {card.hoverImage && <img className="linking-tech-hover-image" src={card.hoverImage} alt="" /> }
                        <span className="linking-tech-badge">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="linking-tech-icon"><SustainableTechIcon index={i} /></div>
                      <h3>{card.title}</h3>
                      <span className="linking-tech-rule" />
                      <p>{card.description}</p>
                      <span className="linking-tech-leaf" aria-hidden="true">&#10087;</span>
                    </article>
                  )) : option.sustainableTech.map((item, i) => (
                    <div className="tech-card" key={i}>
                      <span className="tech-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="tech-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}


          {midh && (
            <section className="section section-midh">
              <div className="wrap">
                <div className="midh-section-heading">
                  <span className="midh-kicker">Advising on government support schemes for post-harvest management</span>
                  <h2>{midh.midhTitle || "MIDH guidelines"}</h2>
                  <p>Infrastructure pathways designed to protect quality, extend shelf life, and strengthen market access.</p>
                </div>
                {isLinking && (
                  <div className="linking-government-support">
                    <p>Advising on Government supports scheme in Post Harvestment for Linking Farmers</p>
                  </div>
                )}
                <div className="midh-list">
                  {midh.midhGuidelines.map((item, i) => (
                    <article className="midh-item" key={item.title}>
                      <div className="midh-item-head">
                        <span className="midh-item-number">{toRomanNumeral(i + 1)}</span>
                        <div>
                          <span className="midh-item-label">MIDH provision</span>
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="midh-layout">
                        {item.images ? (
                          <div className="midh-image-pair">
                            {item.images.map((src, j) => (
                              <img
                                className="midh-image"
                                key={src}
                                src={src}
                                alt={(item.imageAlts && item.imageAlts[j]) || ""}
                              />
                            ))}
                          </div>
                        ) : (
                          <img className="midh-image" src={item.image} alt={item.imageAlt || ""} />
                        )}

                        {item.variants ? (
                          <div className="midh-variant-table">
                            {item.variants.map((v) => (
                              <div className={`midh-variant${v.label === "Cold room — conventional technology" ? " midh-variant-conventional" : ""}`} key={v.label}>
                                <h4>{v.label}</h4>
                                <dl>
                                  <div className="midh-fact">
                                    <dt>Components</dt>
                                    <dd>{v.components}</dd>
                                  </div>
                                  <div className="midh-fact">
                                    <dt>Capacity</dt>
                                    <dd>{v.capacity}</dd>
                                  </div>
                                  <div className="midh-fact">
                                    <dt>Subsidy</dt>
                                    <dd>{v.subsidy}</dd>
                                  </div>
                                </dl>
                              </div>
                            ))}
                            {item.beneficiaries && (
                              <div className="midh-fact midh-fact-full">
                                <dt>Beneficiaries</dt>
                                <dd>{item.beneficiaries}</dd>
                              </div>
                            )}
                          </div>
                        ) : (
                          <dl className="midh-facts">
                            {item.components && (
                              <div className="midh-fact">
                                <dt>Components</dt>
                                <dd>{item.components}</dd>
                              </div>
                            )}
                            {item.produce && (
                              <div className="midh-fact">
                                <dt>Produce</dt>
                                <dd>{item.produce}</dd>
                              </div>
                            )}
                            {item.costNorms && (
                              <div className="midh-fact">
                                <dt>Cost norms</dt>
                                {Array.isArray(item.costNorms) ? (
                                  <dd>
                                    <ul className="midh-cost-list">
                                      {item.costNorms.map((line) => (
                                        <li key={line}>{line}</li>
                                      ))}
                                    </ul>
                                  </dd>
                                ) : (
                                  <dd>{item.costNorms}</dd>
                                )}
                              </div>
                            )}
                            {item.beneficiaries && (
                              <div className="midh-fact">
                                <dt>Beneficiaries</dt>
                                <dd>{item.beneficiaries}</dd>
                              </div>
                            )}
                          </dl>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {option.courses && (
            <section className="section section-courses">
              <div className="wrap">
                <h2>{option.coursesTitle || "Course details"}</h2>
                <div className="course-grid">
                  {option.courses.map((course, i) => (
                    <div className="course-card" key={i}>
                      <div className="course-card-banner">
                        <span className="course-banner-icon"><CourseIcon type="sprout" /></span>
                        <span className="course-banner-divider" />
                        <div className="course-banner-copy">
                          <div className="course-category">{course.category}</div>
                          <h3>{course.title}</h3>
                        </div>
                        <span className="course-num">{course.num}</span>
                      </div>
                      <div className="course-card-body">
                        <div className="course-modules">
                          <div className="course-section-heading"><span className="course-section-icon"><CourseIcon type="list" /></span><span className="course-label">Modules</span></div>
                          <ol>
                            {course.modules.map((m, j) => (
                              <li key={j}>{m}</li>
                            ))}
                          </ol>
                        </div>
                        <div className="course-meta">
                          <div className="course-meta-card">
                            <div className="course-section-heading"><span className="course-section-icon"><CourseIcon type="calendar" /></span><span className="course-label">Duration</span></div>
                            <div className="duration-badge">{course.duration}</div>
                          </div>
                          <div className="course-meta-card">
                            <div className="course-section-heading"><span className="course-section-icon"><CourseIcon type="people" /></span><span className="course-label">Who can benefit</span></div>
                            <ul className="chip-list">
                              {course.benefits.map((b, j) => (
                                <li key={j}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {option.book && (
            <section className="section section-book">
              <div className="wrap">
                <h2>{option.book.title}</h2>
                <div className="book-layout">
                  <div className="book-visual">
                    <span className="book-visual-mark" aria-hidden="true"><CourseIcon type="sprout" /></span>
                    <img
                      className="book-cover"
                      src={option.book.image}
                      alt={option.book.imageAlt || ""}
                    />
                    <span className="book-visual-line" aria-hidden="true" />
                  </div>
                  <div className="book-copy">
                    <div className="book-copy-intro">
                      <span className="book-copy-icon" aria-hidden="true"><CourseIcon type="list" /></span>
                      <p>{option.book.intro}</p>
                    </div>
                    <div className="chapter-panel">
                      <div className="chapter-panel-head"><span>Chapters covered</span><span className="chapter-count">{String(option.book.chapters.length).padStart(2, "0")}</span></div>
                      <ol className="chapter-list">
                        {option.book.chapters.map((ch, i) => (
                          <li key={i}>{ch}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

        </>
      ) : (
        <section className="section section-placeholder">
          <div className="wrap">
            <div className="placeholder-box">
              <h3>Content pending</h3>
              <p>{option.placeholderText}</p>
            </div>
          </div>
        </section>
      )}

      {isCollaborative && (
        <section className="projects section-projects projects-photo-bg">
          <div className="wrap">
            <h2>Case Studies for educational institutions</h2>
            <ProjectCarousel
              items={PROJECTS.filter((project) => project.slug === "lemon-value-chain")}
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
