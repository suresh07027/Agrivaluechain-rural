import { useEffect, useRef, useState } from "react";
import "./scopeStyles.css";
import projectGlanceImage from "../../assets/project_glance.jpeg";

import {
  GlanceIcon,
  ApplicantIcon,
  FeasibilityIcon,
  InfrastructureIcon,
  FlowIcon,
  OperationsIcon,
  StandardsIcon,
  FinancialIcon,
  ImplementationIcon,
  AnnexuresIcon,
} from "./scope_icons";

const deliverables = [
  {
    type: "glance",
    image: projectGlanceImage,
    imageAlt: "Agricultural value chain from farm to market",
    text: (
      <>
        <strong>Project at a glance</strong> — summary, investment, key
        outcomes
      </>
    ),
    Icon: GlanceIcon,
  },
  {
    type: "applicant",
    image: "/images/projects/carrot-value-chain.jpeg",
    imageAlt: "Agricultural project and crop production",
    text: <>About the applicant / promoter</>,
    Icon: ApplicantIcon,
  },
  {
    type: "feasibility",
    image: "/images/projects/agro-food-supply.jpeg",
    imageAlt: "Fresh agricultural produce supply chain",
    text: <>Technical feasibility & market potential</>,
    Icon: FeasibilityIcon,
  },
  {
    type: "infrastructure",
    image: "/images/projects/twc-cold-storage.jpeg",
    imageAlt: "Modern agricultural cold storage facility",
    text: (
      <>
        Post-harvest infrastructure scenario / geography of the state or
        region
      </>
    ),
    Icon: InfrastructureIcon,
  },
  {
    type: "flow",
    image: "/images/projects/lemon-value-chain.jpeg",
    imageAlt: "Lemon value chain process flow",
    text: (
      <>
        Process flow chart and layout / floor plan of operations
      </>
    ),
    Icon: FlowIcon,
  },
  {
    type: "operations",
    image: "/images/projects/agro-food-supply.jpeg",
    imageAlt: "Post-harvest agricultural operations",
    text: (
      <>
        Post-harvest operations — pre-cooling, grading, packaging, storage,
        cold chain, ripening
      </>
    ),
    Icon: OperationsIcon,
  },
  {
    type: "standards",
    image: "/images/projects/carrot-value-chain.jpeg",
    imageAlt: "Agricultural infrastructure and technical survey",
    text: (
      <>
        Technical standards for civil infrastructure and plant & machinery
      </>
    ),
    Icon: StandardsIcon,
  },
  {
    type: "financial",
    image: "/images/projects/lemon-value-chain.jpeg",
    imageAlt: "Agricultural value chain business opportunity",
    text: (
      <>
        Financial feasibility — capital, revenue and operating cost model;
        profitability evaluation
      </>
    ),
    Icon: FinancialIcon,
  },
  {
    type: "implementation",
    image: "/images/projects/carrot-value-chain.jpeg",
    imageAlt: "Agricultural project implementation",
    text: <>Implementation plan</>,
    Icon: ImplementationIcon,
  },
  {
    type: "annexures",
    image: "/images/projects/twc-cold-storage.jpeg",
    imageAlt: "Agricultural project supporting documentation",
    text: (
      <>
        Annexures — data sheets, quotations, technical drawings, references
      </>
    ),
    Icon: AnnexuresIcon,
  },
];

function Blueprint() {
  return (
    <svg
      className="bg-blueprint"
      viewBox="0 0 400 520"
      fill="none"
      aria-hidden="true"
    >
      {/* Farm */}
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="20" y="20" width="70" height="46" rx="4" />
        <path d="M20 44 h70 M55 20 v46" />

        <text
          x="24"
          y="82"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          FARM
        </text>
      </g>

      <path
        d="M90 44 h60"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Collection */}
      <g stroke="currentColor" strokeWidth="1.4">
        <circle cx="190" cy="44" r="26" />
        <path d="M190 24 v40 M172 44 h36" />

        <text
          x="162"
          y="82"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          COLLECTION
        </text>
      </g>

      <path
        d="M190 70 v40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Processing */}
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="150" y="110" width="80" height="50" rx="4" />
        <path d="M150 135 h80 M190 110 v50" />

        <text
          x="156"
          y="176"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          PROCESSING
        </text>
      </g>

      <path
        d="M190 160 v40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Storage */}
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="140" y="200" width="100" height="54" rx="4" />
        <path d="M140 227 h100" />

        <path d="M160 200 v54 M180 200 v54 M200 200 v54 M220 200 v54" />

        <text
          x="166"
          y="272"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          STORAGE
        </text>
      </g>

      <path
        d="M190 254 v40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Packaging */}
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="155" y="294" width="70" height="46" rx="4" />
        <path d="M155 317 h70 M190 294 v46" />

        <text
          x="150"
          y="358"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          PACKAGING
        </text>
      </g>

      <path
        d="M190 340 v40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      {/* Market */}
      <g stroke="currentColor" strokeWidth="1.4">
        <path d="M165 380 l25 -16 l25 16 v36 h-50 z" />

        <text
          x="164"
          y="436"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="currentColor"
          stroke="none"
        >
          MARKET
        </text>
      </g>
    </svg>
  );
}

