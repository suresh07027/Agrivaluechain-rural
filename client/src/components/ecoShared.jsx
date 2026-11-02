import { useEffect, useRef, useState } from "react";

/* Shared building blocks for the Eco Packaging and Display Cabinets pages. */

// Keeps --hdr equal to the sticky header height so the section rail sits right under it.
export function useHeaderOffset() {
  useEffect(() => {
    const set = () => {
      const h = document.querySelector("header")?.offsetHeight || 76;
      document.documentElement.style.setProperty("--hdr", `${h}px`);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);
}

// Highlights the section currently in the middle of the screen.
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join("|");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

export const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

// Sticky pill rail used to jump between sections.
export function SectionRail({ items, active, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const rail = ref.current;
    const chip = rail?.querySelector(".is-on");
    if (rail && chip) {
      rail.scrollTo({
        left: chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="eco-rail-wrap">
      <nav className="eco-rail" ref={ref} aria-label={label}>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={active === it.id ? "is-on" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(it.id);
            }}
          >
            {it.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

// Photo viewer with keyboard + button navigation.
export function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index];
  const many = items.length > 1;
  const step = (d) => onIndex((index + d + items.length) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (many && e.key === "ArrowRight") step(1);
      if (many && e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items.length]);

  if (!item) return null;
  return (
    <div className="eco-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.caption}>
      <button type="button" className="eco-close" aria-label="Close" onClick={onClose}>&times;</button>
      {many && (
        <button
          type="button"
          className="eco-arrow prev"
          aria-label="Previous photo"
          onClick={(e) => { e.stopPropagation(); step(-1); }}
        >
          &lsaquo;
        </button>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.caption} />
        <figcaption>{item.caption}</figcaption>
      </figure>
      {many && (
        <button
          type="button"
          className="eco-arrow next"
          aria-label="Next photo"
          onClick={(e) => { e.stopPropagation(); step(1); }}
        >
          &rsaquo;
        </button>
      )}
    </div>
  );
}

export function LeafGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M26.5 5.5C15 5.5 7 9.5 7 18.5c0 4 2.8 7 6.8 7 8.7 0 12.7-8.5 12.7-20Z" />
      <path d="M5 27c4.5-7 9.5-11.5 17-16" />
    </svg>
  );
}

// Large faint leaf drawing behind the hero text.
export function HeroBackdrop() {
  return (
    <svg className="eco-backdrop" viewBox="0 0 600 600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M520 60C300 60 130 150 130 340c0 90 60 150 150 150 190 0 240-180 240-430Z" />
      <path d="M90 540C190 380 300 270 470 150" />
      <path d="M210 410c40-10 80-40 110-80M270 470c50-10 100-50 140-110M170 350c30-6 60-26 86-56" />
    </svg>
  );
}

// Three slightly rotated photos that decorate the hero.
export function HeroCollage({ shots }) {
  return (
    <div className="eco-collage" aria-hidden="true">
      {shots.filter((s) => s.src).slice(0, 3).map((s, i) => (
        <figure key={s.src} className={`eco-shot s${i}`}>
          <img src={s.src} alt="" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
