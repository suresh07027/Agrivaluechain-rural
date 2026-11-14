import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import stakeholderImage from "../assets/logo.webp";
import financialImage from "../assets/Stakeholder/Financial.webp";
import fpoImage from "../assets/Stakeholder/Fpo.webp";
import governmentImage from "../assets/Stakeholder/Government.webp";
import marketImage from "../assets/Stakeholder/Market.webp";
import processorImage from "../assets/Stakeholder/Processor.webp";
import academicImage from "../assets/Stakeholder/Tech-partners.webp";
import tradersImage from "../assets/Stakeholder/Traders.webp";
import { contact } from "../data/content";
import { stakeholderPaths } from "../data/StakeholderPaths";

const DARK_ARROW = "#2b2d2d";

// Order follows the reference diagram, clockwise from the top.
const stakeholders = [
  {
    label: "Farmers / FPOs",
    color: DARK_ARROW,
    image: fpoImage,
    slug: "farmers-fpos",
    details: [
      "Enable producers to obtain a higher share of the final value of their produce through the value chain",
      "Productivity",
      "Post-Harvest Management access",
      "Aggregation",
    ]
  },
  {
    label: "Traders / Aggregators",
    color: DARK_ARROW,
    image: tradersImage,
    slug: "traders-aggregators",
    details: ["To enable efficient sourcing, handling, processing,logistics and market linkages"]
  },
  {
    label: "Processors",
    color: DARK_ARROW,
    image: processorImage,
    slug: "processors",
    details: ["To support raw-material supply, processing efficiency and market development"]
  },
  {
    label: "Supermarkets / Retailers",
    color: DARK_ARROW,
    image: marketImage,
    slug: "retailers",
    details: ["Quality, traceability, reliable supply and cold-chain solutions",
              "Supporting organized fresh food retail distribution and trade."
    ]
  },
  {
    label: "Government Institutions",
    color: DARK_ARROW,
    image: governmentImage,
    slug: "government",
    details: ["Programme design, implementation, infrastructure and policy support",
              "Institution support to state and central government."
    ]
  },
  {
    label: "Financial institutions",
    color: DARK_ARROW,
    image: financialImage,
    slug: "financial-institutions",
    details: ["To support bankable projects, investment appraisal and financing structures"]
  },
  {
    label: "Academic institutions",
    color: DARK_ARROW,
    image: academicImage,
    slug: "academic-institutions",
    details: ["Digitalisation, IoT, traceability and data-driven value chain management"]
  }
];

const RADIUS = 40; // % of stage width, centre -> node centre
const ARROW_RADIUS = 24; // % of stage width, centre -> arrow
const NODE_SIZE = 23; // % of stage width

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