function ParticlesCanvas({ sectionRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrame;
    let particles = [];
    let running = false;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = window.innerWidth < 640 ? 10 : 22;

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: 1 + Math.random() * 1.8,
        speedX: -0.06 - Math.random() * 0.1,
        speedY: -0.12 - Math.random() * 0.12,
        opacity: 0.08 + Math.random() * 0.14,
        leaf: Math.random() > 0.6,
      }));
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        if (particle.x < -10) {
          particle.x = width + 10;
        }

        ctx.beginPath();

        ctx.fillStyle = `rgba(31, 133, 119, ${particle.opacity})`;

        if (particle.leaf) {
          ctx.ellipse(
            particle.x,
            particle.y,
            particle.r * 1.8,
            particle.r,
            Math.PI / 4,
            0,
            Math.PI * 2
          );
        } else {
          ctx.arc(
            particle.x,
            particle.y,
            particle.r,
            0,
            Math.PI * 2
          );
        }

        ctx.fill();
      });

      if (running) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (running || reduceMotion) return;

      running = true;
      draw();
    };

    const stop = () => {
      running = false;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };

    resize();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
          } else {
            stop();
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(section);

    window.addEventListener("resize", resize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-particles"
      aria-hidden="true"
    />
  );
}

function DeliverableCard({ item, index }) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const content = contentRef.current;

    if (!card || !inner || !content) return;

    const rect = card.getBoundingClientRect();

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rx = (0.5 - py) * 8;
    const ry = (px - 0.5) * 10;

    inner.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    inner.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    inner.style.setProperty("--tz", "15px");
    inner.style.setProperty("--s", "1.01");

    inner.style.setProperty(
      "--lx",
      `${(px * 100).toFixed(1)}%`
    );

    inner.style.setProperty(
      "--ly",
      `${(py * 100).toFixed(1)}%`
    );

    content.style.setProperty(
      "--ctx",
      `${((px - 0.5) * 6).toFixed(1)}px`
    );

    content.style.setProperty(
      "--cty",
      `${((py - 0.5) * 6).toFixed(1)}px`
    );
  };

  const resetCard = () => {
    const inner = innerRef.current;
    const content = contentRef.current;

    if (!inner || !content) return;

    inner.style.setProperty("--rx", "0deg");
    inner.style.setProperty("--ry", "0deg");
    inner.style.setProperty("--tz", "0px");
    inner.style.setProperty("--s", "1");

    inner.style.setProperty("--lx", "50%");
    inner.style.setProperty("--ly", "50%");

    content.style.setProperty("--ctx", "0px");
    content.style.setProperty("--cty", "0px");
  };

  const Icon = item.Icon;

  const row = Math.floor(index / 2);
  const col = index % 2;

  const delay = row * 0.09 + col * 0.045;

  return (
    <article
      ref={cardRef}
      className="card"
      data-anim={item.type}
      style={{
        "--d": `${delay.toFixed(3)}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      tabIndex={0}
    >
      <div ref={innerRef} className="card-inner">
        <div ref={contentRef} className="card-content">
          <span className="dot" aria-hidden="true" />

          <p>{item.text}</p>
        </div>

        <img
          className="card-image"
          src={item.image}
          alt={item.imageAlt}
        />

        <span className="card-icon">
          <Icon />
        </span>
      </div>
    </article>
  );
}

export default function ScopeOfDeliverables() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scopeSection"
      className={`scope-section ${inView ? "in-view" : ""}`}
    >
      <ParticlesCanvas sectionRef={sectionRef} />

      <Blueprint />

      <div className="scope-inner">
        <header className="scope-header">
          <div className="scope-header-flag">
            <span className="flag-bar" />

            <div>
              <h2 className="scope-title">
                Scope of deliverables
              </h2>

              <div className="scope-rule" />
            </div>
          </div>
        </header>

        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <DeliverableCard
              key={item.type}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}