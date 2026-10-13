import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import agroSupplyMap from "../assets/map.jpeg";

// Must stay in sync with the `slug` values used in ProjectCarousel.jsx's
// PROJECTS array. Mapped by hand since content.js project entries don't
// carry a slug field yet.
const SLUG_TO_PROJECT_NUM = {
  "tamil-nadu-warehousing-corporation": "01",
  "vegetable-cluster-development-olakkur": "02",
  "lemon-value-chain": "03",
  "onion-value-chain": "04",
  "agro-food-supply": "05",
  "carrot-value-chain": "06",
  "mango-drone-study": "07",
};

// Reuses the exact same photos already shown in ProjectCarousel.jsx —
// these live in the public folder, so they're referenced as plain URL
// strings (no import needed) at /images/projects/...
const SLUG_TO_HERO_IMAGE = {
  "tamil-nadu-warehousing-corporation": "/images/projects/twc-cold-storage.jpeg",
  "vegetable-cluster-development-olakkur":
    "/images/projects/vegetable-cluster-olakkur.jpeg",
  "lemon-value-chain": "/images/projects/lemon-value-chain.jpeg",
  "onion-value-chain": "/images/projects/carrot-value-chain.jpeg",
  "agro-food-supply": "/images/projects/agro-food-supply.jpeg",
  "carrot-value-chain": "/images/projects/onion-value-chain.jpeg",
  "mango-drone-study": "/images/projects/mango-drone-study.jpeg",
};

// ---------------------------------------------------------------------------
// Pull in EVERY photo under client/src/assets/projects/**  in one go.
// Vite processes each match into a real, build-safe image URL.
// eager: true       -> imported immediately (no lazy import() needed)
// import: "default" -> gives back just the URL string, not a module object
// ---------------------------------------------------------------------------
const allProjectImages = import.meta.glob(
  "../assets/projects/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

// Given "05", return every image path that lives under .../project5/...,
// sorted numerically by the trailing _1, _2, _3... in the filename.
function getGalleryForProjectNum(projectNum) {
  const folderName = `project${parseInt(projectNum, 10)}`; // "05" -> "project5"

  const matches = Object.entries(allProjectImages)
    .filter(([path]) => path.includes(`/projects/${folderName}/`))
    .map(([path, url]) => {
      const fileMatch = path.match(/_(\d+)\.[a-zA-Z]+$/);
      const order = fileMatch ? parseInt(fileMatch[1], 10) : 0;
      return { url, order };
    })
    .sort((a, b) => a.order - b.order)
    .map((item) => item.url);

  return matches;
}

// ---------------------------------------------------------------------------
// Small inline icon set for the "Project Highlights" cards + impact banner.
// Kept as plain SVG (no new dependency) so they inherit `currentColor`.
// ---------------------------------------------------------------------------
const HIGHLIGHT_ICONS = {
  snowflake: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M2 12h20M7 4l5 3 5-3M7 20l5-3 5 3M4 8l3 4-3 4M20 8l-3 4 3 4" />
    </svg>
  ),
  solar: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="8" height="8" rx="1" />
      <path d="M11 10h4M11 14h4M17 8h4v8h-4M12 2v2M6.5 4.5l1.4 1.4M17.5 4.5l-1.4 1.4M4 16v3h5" />
    </svg>
  ),
  coin: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v5c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 11v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c8 0 14-6 14-14 0-1 0-2-.2-3C10 3 4 9 4 17c0 1 0 2 0 3Z" />
      <path d="M4 20c3-6 6-9 12-12" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
    </svg>
  )
};

function PreviousSectionArrow({ href, label }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
      <a
        href={href}
        aria-label={label}
        title={label}
        style={{
          width: 32,
          height: 32,
          display: "grid",
          placeItems: "center",
          border: "1px solid rgba(18,59,54,0.25)",
          borderRadius: "50%",
          color: "var(--forest-deep)",
          background: "rgba(255,249,232,0.8)",
          fontSize: 20,
          lineHeight: 1,
          textDecoration: "none",
        }}
      >
        &larr;
      </a>
    </div>
  );
}

