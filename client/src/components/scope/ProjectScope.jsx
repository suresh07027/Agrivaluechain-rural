import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./ProjectScope.css";

// Source: "AVC Scope" draft (3 rows) + "AVC impact" notes.
// Lines tagged `fromImpact` were added from the AVC impact note because they
// are deliverables of the pack house design work. Remove the flag or the line
// if the client wants the scope table to stay exactly as drafted.
const projectScope = [
  {
    no: "1",
    title: "Post-harvest management process design for market preparation",
    items: [
      { text: "Process design for specified produce groups" },
      { text: "Pre-cooling, ripening and cooling solution"},
      { text: "Material handling equipment for planning, sorting and grading" },
      { text: "Food safety and hygiene system standards" },
      { text: "Packaging system planning, in coordination with the client" },
      { text: "Capacity of pack house equipment" },
    ],
  },
  {
    no: "2",
    title: "Establishing pack house infrastructure",
    items: [
      { text: "Environmental site study" },
      {
        text: "Pack house layout planning, with plan and elevation drawings that allow for future expansion",
      },
      { text: "Pre-cooling system and cold room design" },
      {
        text: "Energy-efficient cooling for the packing area, including evaporative cooling",
      },
      {
        text: "Thermally insulated building with high-quality insulation materials and automatic doors",
        fromImpact: true,
      },
      {
        text: "Renewable energy integration: solar PV or biomass-based solutions for a greener building",
      },
      { text: "Adopting food safety and hygiene standards in flooring and drainage" },
      { text: "Lighting and ventilation system for packing area" },
    ],
  },
  {
    no: "3",
    title: "Post-harvest management protocols",
    items: [
      {
        text: "Standards for each produce group, deployed as protocols that meet end-consumer demand",
      },
      {
        text: "Protocols that meet quality standards and food safety norms",
        fromImpact: true,
      },
      {
        text: "Quality parameters, grades and packing requirements for domestic and export markets",
        fromImpact: true,
      },
      { text: "Technical training on the operation of pre-cooling, ripening and cold rooms"},
    ],
  },
];

// Short labels + icons for the journey path (one per stage above).
const stageMeta = [
  { short: "Process design", Icon: IconFlow, tag: "Planning" },
  { short: "Packhouse infrastructure", Icon: IconBuilding, tag: "Build" },
  { short: "Protocols, standards & best practices", Icon: IconShield, tag: "Capacity development" },
];


function IconBuilding() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 27h26" />
      <path d="M5 27V13l11-7 11 7v14" />
      <path d="M12 27v-8h8v8" />
      <path d="M16 6V3" />
      <path d="M9 15h2M21 15h2" />
    </svg>
  );
}
function IconFlow() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="20" width="26" height="6" rx="3" />
      <circle cx="9" cy="23" r="1.2" />
      <circle cx="23" cy="23" r="1.2" />
      <path d="M8 16l5-6 4 4 7-8" />
      <path d="M20 6h4v4" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3l10 4v8c0 6.5-4.2 11.2-10 14C10.2 26.2 6 21.5 6 15V7l10-4Z" />
      <path d="M11 15.5l3.6 3.6L21.5 12" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.5 2.5C7 2.5 3 5 3 9.5c0 2.2 1.5 3.8 3.6 3.8 4.6 0 6.9-4.6 6.9-10.8Z" fill="currentColor" />
      <path d="M2.5 14c2.4-3.8 5-6.2 8.5-8.4" stroke="#0b2924" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectScope() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef([]);
  const last = projectScope.length - 1;
  const stage = projectScope[active];

  const go = (i) => {
    const next = Math.max(0, Math.min(last, i));
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e, i) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(i + 1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(i - 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(last); }
  };

  // Line runs from the centre of the first node to the centre of the last.
  const progress = (active / last) * 100;

  return (
    <div className="project-scope ps-journey">
      <p className="ps-eyebrow">From site to shelf</p>
      <h3 className="project-scope-heading" id="project-scope-heading">
        Project scope &amp; deliverables
      </h3>

      <div className="ps-track" role="tablist" aria-labelledby="project-scope-heading" aria-orientation="horizontal">
        <div className="ps-line" aria-hidden="true">
          <motion.span
            className="ps-line-fill"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 18 }}
          />
          <motion.span
            className="ps-line-dot"
            initial={false}
            animate={{ left: `${progress}%` }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 18 }}
          />
        </div>

        {projectScope.map((s, i) => {
          const { Icon, short, tag } = stageMeta[i];
          const state = i === active ? "is-active" : i < active ? "is-done" : "";
          return (
            <button
              key={s.no}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`ps-tab-${s.no}`}
              aria-selected={i === active}
              aria-controls="ps-panel"
              tabIndex={i === active ? 0 : -1}
              className={`ps-node ${state}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="ps-orb">
                <span className="ps-orb-ring" aria-hidden="true" />
                <span className="ps-orb-icon"><Icon /></span>
              </span>
              <span className="ps-node-tag">{tag}</span>
              <span className="ps-node-label">{short}</span>
            </button>
          );
        })}
      </div>

      <div className="ps-stage" id="ps-panel" role="tabpanel" aria-labelledby={`ps-tab-${stage.no}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage.no}
            className="ps-stage-body"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="ps-stage-head">
              <span className="ps-count">{stage.items.length} deliverables</span>
              <h4>{stage.title}</h4>
            </div>

            <ul className="ps-items">
              {stage.items.map((item, idx) => (
                <motion.li
                  key={item.text}
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.08 + idx * 0.06, duration: 0.3, ease: "easeOut" }}
                >
                  <span className="ps-leaf"><IconLeaf /></span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="ps-nav">
          <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous stage">
            &larr; Previous
          </button>
          <span className="ps-dots" aria-hidden="true">
            {projectScope.map((s, i) => (
              <i key={s.no} className={i === active ? "on" : ""} />
            ))}
          </span>
          <button type="button" onClick={() => go(active + 1)} disabled={active === last} aria-label="Next stage">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}