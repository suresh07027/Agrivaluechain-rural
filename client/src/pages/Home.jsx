import { Link } from "react-router-dom";
import { homeContent, options, contact } from "../data/content";
import { CtaStrip } from "../components/Footer";
import useReveal from "../hooks/useReveal";
import option1Photo from "../assets/option1-photo.jpg";
import option2Photo from "../assets/option2-photo.jpeg";
import option3Photo from "../assets/option3-photo.jpeg";
import option4Photo from "../assets/option4-photo.jpeg";

const optionPhotos = {
  option1: option1Photo,
  option2: option2Photo,
  option3: option3Photo,
  option4: option4Photo
};

export default function Home() {
  useReveal([]);

  return (
    <div className="page active" id="page-home">
      <div className="hero-intro-wrap">
        <div className="hero-bg"></div>

        <section className="hero">
          <div className="wrap">
            <div className="eyebrow">{homeContent.eyebrow}</div>
            <h1>{homeContent.heroTitle}</h1>
            {homeContent.heroLede.map((p, i) => (
              <p className="lede" key={i}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="intro">
          <div className="wrap">
            <div className="intro-grid">
              <h2>Our focus</h2>
              <div>
                <p>{homeContent.introText}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="options">
        <div className="wrap">
          <div className="options-head">
            <h2>Rural livelihood development — main menu</h2>
            <p>Select an area to see what we offer, who we serve, and the projects we've delivered.</p>
          </div>
          <div className="option-stack">
            {options.map((opt) => {
                const photo = optionPhotos[opt.id];
                const hasPhoto = Boolean(photo);
              const copy = (
                <div className={hasPhoto ? "card-copy" : undefined}>
                  <div className="num">{opt.num}</div>
                  <h3>{opt.title}</h3>
                  <div className="desc">{opt.desc}</div>
                  <div className="go">
                    Explore
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                </div>
              );

              return (
                <Link
                  className={`option-card${hasPhoto ? " has-photo" : ""}`}
                  to={`/${opt.id}`}
                  key={opt.id}
                >
                  {hasPhoto ? (
                    <>
                      {copy}
                      <div className="card-photo">
                        <img src={photo} alt="" />
                      </div>
                    </>
                  ) : (
                    copy
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip contact={contact} />
    </div>
  );
}