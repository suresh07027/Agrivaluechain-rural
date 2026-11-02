import { useState } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/content";
import { cabinetIntro, cabinetGroups, cabinetImage } from "../data/displayCabinets";
import { CtaStrip } from "../components/Footer";
import {
  HeroBackdrop,
  HeroCollage,
  Lightbox,
  SectionRail,
  useHeaderOffset,
  useScrollSpy,
} from "../components/ecoShared";
import "../styles/ecoPackaging.css"; // shared page styles (eco-* and cab-*)

const ACCENTS = ["#0F766E", "#F26B4F", "#3AA6D0", "#D99A0B"];

export default function DisplayCabinetsPage() {
  const [picked, setPicked] = useState({}); // { [groupId]: selected item index }
  const [viewer, setViewer] = useState(null); // { groupId, index }
  useHeaderOffset();

  const ids = cabinetGroups.map((g) => g.id);
  const active = useScrollSpy(ids);

  const photos = (g) => g.items.map((it) => ({ src: cabinetImage(it.file), caption: it.caption }));
  const shots = cabinetGroups.slice(0, 3).map((g) => photos(g)[0]);
  const viewerGroup = viewer && cabinetGroups.find((g) => g.id === viewer.groupId);

  return (
    <main className="eco-page cab-page">
      <section className="eco-hero">
        <HeroBackdrop />
        <div className="wrap eco-hero-grid">
          <div className="eco-hero-copy">
            <span className="eco-tag">{cabinetIntro.tag}</span>
            <h1>{cabinetIntro.title}</h1>
            <p className="eco-lead">{cabinetIntro.lead}</p>
          </div>
          <HeroCollage shots={shots} />
        </div>
      </section>

      <SectionRail
        items={cabinetGroups.map((g) => ({ id: g.id, title: g.title }))}
        active={active}
        label="Display types"
      />

      <div className="eco-flow">
        {cabinetGroups.map((group, idx) => {
          const list = photos(group);
          const sel = Math.min(picked[group.id] ?? 0, list.length - 1);
          const cur = list[sel];
          const many = list.length > 1;
          const go = (d) => setPicked({ ...picked, [group.id]: (sel + d + list.length) % list.length });

          return (
            <section
              key={group.id}
              id={group.id}
              className={`eco-sec cab-sec ${idx % 2 ? "flip" : ""}`}
              style={{ "--accent": ACCENTS[idx % ACCENTS.length] }}
            >
              <div className="wrap cab-grid">
                <div className="cab-copy">
                  <h2>{group.title}</h2>
                  <p>{group.blurb}</p>

                  {many && (
                    <ul className="cab-picks" aria-label={`${group.title} examples`}>
                      {list.map((p, i) => (
                        <li key={group.items[i].file}>
                          <button
                            type="button"
                            className={i === sel ? "is-on" : ""}
                            aria-pressed={i === sel}
                            onClick={() => setPicked({ ...picked, [group.id]: i })}
                          >
                            <img src={p.src} alt="" loading="lazy" />
                            <span>{p.caption}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="cab-stage">
                  <div className="cab-frame">
                    <button
                      type="button"
                      className="cab-open"
                      onClick={() => setViewer({ groupId: group.id, index: sel })}
                      aria-label={`Enlarge: ${cur.caption}`}
                    >
                      <img key={cur.src} src={cur.src} alt={cur.caption} />
                    </button>

                    <div className="cab-bar">
                      <span className="cab-cap">{cur.caption}</span>
                      {many && (
                        <span className="cab-ctrl">
                          <button type="button" onClick={() => go(-1)} aria-label="Previous photo">&lsaquo;</button>
                          <span className="cab-dots" aria-hidden="true">
                            {list.map((_, i) => <i key={i} className={i === sel ? "on" : ""} />)}
                          </span>
                          <button type="button" onClick={() => go(1)} aria-label="Next photo">&rsaquo;</button>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <div className="wrap">
          <div className="eco-next">
            <p>
              Pair these displays with our <Link to="/eco-packaging">eco-friendly packaging recommendations</Link> or
              see our <Link to="/technical-support/private-companies">technical support for private companies</Link>.
            </p>
          </div>
        </div>
      </div>

      <CtaStrip contact={contact} />

      {viewer && viewerGroup && (
        <Lightbox
          items={photos(viewerGroup)}
          index={viewer.index}
          onClose={() => setViewer(null)}
          onIndex={(i) => {
            setViewer({ groupId: viewer.groupId, index: i });
            setPicked({ ...picked, [viewer.groupId]: i });
          }}
        />
      )}
    </main>
  );
}
