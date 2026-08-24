import { useEffect, useRef } from "react";

export default function useTilt(maxTilt = 5) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reset = () => {
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--shine-x", "50%");
      element.style.setProperty("--shine-y", "50%");
    };

    const handlePointerMove = (event) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      element.style.setProperty("--tilt-x", `${(0.5 - y) * maxTilt}deg`);
      element.style.setProperty("--tilt-y", `${(x - 0.5) * maxTilt}deg`);
      element.style.setProperty("--shine-x", `${x * 100}%`);
      element.style.setProperty("--shine-y", `${y * 100}%`);
    };

    const handlePointerEnter = () => {
      element.style.animation = "none";
      element.style.opacity = "1";
    };

    element.addEventListener("pointerenter", handlePointerEnter);
    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", reset);

    return () => {
      element.removeEventListener("pointerenter", handlePointerEnter);
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", reset);
    };
  }, [maxTilt]);

  return ref;
}