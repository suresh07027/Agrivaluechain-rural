import { useEffect } from "react";

// Re-implements the vanilla-JS scroll reveal from the original script.js
// using a React effect. Runs whenever the route (deps) changes.
export default function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal");
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".option-card, .segment, .project, .audience-card, .audience-block, .course-card, .capacity-card, .tech-card, .section-scope .bullets li, .section-offer .bullets li");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}