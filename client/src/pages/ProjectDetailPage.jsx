import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";

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
  "agro-food-supply": "/images/projects/mango-drone-study.jpeg",
  "carrot-value-chain": "/images/projects/onion-value-chain.jpeg",
  "mango-drone-study": "/images/projects/agro-food-supply.jpeg",
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

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const projectNum = SLUG_TO_PROJECT_NUM[slug];
  const [lightboxSrc, setLightboxSrc] = useState(null);

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

  return (
    <div className="page active" id={`project-${slug}`}>
      <style>{`
        @keyframes heroKenBurns {
          0%   { transform: scale(1) translate(0, 0); }
          50%  { transform: scale(1.12) translate(-1.5%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}</style>
      <div
        className="detail-hero"
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
          <Link
            className="back-link"
            to="/option1"
            style={{ color: "#ffffff" }}
          >
            &larr; Back to Technical Consultancy
          </Link>
          <div className="tag" style={{ color: "#f5e9c8" }}>
            Project {project.num}
          </div>
          <h1 style={{ color: "#ffffff" }}>{project.title}</h1>
        </div>
      </div>

      <section className="section project-detail-content">
        <div className="wrap">
          <p>{project.text}</p>

          {project.metrics.length > 0 && (
            <div className="metric-row">
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

      {gallery.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>Project Gallery</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 16,
              }}
            >
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightboxSrc(src)}
                  aria-label={`Open photo ${i + 1} of ${project.title}`}
                  style={{
                    padding: 8,
                    border: "1px solid rgba(255,255,255,0.45)",
                    borderRadius: 16,
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    boxShadow: "0 8px 24px rgba(31,38,135,0.15)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(31,38,135,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(31,38,135,0.15)";
                  }}
                >
                  <div
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} photo ${i + 1}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox — click a thumbnail to view full size, click backdrop or X to close */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxSrc}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: 8,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}

      <CtaStrip contact={contact} />
    </div>
  );
}