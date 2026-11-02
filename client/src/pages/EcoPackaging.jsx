import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { contact } from "../data/content";
import { ecoIntro, ecoCategories, ecoImage } from "../data/ecoPackaging";
import { CtaStrip } from "../components/Footer";
import {
  HeroBackdrop,
  HeroCollage,
  LeafGlyph,
  Lightbox,
  SectionRail,
  useHeaderOffset,
  useScrollSpy,
} from "../components/ecoShared";
import "../styles/ecoPackaging.css";

// One accent colour per material family, taken from the site palette.
const ACCENTS = ["#0F766E", "#F26B4F", "#7FA51C", "#3AA6D0", "#D99A0B", "#1CA7A0"];

export default function EcoPackagingPage() {
  const [viewer, setViewer] = useState(null); // { catId, index }
  const reduce = useReducedMotion();
  useHeaderOffset();

  const ids = ecoCategories.map((c) => c.id);
  const active = useScrollSpy(ids);

  const photos = (cat) =>
    cat.items.map((item) => ({ src: ecoImage(cat.folder, item.file), caption: item.caption }));

  const shots = ecoCategories.slice(0, 3).map((c) => photos(c)[0]);
  const viewerCat = viewer && ecoCategories.find((c) => c.id === viewer.catId);

  return (
    <main className="eco-page">
      <section className="eco-hero">
        <HeroBackdrop />
        <div className="wrap eco-hero-grid">
          <div className="eco-hero-copy">
            <span className="eco-tag">{ecoIntro.tag}</span>
            <h1>{ecoIntro.title}</h1>
            <p className="eco-lead">{ecoIntro.lead}</p>
          </div>
          <HeroCollage shots={shots} />
        </div>
      </section>

      <SectionRail
        items={ecoCategories.map((c) => ({ id: c.id, title: c.title }))}
        active={active}
        label="Packaging categories"
      />

      <div className="eco-flow">
        {ecoCategories.map((cat, idx) => {
          const list = photos(cat);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="eco-sec"
              style={{ "--accent": ACCENTS[idx % ACCENTS.length] }}
            >
              <div className="wrap eco-sec-grid">
                <aside className="eco-aside">
                  <span className="eco-glyph"><LeafGlyph /></span>
                  <h2>{cat.title}</h2>
                  <p>{cat.blurb}</p>
                </aside>

                <div className="eco-masonry">
                  {list.map((p, i) => (
                    <motion.figure
                      key={cat.items[i].file}
                      className="eco-tile"
                      initial={reduce ? false : { opacity: 0, y: 26 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.06 }}
                    >
                      <button
                        type="button"
                        onClick={() => setViewer({ catId: cat.id, index: i })}
                        aria-label={`Enlarge: ${p.caption}`}
                      >
                        <img src={p.src} alt={p.caption} loading="lazy" />
                        <figcaption>
                          <span>{p.caption}</span>
                        </figcaption>
                        <i className="eco-zoom" aria-hidden="true">+</i>
                      </button>
                    </motion.figure>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <div className="wrap">
          <div className="eco-next">
            <p>
              Need help choosing the right pack for your produce, shelf life and store format?{" "}
              <Link to="/technical-support/private-companies">See our technical support for private companies</Link>.
            </p>
          </div>
        </div>
      </div>

      <CtaStrip contact={contact} />

      {viewer && viewerCat && (
        <Lightbox
          items={photos(viewerCat)}
          index={viewer.index}
          onClose={() => setViewer(null)}
          onIndex={(i) => setViewer({ catId: viewer.catId, index: i })}
        />
      )}
    </main>
  );
}
