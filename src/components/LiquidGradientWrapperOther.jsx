// liquidGradient.js
import { useState, useEffect, useMemo } from "react";

/* -------------------------------------------------------
 *  Gradient palette (smooth colour path – warm → cool → warm)
 * ----------------------------------------------------- */
export const GRADIENTS = [
  ["#f7971e", "#ffd200"], // orange-gold
  ["#ffd200", "#fee140"], // gold-sun
  ["#fee140", "#fa709a"], // sun-flamingo
  ["#fa709a", "#f953c6"], // flamingo-pink
  ["#f953c6", "#b91d73"], // pink-plum
  ["#b91d73", "#6a11cb"], // plum-indigo
  ["#6a11cb", "#2575fc"], // indigo-blue
  ["#2575fc", "#4facfe"], // blue-sky
  ["#4facfe", "#00f2fe"], // sky-lightblue
  ["#00f2fe", "#00c9ff"], // lightblue-aqua
  ["#00c9ff", "#92fe9d"], // aqua-green
  ["#92fe9d", "#43e97b"], // green-lime
  ["#43e97b", "#38f9d7"], // lime-teal
  ["#38f9d7", "#feb47b"], // teal-sunset-orange
  ["#feb47b", "#ff7e5f"], // sunset
  ["#ff7e5f", "#f7971e"], // sunset-orange (loops)
];

/* Timing (ms) */
export const STEP_MS = 5_000;      // start of each new gradient
export const FADE_MS = 5_000;      // length of the cross‑fade

/* -------------------------------------------------------
 *  Hook: useLiquidGradient
 * ----------------------------------------------------- */
export function useLiquidGradient(clipText = false) {
  const [idx, setIdx] = useState(0);

  /* rotate through the palette */
  useEffect(() => {
    const id = setInterval(
      () => setIdx((n) => (n + 1) % GRADIENTS.length),
      STEP_MS,
    );
    return () => clearInterval(id);
  }, []);

  /* compute current style object */
  const style = useMemo(() => {
    const [from, to] = GRADIENTS[idx];
    const base = {
      backgroundImage: `linear-gradient(120deg, ${from}, ${to})`,
      backgroundSize: "200% 200%",
      transition: `background-image ${FADE_MS}ms ease-in-out`,
    };

    return clipText
      ? {
          ...base,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }
      : base;
  }, [idx, clipText]);

  /* one Tailwind arbitrary‑value utility keeps the flow moving */
  const className = "animate-[flow_6s_ease_infinite]";

  return { style, className };
}

/* -------------------------------------------------------
 *  Component: LiquidGradientWrapper
 * ----------------------------------------------------- */
export function LiquidGradientWrapper({
  children,
  className = "",
  clipText = false,
  style = {},
  ...rest
}) {
  const hook = useLiquidGradient(clipText);
  return (
    <div
      {...rest}
      className={`${hook.className} ${className}`}
      style={{ ...hook.style, ...style }}
    >
      {children}
    </div>
  );
}
