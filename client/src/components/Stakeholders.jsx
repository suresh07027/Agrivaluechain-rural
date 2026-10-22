import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import stakeholderImage from "../assets/Stakeholder/Stakeholder.jpeg";
import financialImage from "../assets/Stakeholder/Financial.jpeg";
import fpoImage from "../assets/Stakeholder/Fpo.jpeg";
import governmentImage from "../assets/Stakeholder/Government.jpeg";
import logisticsImage from "../assets/Stakeholder/Logistic.jpeg";
import marketImage from "../assets/Stakeholder/Market.jpeg";
import processorImage from "../assets/Stakeholder/Processor.jpeg";
import technologyPartnersImage from "../assets/Stakeholder/Tech-partners.jpeg";
import tradersImage from "../assets/Stakeholder/Traders.jpeg";

// Order follows the reference diagram, clockwise from the top.
const stakeholders = [
  {
    label: "Farmers / FPOs",
    color: "#f0eeec",
    image: fpoImage,
    href: "/#linking-farmers",
    details: ["Productivity", "Post-Harvest Management access", "Aggregation"]
  },
  {
    label: "Traders / Aggregators",
    color: "#f0eeec",
    image: tradersImage,
    href: "/#linking-farmers",
    details: ["Efficient sourcing, handling, logistics and market linkages"]
  },
  {
    label: "Processors",
    color: "#f0eeec",
    image: processorImage,
    href: "/#linking-farmers",
    details: ["Raw-material supply, processing efficiency and market development"]
  },
  {
    label: "Distributional Markets / Retailers",
    color: "#f0eeec",
    image: marketImage,
    href: "/#linking-farmers",
    details: ["Quality, traceability, reliable supply and cold-chain solutions"]
  },
  {
    label: "Government",
    color: "#f0eeec",
    image: governmentImage,
    href: "/#technical-support-pillar",
    details: ["Programme design, implementation, infrastructure and policy support"]
  },
  {
    label: "Financial institutions",
    color: "#f0eeec",
    image: financialImage,
    href: "/#technical-support-pillar",
    details: ["Bankable projects, investment appraisal and financing structures"]
  },
  {
    label: "Logistics / Cold-chain providers",
    color: "#f0eeec",
    image: logisticsImage,
    href: "/#linking-farmers",
    details: ["Infrastructure planning, technology selection and operational optimisation"]
  },
  {
    label: "Technology partners",
    color: "#f0eeec",
    image: technologyPartnersImage,
    href: "/#collaborative-pillar",
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

export default function Stakeholders() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const count = stakeholders.length;

  return (
    <section className="stk" id="stakeholders">
      <div className="wrap">
        <h2 className="stk-title">Stakeholders</h2>

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
            const tooltipSide = isMobile
              ? i === count - 1 || i % 2 === 0 ? "right" : "left"
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
                  className={`stk-node-pos${s.image ? " stk-node-pos-has-image" : ""}${s.details ? ` stk-node-popup-${tooltipSide}` : ""}`}
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
                      tabIndex={s.details && !s.href ? 0 : undefined}
                      aria-describedby={s.details && !s.href ? tooltipId : undefined}
                      aria-label={s.image && !s.href ? s.label : undefined}
                      style={{
                        background: s.image ? "transparent" : s.color,
                        "--glow": s.color,
                        animationDelay: `${i * 0.45}s`
                      }}
                    >
                      {s.href ? (
                        <Link className="stk-node-link" to={s.href} aria-label={s.label} aria-describedby={tooltipId}>
                          {s.image ? <img className="stk-node-image" src={s.image} alt="" /> : <span>{s.label}</span>}
                        </Link>
                      ) : (
                        s.image ? <img className="stk-node-image" src={s.image} alt="" /> : <span>{s.label}</span>
                      )}
                    </div>
                  </motion.div>
                  {s.image && (
                    s.href
                      ? <Link className="stk-node-caption" to={s.href}>{s.label}</Link>
                      : <h3 className="stk-node-caption">{s.label}</h3>
                  )}
                  {s.details && (
                    <div className="stk-node-popup" id={tooltipId} role="tooltip">
                      {s.details.map((detail) => <span key={detail}>{detail}</span>)}
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