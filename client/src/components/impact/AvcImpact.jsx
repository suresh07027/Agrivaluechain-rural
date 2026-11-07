import { useEffect, useRef, useState } from "react";
import "./avcImpact.css";
import fieldImage from "../../assets/option3-photo.webp";
import solarImage from "../../assets/Linking-farmers/solar.webp";

const impacts = [
  {
    title: "Socio-economic impact",
    text: "Farmers earn more when they have the skills to run the pack house efficiently, at the lowest possible energy use.",
    icon: (
      <>
        <path d="M5 19h14M7 18c.6-2.8 2.4-4.3 5-4.3s4.4 1.5 5 4.3" />
        <path d="M12 14V8m0 3c-2.8 0-4.4-1.6-4.4-4.4 2.8 0 4.4 1.6 4.4 4.4Zm0-2.1c0-2.7 1.6-4.3 4.4-4.3 0 2.7-1.6 4.3-4.4 4.3Z" />
      </>
    ),
  },
  {
    title: "Energy-efficient technology",
    text: "Energy-efficiency solutions are built into the refrigeration plant and the electrical system, in both design and operation.",
    icon: (
      <>
        <path d="M9 7v5m6-5v5m-8 0h10v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2Zm5 6v4" />
        <path d="M16.5 5.2c2.4-.2 3.8 1.1 3.8 3.5-2.4.2-3.8-1.1-3.8-3.5Zm-1.2 5.1c.3-2.2 1.7-3.3 4-3.2-.3 2.2-1.7 3.3-4 3.2Z" />
      </>
    ),
  },
  {
    title: "Sustainable cooling",
    text: "Solar energy, biomass and passive cooling are integrated into pre-cooling and cold rooms.",
    icon: (
      <>
        <path d="M12 3v18m-7.8-13.5 15.6 9m-15.6 0 15.6-9M8.2 5.2 12 7l3.8-1.8M8.2 18.8 12 17l3.8 1.8M4.6 10.1 8 12l-3.4 1.9m14.8-3.8L16 12l3.4 1.9" />
      </>
    ),
  },
  {
    title: "Evaporative cooling",
    text: "Evaporative cooling solutions are designed and implemented for the pack house.",
    icon: (
      <>
        <path d="M12 3v18m-7.8-13.5 15.6 9m-15.6 0 15.6-9M8.2 5.2 12 7l3.8-1.8M8.2 18.8 12 17l3.8 1.8" />
        <path d="M16.3 4.2c2.2-.1 3.5 1.1 3.5 3.3-2.2.1-3.5-1.1-3.5-3.3Zm-1 4.8c.3-2 1.6-3 3.7-2.9-.3 2-1.6 3-3.7 2.9Z" />
      </>
    ),
  },
  {
    title: "Scientific protocols",
    text: "Protocols specific to each produce group meet quality standards and food safety requirements.",
    icon: (
      <>
        <path d="M8 5H6a2 2 0 0 0-2 2v12h16V7a2 2 0 0 0-2-2h-2" />
        <path d="M9 4h6v4H9zM8 12h2m2 0h4m-8 4h2m2 0h2" />
        <path d="m15 15 1.5 1.5L20 13" />
      </>
    ),
  },
  {
    title: "Market-ready quality",
    text: "Quality parameters, grades and packing requirements are matched to domestic and export markets.",
    icon: (
      <>
        <path d="M4 20h16M6 17v-5h3v5m3 0V8h3v9m3 0V4h3v13" />
        <path d="m5 9 5-3 4 1 5-4m-3 0h3v3" />
      </>
    ),
  },
];

function LeafMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M29 5C16 5 7 10 7 21c0 5 3.5 9 8.5 9C25 30 29 20 29 5Z" />
      <path d="M5 31c5-8 11-13 20-19" />
    </svg>
  );
}

export default function AvcImpact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="avc-impact"
      ref={sectionRef}
      className={`avc-impact${visible ? " is-visible" : ""}`}
      aria-labelledby="avc-impact-title"
      style={{ "--impact-field": `url("${fieldImage}")`, "--impact-solar": `url("${solarImage}")` }}
    >
      <div className="avc-impact-inner">
        <div className="avc-impact-intro">
          <h2 className="avc-impact-title" id="avc-impact-title">
            <LeafMark className="avc-impact-leaf avc-impact-leaf-left" />
            <span className="avc-impact-title-pill">
              <span>AVC</span> <span className="avc-impact-title-accent">IMPACT</span>
            </span>
            <LeafMark className="avc-impact-leaf avc-impact-leaf-right" />
          </h2>
          <p>
            What we learned from our pack house study shows where future pack house projects can do
            more. These are the seven areas we plan around.
          </p>
          <span className="avc-impact-underline" aria-hidden="true" />
        </div>

        <ul className="avc-impact-list">
          {impacts.map((item, index) => (
            <li className="avc-impact-card" key={item.title} style={{ "--card-index": index }}>
              <span className="avc-impact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  {item.icon}
                </svg>
              </span>
              <span className="avc-impact-divider" aria-hidden="true" />
              <div className="avc-impact-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
