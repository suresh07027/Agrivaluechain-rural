import { useEffect, useRef, useState } from "react";
import "./scopeStyles.css";
import "./ProjectScope.css"; // also styles .deliverables-heading

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
    title: "Project at a glance — summary, investment, key outcomes",
    description: "A concise overview of the proposal, its investment requirement and expected results.",
    Icon: GlanceIcon,
  },
  {
    type: "applicant",
    title: "About the applicant / promoter",
    description: "The promoter profile, experience, capabilities and project vision.",
    Icon: ApplicantIcon,
  },
  {
    type: "feasibility",
    title: "Technical feasibility & market potential",
    description: "Assessment of technical viability, demand, supply and market opportunities.",
    Icon: FeasibilityIcon,
  },
  {
    type: "infrastructure",
    title: "Post-harvest infrastructure scenario / geography of the state or region",
    description: "A regional view of existing facilities, infrastructure gaps and location context.",
    Icon: InfrastructureIcon,
  },
  {
    type: "flow",
    title: "Process flow chart and layout / floor plan of operations",
    description: "Clear process sequencing with a practical facility layout and operational flow.",
    Icon: FlowIcon,
  },
  {
    type: "operations",
    title: "Post-harvest operations — pre-cooling, grading, packaging, storage, cold chain, ripening",
    description: "Produce-specific handling systems that protect quality from harvest through dispatch.",
    Icon: OperationsIcon,
  },
  {
    type: "standards",
    title: "Technical standards for civil infrastructure and plant & machinery",
    description: "Design specifications for buildings, utilities, equipment and installation.",
    Icon: StandardsIcon,
  },
  {
    type: "financial",
    title: "Financial feasibility — capital, revenue and operating cost model; profitability evaluation",
    description: "Investment and operating projections, revenue assumptions and returns analysis.",
    Icon: FinancialIcon,
  },
  {
    type: "implementation",
    title: "Implementation plan",
    description: "A phased path from approvals and procurement to construction and commissioning.",
    Icon: ImplementationIcon,
  },
  {
    type: "annexures",
    title: "Annexures — data sheets, quotations, technical drawings, references",
    description: "Supporting documentation that makes the report traceable and ready for review.",
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
      "(prefers-reduced-motion: reduce)",
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
            Math.PI * 2,
          );
        } else {
          ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
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
      },
    );

    observer.observe(section);

    window.addEventListener("resize", resize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [sectionRef]);

  return <canvas ref={canvasRef} className="bg-particles" aria-hidden="true" />;
}

function DeliverableCard({ item, index }) {
  const Icon = item.Icon;
  const descriptionId = `scope-description-${index + 1}`;

  return (
    <article
      className="roadmap-step"
      data-anim={item.type}
      style={{
        "--step-index": index,
      }}
      tabIndex={0}
      aria-describedby={descriptionId}
    >
      <span className="roadmap-milestone" aria-hidden="true">
        <span className="roadmap-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="roadmap-icon">
          <Icon />
        </span>
      </span>
      <h3 className="roadmap-title">{item.title}</h3>
      <span className="roadmap-leaf roadmap-leaf-one" aria-hidden="true" />
      <span className="roadmap-leaf roadmap-leaf-two" aria-hidden="true" />
      <span className="roadmap-tooltip" id={descriptionId} role="tooltip">
        {item.description}
      </span>
    </article>
  );
}

export default function ScopeOfDeliverables() {
  const sectionRef = useRef(null);
  const vinePathRef = useRef(null);
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
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const path = vinePathRef.current;
    if (!section || !path) return undefined;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;

    const updateVine = () => {
      const bounds = section.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const end = window.innerHeight * 0.18;
      const progress = Math.max(
        0,
        Math.min(1, (start - bounds.top) / (bounds.height + start - end)),
      );
      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
    };

    updateVine();
    window.addEventListener("scroll", updateVine, { passive: true });
    window.addEventListener("resize", updateVine);

    return () => {
      window.removeEventListener("scroll", updateVine);
      window.removeEventListener("resize", updateVine);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scopeSection"
      className={`scope-section ${inView ? "in-view" : ""}`}
    >
      <div className="scope-inner">
        <header className="scope-header">
          <div className="scope-header-flag">
            <span className="flag-bar" />

            <div>
              <h2 className="scope-title">Scope of deliverables</h2>

              <div className="scope-rule" />
            </div>
          </div>
        </header>

        <h3 className="deliverables-heading">
          What the project report contains
        </h3>

        <div className="deliverables-roadmap">
          <svg className="roadmap-vine" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
            <path
              ref={vinePathRef}
              className="roadmap-vine-stem"
              d="M50 0 C38 36 62 62 50 100 C38 138 62 162 50 200 C38 238 62 262 50 300 C38 338 62 362 50 400 C38 438 62 462 50 500 C38 538 62 562 50 600 C38 638 62 662 50 700 C38 738 62 762 50 800 C38 838 62 862 50 900 C38 938 62 962 50 1000"
            />
            <path className="roadmap-vine-leaves" d="M46 78 C28 68 23 54 27 43 C40 46 48 57 46 78 M53 178 C71 168 77 154 73 143 C60 146 52 157 53 178 M46 278 C28 268 23 254 27 243 C40 246 48 257 46 278 M53 378 C71 368 77 354 73 343 C60 346 52 357 53 378 M46 478 C28 468 23 454 27 443 C40 446 48 457 46 478 M53 578 C71 568 77 554 73 543 C60 546 52 557 53 578 M46 678 C28 668 23 654 27 643 C40 646 48 657 46 678 M53 778 C71 768 77 754 73 743 C60 746 52 757 53 778 M46 878 C28 868 23 854 27 843 C40 846 48 857 46 878 M53 978 C71 968 77 954 73 943 C60 946 52 957 53 978" />
          </svg>
          {deliverables.map((item, index) => (
            <DeliverableCard key={item.type} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