function AgroHighlights({ project, gallery }) {
  const accents = ["var(--rust)", "var(--steel)", "var(--forest)"];
  const tints = [
    "rgba(242,107,79,0.14)",
    "rgba(28,167,160,0.14)",
    "rgba(15,118,110,0.14)",
  ];

  return (
    <section className="section facility-bg agro-highlights-section" id="project-highlights-agro-food-supply">
      <div className="wrap">
        <div className="agro-highlights-layout">
          <div className="agro-highlights-copy">
            <span className="section-eyebrow">By the Numbers</span>
            <h2>Project Highlights</h2>
            <div className="agro-highlights-description">
              {project.facilityText.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="agro-highlight-cards">
              {project.highlights.map((highlight, i) => (
                <div className="agro-highlight-card" key={highlight.label}>
                  <div
                    className="agro-highlight-icon"
                    style={{ background: tints[i], color: accents[i] }}
                  >
                    {HIGHLIGHT_ICONS[highlight.icon]}
                  </div>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="agro-map-card">
            <span className="section-eyebrow">Connecting north to southern states</span>
            <div className="agro-map-frame">
              <img
                src={agroSupplyMap}
                alt="India map showing northern production states, southern consumption states, and the crop table"
              />
            </div>
          </div>
        </div>

        <div className="agro-infographic-gallery" id="agro-infographics">
          {gallery.slice(0, 3).map((src, i) => (
            <div className="agro-infographic-card" key={src}>
              <img src={src} alt={`${project.title} supply chain infographic ${i + 1}`} />
            </div>
          ))}
          <PreviousSectionArrow href="#project-highlights-agro-food-supply" label="Back to project highlights" />
        </div>
      </div>
    </section>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const projectNum = SLUG_TO_PROJECT_NUM[slug];
  // Always open the page scrolled to the top, showing the title/content
  // first — without this, React Router keeps whatever scroll position
  // you were at on the previous page, which made it look like the
  // gallery photos loaded "first".
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  // Technical Consultancy (option1) is the only option with projects for now.
  const option = options.find((o) => o.id === "option1");
  const project = option?.projects.find((p) => p.num === projectNum);

  if (!project) return <Navigate to="/option1" replace />;

  const gallery = getGalleryForProjectNum(projectNum);
  const overviewSectionId = `project-overview-${slug}`;
  const highlightsSectionId = `project-highlights-${slug}`;
  const impactSectionId = `project-impact-${slug}`;
  const overviewGallery = slug === "agro-food-supply"
    ? [...gallery.slice(0, 3), agroSupplyMap]
    : gallery.slice(0, 4);

  return (
    <div className={`page active project-page project-number-${projectNum}`} id={`project-${slug}`}>
      <style>{`
        @keyframes heroKenBurns {
          0%   { transform: scale(1) translate(0, 0); }
          50%  { transform: scale(1.12) translate(-1.5%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .facility-bg{
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #dcefe3 0%, #cfe6d8 48%, #bfdccc 100%);
        }
        .facility-bg::before{
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'><path d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23123B36' stroke-width='1'/></svg>"),
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'><path d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23123B36' stroke-width='1'/></svg>");
          background-position: 0 0, 28px 50px;
          background-size: 56px 100px;
          opacity: 0.14;
          pointer-events: none;
        }
        .facility-blob{
          position: absolute;
          border-radius: 50%;
          filter: blur(6px);
          pointer-events: none;
        }
        .facility-bg .wrap{ position: relative; z-index: 1; }
      `}</style>
      <div
        className="detail-hero project-hero"
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          overflow: "hidden",
          backgroundColor: "#14140f",
        }}
      >
        {/* Animated background layer — kept separate from the text so the
            slow zoom/pan doesn't drag the heading around with it. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(20,20,15,0.55), rgba(20,20,15,0.55)), url(${SLUG_TO_HERO_IMAGE[slug]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            animation: "heroKenBurns 18s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="project-hero-title">
            <h1 style={{ color: "#ffffff", margin: 0 }}>{project.title}</h1>
          </div>

          {(project.subtitle || project.location) && (
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "var(--lime)" }}>{HIGHLIGHT_ICONS.home}</span>
              <div>
                {project.subtitle && (
                  <div style={{ color: "#ffffff", fontWeight: 600 }}>
                    {project.subtitle}
                  </div>
                )}
                {project.location && (
                  <div style={{ color: "var(--lime)" }}>{project.location}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {slug === "agro-food-supply" ? (
        <AgroHighlights project={project} gallery={gallery} />
      ) : project.facilityText ? (
        <>
          {/* ---------------- About the Facility ---------------- */}
          <section
            className="section facility-bg project-detail-content"
            id={overviewSectionId}
          >
            <div
              className="facility-blob"
              style={{
                width: 260,
                height: 260,
                top: -70,
                right: 260,
                background: "radial-gradient(circle, rgba(184,217,61,0.4), transparent 70%)",
              }}
            />
            <div
              className="facility-blob"
              style={{
                width: 220,
                height: 220,
                bottom: -40,
                right: 40,
                background: "radial-gradient(circle, rgba(255,209,102,0.35), transparent 70%)",
              }}
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              style={{ position: "absolute", left: 20, bottom: 10, width: 130, height: 130, opacity: 0.16, pointerEvents: "none" }}
            >
              <path
                d="M85 15C60 15 25 35 15 85C55 90 80 60 85 15Z"
                fill="none"
                stroke="var(--forest-deep)"
                strokeWidth="2.5"
              />
              <path d="M20 82C40 60 55 45 82 20" fill="none" stroke="var(--forest-deep)" strokeWidth="2" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 40 40"
              style={{ position: "absolute", right: 30, bottom: 30, width: 30, height: 30, opacity: 0.35, pointerEvents: "none" }}
            >
              <path d="M20 2L24 16L38 20L24 24L20 38L16 24L2 20L16 16Z" fill="var(--wheat-soft)" />
            </svg>
            <div className="wrap">
              <span className="section-eyebrow">Facility Overview</span>
              <h2 style={{ marginTop: 0 }}>About the Facility</h2>

              <div
                className={`facility-overview-grid${slug === "carrot-value-chain" ? " carrot-overview-grid visual-overview-grid" : slug === "lemon-value-chain" ? " lemon-overview-grid visual-overview-grid" : slug === "tamil-nadu-warehousing-corporation" ? " warehouse-overview-grid visual-overview-grid" : slug === "agro-food-supply" ? " agro-overview-grid visual-overview-grid" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.35fr 0.65fr",
                  gap: 40,
                  alignItems: "start",
                  marginTop: 28,
                }}
              >
                <div className={slug === "carrot-value-chain" ? "carrot-overview-copy visual-overview-copy" : slug === "lemon-value-chain" ? "lemon-overview-copy visual-overview-copy" : slug === "tamil-nadu-warehousing-corporation" ? "warehouse-overview-copy visual-overview-copy" : slug === "agro-food-supply" ? "agro-overview-copy visual-overview-copy" : undefined} style={{ paddingLeft: 22 }}>
                  {project.facilityText.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {gallery.length > 0 && (
                  <div className={slug === "carrot-value-chain" ? "carrot-overview-gallery visual-overview-gallery" : slug === "lemon-value-chain" ? "lemon-overview-gallery visual-overview-gallery" : slug === "tamil-nadu-warehousing-corporation" ? "warehouse-overview-gallery visual-overview-gallery" : slug === "agro-food-supply" ? "agro-overview-gallery visual-overview-gallery" : undefined} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 260 }}>
                    {overviewGallery.map((src, i) => {
                      const isMap = slug === "agro-food-supply" && src === agroSupplyMap;
                      const accent = i % 2 === 0 ? "var(--rust)" : "var(--forest)";
                      return (
                        <div
                          key={src}
                          style={{
                            borderRadius: 20,
                            padding: 6,
                            background: `linear-gradient(135deg, ${accent}, transparent 65%)`,
                            boxShadow: "0 18px 40px -18px var(--shadow-deep)",
                            transition: "transform 0.25s ease, box-shadow 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow = "0 24px 50px -16px var(--shadow-deep)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 18px 40px -18px var(--shadow-deep)";
                          }}
                        >
                          <div className="project-overview-image-wrap" style={{ borderRadius: 15, overflow: "hidden", aspectRatio: "4 / 3", background: "#ffffff" }}>
                            <img
                              className="project-overview-image"
                              src={src}
                              alt={isMap
                                ? "Map showing agricultural production states in northern India connected to consumption states in southern India"
                                : `${project.title} facility photo ${i + 1}`}
                              style={{ width: "100%", height: "100%", display: "block" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ---------------- Project Highlights ---------------- */}
          {project.highlights?.length > 0 && (
            <section
              className="section facility-bg"
              id={highlightsSectionId}
            >
              <div className="wrap">
                <span className="section-eyebrow">By the Numbers</span>
                <h2>Project Highlights</h2>
                {slug === "lemon-value-chain" && (
                  <p style={{ margin: "0 0 20px" }}>
                    Extended shelf life in controlled condition and relative humidity.
                  </p>
                )}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 20,
                  }}
                >
                  {project.highlights.map((h, i) => {
                    const accents = ["var(--rust)", "var(--steel)", "var(--forest)", "var(--lime)"];
                    const tints = [
                      "rgba(242,107,79,0.14)",
                      "rgba(28,167,160,0.14)",
                      "rgba(15,118,110,0.14)",
                      "rgba(184,217,61,0.22)",
                    ];
                    const accent = accents[i % accents.length];
                    const tint = tints[i % tints.length];
                    return (
                      <div
                        key={i}
                        style={{
                          textAlign: "center",
                          background: "var(--wheat-soft)",
                          border: "1px solid var(--line)",
                          borderTop: `4px solid ${accent}`,
                          borderRadius: 14,
                          padding: "26px 16px",
                          boxShadow: "0 18px 34px -26px var(--shadow-deep)",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                      >
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            margin: "0 auto 14px",
                            borderRadius: "50%",
                            background: tint,
                            color: accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {HIGHLIGHT_ICONS[h.icon]}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "var(--forest-deep)" }}>
                          {h.value}
                        </div>
                        <div style={{ color: "var(--ink-soft)" }}>{h.label}</div>
                      </div>
                    );
                  })}
                </div>
                <PreviousSectionArrow href={`#${overviewSectionId}`} label="Back to facility overview" />
              </div>
            </section>
          )}

          {/* ---------------- Social Impact / Our Impact ---------------- */}
          {project.impactText && (
            <section
              className="section facility-bg"
              id={impactSectionId}
              style={{ paddingTop: 0 }}
            >
              <div className="wrap">
                <div
                  style={{
                    background: "linear-gradient(120deg, var(--forest-deep) 0%, var(--forest) 130%)",
                    color: "#ffffff",
                    borderRadius: 16,
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flex: "0 0 auto",
                      borderRadius: "50%",
                      background: "var(--rust)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {HIGHLIGHT_ICONS.target}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 6px", color: "#ffffff" }}>
                      {slug === "tamil-nadu-warehousing-corporation"
                        ? "Social Impact"
                        : slug === "lemon-value-chain"
                          ? "Socio economic impact"
                          : "Our Impact"}
                    </h3>
                    {slug === "lemon-value-chain" ? (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", color: "rgba(255,255,255,0.88)" }}>
                        <li>* {project.impactText}</li>
                        <li>* It helps farmers decide between different markets.</li>
                      </ul>
                    ) : (
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.88)" }}>{project.impactText}</p>
                    )}
                  </div>
                </div>
                <PreviousSectionArrow href={`#${highlightsSectionId}`} label="Back to project highlights" />
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="section facility-bg project-detail-content">
          <div className="wrap">
            <span className="section-eyebrow">Project Overview</span>
            <div className="project-fallback-grid">
              <div className="project-fallback-copy">
                <h2>About the Project</h2>
                {project.fullContent ? (
                  project.fullContent.map((block, i) => {
                    if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
                    if (block.type === "list")
                      return (
                        <ul className="bullets" key={i}>
                          {block.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      );
                    return <p key={i}>{block.text}</p>;
                  })
                ) : (
                  <p>{project.text}</p>
                )}
              </div>

              {gallery.length > 0 && (
                <div className="project-fallback-gallery">
                  {gallery.slice(0, 2).map((src, i) => (
                    <div className="project-preview-frame" key={src}>
                      <img src={src} alt={`${project.title} preview ${i + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {project.metrics?.length > 0 && (
              <div className="metric-row project-fallback-metrics">
                {project.metrics.map((m, i) => (
                  <div className="metric" key={i}>
                    {m.value}
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <CtaStrip contact={contact} />
    </div>
  );
}