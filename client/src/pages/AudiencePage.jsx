import { Link, useParams, Navigate } from "react-router-dom";
import { options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import governmentPhoto from "../assets/government.jpeg";
import companiesPhoto from "../assets/companies.jpeg";
import educationPhoto from "../assets/education.jpeg";

const photos = {
  government: governmentPhoto,
  companies: companiesPhoto,
  education: educationPhoto
};

const option = options.find((o) => o.id === "option1");

export default function AudiencePage() {
  const { audienceId } = useParams();
  const segment = option.segments.find((s) => s.slug === audienceId);
  const page = option.audiencePages[audienceId];

  useReveal([audienceId]);

  if (!segment || !page) return <Navigate to="/option1" replace />;

  const photo = photos[page.photo];

  return (
    <div className={`page active page-audience accent-${segment.accent}`} id={`page-${segment.slug}`}>
      <div className="audience-hero">
        <div className="audience-hero-photo">
          <img src={photo} alt={`${segment.name} working in the agricultural value chain`} />
        </div>
        <div className="audience-hero-copy">
          <div className="wrap">
            <Link className="back-link" to="/option1">
              &larr; Back to Technical Consultancy
            </Link>
            <h1>{page.heroTitle}</h1>
            <p className="sub">{page.heroSub}</p>
            <div className="audience-hero-note">
              <span>Our focus</span>
              {segment.teaser}
            </div>
          </div>
        </div>
      </div>

      <section className="section audience-work section-serve">
        <div className="wrap">
          <h2>How we work with {segment.name.toLowerCase()}</h2>
          <div className="audience-blocks">
            {segment.blocks.map((b, i) => (
              <div className="audience-block" key={i}>
                <div className="label">{b.label}</div>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip contact={contact} />
    </div>
  );
}