export default function Stakeholders({ embedded = false }) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const count = stakeholders.length;
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [expanded, setExpanded] = useState(null); // which Government / Private group is open
  const retailerPopupRef = useRef(null);
  const activeIndex = openIndex ?? hoverIndex;
  const active = activeIndex !== null ? stakeholders[activeIndex] : null;

  // Close the destination card on Escape or when clicking outside the open node.
  useEffect(() => {
    if (openIndex === null) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest?.(".stk-node-pos.is-open")) setOpenIndex(null);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));
  const toggleGroup = (label) => setExpanded((prev) => (prev === label ? null : label));

  // Start with every group collapsed whenever a different stakeholder is opened or closed.
  useEffect(() => setExpanded(null), [openIndex]);

  useLayoutEffect(() => {
    const popup = retailerPopupRef.current;
    if (!embedded || active?.slug !== "retailers" || !popup) return undefined;

    const positionPopup = () => {
      const node = popup.parentElement;
      if (!node) return;
      const nodeRect = node.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      const margin = 12;
      const horizontalGap = 12;
      const forceRightSide = active?.slug === "retailers";
      const rightSide = forceRightSide || nodeRect.left + nodeRect.width / 2 < window.innerWidth / 2;
      const preferredLeft = isMobile
        ? (window.innerWidth - popupRect.width) / 2
        : rightSide
          ? nodeRect.right + horizontalGap
          : nodeRect.left - popupRect.width - horizontalGap;
      const left = Math.max(
        margin,
        Math.min(preferredLeft, window.innerWidth - popupRect.width - margin)
      );
      const preferredTop = nodeRect.top + (nodeRect.height - popupRect.height) / 2;
      const top = Math.max(
        margin,
        Math.min(preferredTop, window.innerHeight - popupRect.height - margin)
      );
      popup.style.position = "absolute";
      popup.style.left = `${left - nodeRect.left}px`;
      popup.style.right = "auto";
      popup.style.top = `${top - nodeRect.top}px`;
      popup.style.bottom = "auto";
    };

    positionPopup();
    window.addEventListener("resize", positionPopup);
    window.addEventListener("scroll", positionPopup, true);
    return () => {
      window.removeEventListener("resize", positionPopup);
      window.removeEventListener("scroll", positionPopup, true);
    };
  }, [active, embedded, isMobile, openIndex]);

  return (
    <section className={`stk${embedded ? " stk-embedded" : ""}`} id="stakeholders" aria-label="Stakeholders">
      <div className="wrap">
        {embedded ? (
          <h3 className="stk-subhead">Agrivaluechain Integrators</h3>
        ) : (
          <h2 className="stk-title">Agrivaluechain Integrators</h2>
        )}

        <div className="stk-stage">
          <svg className="stk-orbit" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r={RADIUS} />
          </svg>

          <motion.div
            className="stk-center"
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
          >
            <span className="stk-ripple" />
            <span className="stk-ripple stk-ripple-2" />
            <img className="stk-center-image" src={stakeholderImage} alt="Stakeholders" />
          </motion.div>

          {stakeholders.map((s, i) => {
            const angle = -90 + (i * 360) / count;
            const rad = (angle * Math.PI) / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const travel = (RADIUS / NODE_SIZE) * 100; // % of the node's own size
            const tooltipId = `stk-tooltip-${i}`;
            const pathsId = `stk-paths-${i}`;
            const isOpen = openIndex === i;
            const paths = stakeholderPaths[s.slug] || [];
            // Side-by-side layout: the diagram sits in the right column, so pop-ups open
            // inwards (right-hand nodes -> left, left-hand nodes -> right) and stay on screen.
            const tooltipSide = s.slug === "retailers"
              ? "right"
              : isMobile
              ? i === count - 1 || i % 2 === 0 ? "right" : "left"
              : embedded
              ? cos < -0.3 ? "right" : "left"
              : cos > 0.3 || (Math.abs(cos) <= 0.3 && sin < 0) ? "right" : "left";

            return (
              <div key={s.label}>
                {/* arrow pointing from the centre towards the node */}
                {!isMobile && (
                  <div
                    className="stk-arrow-pos"
                    style={{
                      left: `${50 + ARROW_RADIUS * cos}%`,
                      top: `${50 + ARROW_RADIUS * sin}%`,
                      transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`
                    }}
                  >
                    <motion.svg
                      className="stk-arrow"
                      viewBox="0 0 40 36"
                      style={{ color: s.color, animationDelay: `${i * 0.25}s` }}
                      initial={reduce ? false : { opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
                    >
                      <path d="M20 2 L38 20 H27 V34 H13 V20 H2 Z" fill="currentColor" />
                    </motion.svg>
                  </div>
                )}

                <div
                  onMouseEnter={embedded && !isMobile ? () => setHoverIndex(i) : undefined}
                  onMouseLeave={embedded && !isMobile ? () => setHoverIndex(null) : undefined}
                  className={`stk-node-pos${isOpen ? " is-open" : ""}${embedded && activeIndex === i ? " is-active" : ""}${s.image ? " stk-node-pos-has-image" : ""}${s.details ? ` stk-node-popup-${tooltipSide}` : ""}`}
                  style={
                    isMobile
                      ? undefined
                      : {
                          left: `${50 + RADIUS * cos}%`,
                          top: `${50 + RADIUS * sin}%`
                        }
                  }
                >
                  <motion.div
                    className="stk-node-motion"
                    initial={
                      reduce
                        ? false
                        : isMobile
                        ? { opacity: 0, scale: 0.3, y: 30 }
                        : {
                            opacity: 0,
                            scale: 0.2,
                            x: `${-cos * travel}%`,
                            y: `${-sin * travel}%`
                          }
                    }
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 13,
                      delay: 0.35 + i * 0.12
                    }}
                  >
                    <div
                      className={`stk-node${s.details ? " stk-node-with-details" : ""}`}
                      style={{
                        background: s.image ? "transparent" : s.color,
                        "--glow": s.color,
                        animationDelay: `${i * 0.45}s`
                      }}
                    >
                      <button
                        type="button"
                        className="stk-node-link"
                        aria-label={`${s.label} — see how we can help`}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? pathsId : undefined}
                        aria-describedby={s.details && !embedded ? tooltipId : undefined}
                        onClick={() => toggle(i)}
                      >
                        {s.image ? <img className="stk-node-image" src={s.image} alt="" /> : <span>{s.label}</span>}
                      </button>
                    </div>
                  </motion.div>
                  {s.image && (
                    <button type="button" className="stk-node-caption" onClick={() => toggle(i)} tabIndex={-1} aria-hidden="true">
                      {s.label}
                    </button>
                  )}
                  {!embedded && s.details && (
                    <div className="stk-node-popup" id={tooltipId} role="tooltip">
                      {s.details.map((detail) => <span key={detail}>{detail}</span>)}
                    </div>
                  )}
                  {paths.length > 0 && (isOpen || (embedded && activeIndex === i)) && (
                    <div
                      className={`stk-node-popup stk-paths${embedded && s.slug === "retailers" ? " stk-paths-retailers" : ""}`}
                      id={pathsId}
                      ref={embedded && s.slug === "retailers" ? retailerPopupRef : undefined}
                      role="dialog"
                      aria-label={`${s.label}: where to go`}
                    >
                      <button
                        type="button"
                        className="stk-paths-close"
                        aria-label="Close"
                        onClick={() => {
                          setOpenIndex(null);
                          if (embedded) setHoverIndex(null);
                        }}
                      >
                        &times;
                      </button>
                      <div className="stk-paths-head">
                        <div>
                          <p className="stk-paths-title">{s.label}</p>
                        </div>
                      </div>
                      {embedded && s.details.length > 0 && (
                        <div className="stk-paths-details">
                          <p className="stk-paths-hint">What they look for</p>
                          {s.details.map((detail) => <span key={detail}>{detail}</span>)}
                        </div>
                      )}
                      <p className="stk-paths-hint">AVC's Scope of Work</p>
                      <ul className="stk-paths-list">
                        {paths.map((path, idx) => (
                          <li key={path.to || path.label} style={{ "--i": idx }}>
                            {path.to ? (
                              <Link to={path.to} className="stk-path-link">
                                <span className="stk-path-label">{path.label}</span>
                                <span className="stk-path-go" aria-hidden="true">&rarr;</span>
                              </Link>
                            ) : (
                              <button
                                type="button"
                                className="stk-path-link is-toggle"
                                aria-expanded={expanded === path.label}
                                onClick={() => toggleGroup(path.label)}
                              >
                                <span className="stk-path-label">{path.label}</span>
                                <span className="stk-path-go" aria-hidden="true">&#9662;</span>
                              </button>
                            )}
                            {path.children && (
                              <ul className="stk-path-sub">
                                {path.children.map((child) => (
                                  <li key={child.to}>
                                    <Link to={child.to}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {path.facts && expanded === path.label && (
                              <ul className="stk-path-sub stk-facts">
                                {path.facts.map((f) => (
                                  <li key={f.label}>
                                    <b>{f.label}</b>
                                    <span>{f.text}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="stk-paths-contact">
                        <p className="stk-paths-hint">For further details, connect with us</p>
                        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}