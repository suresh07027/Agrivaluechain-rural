import { Link, useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import ProjectCarousel from "../components/ProjectCarousel";

export default function ServicePage() {
  const { optionId } = useParams();
  const option = options.find((o) => o.id === optionId);

  useReveal([optionId]);

  if (!option) return <Navigate to="/" replace />;

  return (
    <div className="page active" id={`page-${option.id}`}>
      <div className="detail-hero">
        <div className="wrap">
          <Link className="back-link" to="/">
            &larr; Back to home
          </Link>
          <div className="tag">{option.tag}</div>
          <h1>{option.heroTitle}</h1>
          <p className="sub">{option.heroSub}</p>
        </div>
      </div>

      {option.hasFullContent ? (
        <>
          <section className="section">
            <div className="wrap">
              <h2>What we offer</h2>
              <ul className="bullets">
                {option.offerings.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section">
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

          <section className="section">
            <div className="wrap">
              <h2>Scope of deliverables</h2>
              <ul className="bullets">
                {option.scope.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={`projects${
              option.projectCarousel ? " projects-photo-bg" : ""
            }`}
          >
            <div className="wrap">
              <h2>Projects we've worked on</h2>

              {/* Technical Consultancy: photo carousel with click-to-open behavior.
                  All other service options: original numbered project cards. */}
              {option.projectCarousel ? (
                <ProjectCarousel imageWidth={340} imageHeight={340} labelColor="#F7F2E4" />
              ) : (
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
              )}
            </div>
          </section>
        </>
      ) : (
        <section className="section">
          <div className="wrap">
            <div className="placeholder-box">
              <h3>Content pending</h3>
              <p>{option.placeholderText}</p>
            </div>
          </div>
        </section>
      )}

      <CtaStrip contact={contact} />
    </div>
  );
}