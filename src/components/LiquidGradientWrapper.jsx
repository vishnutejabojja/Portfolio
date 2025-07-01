// LiquidGradientWrapper.jsx
import React, { useEffect, useState } from "react";

const GRADIENTS = [
  ["#f7971e", "#ffd200"],
  ["#ffd200", "#fee140"],
  ["#fee140", "#fa709a"],
  ["#fa709a", "#f953c6"],
  ["#f953c6", "#b91d73"],
  ["#b91d73", "#6a11cb"],
  ["#6a11cb", "#2575fc"],
  ["#2575fc", "#4facfe"],
  ["#4facfe", "#00f2fe"],
  ["#00f2fe", "#00c9ff"],
  ["#00c9ff", "#92fe9d"],
  ["#92fe9d", "#43e97b"],
  ["#43e97b", "#38f9d7"],
  ["#38f9d7", "#feb47b"],
  ["#feb47b", "#ff7e5f"],
  ["#ff7e5f", "#f7971e"],
];

const DURATION = 5000;
const TRANSITION_MS = 5000;

export default function LiquidGradientWrapper({
  children,
  className = "",
  asText = false,
  style = {},
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % GRADIENTS.length);
    }, DURATION);
    return () => clearInterval(id);
  }, []);

  const [from, to] = GRADIENTS[i];

  const baseStyle = {
    backgroundImage: `linear-gradient(120deg, ${from}, ${to})`,
    backgroundSize: "200% 200%",
    transition: `background-image ${TRANSITION_MS}ms ease-in-out`,
  };

  const animateClass = "animate-[flow_6s_ease_infinite]";

  // If asText is true → clip to text, else apply full background
  const clipTextStyle = asText
    ? {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }
    : {};

  return (
    <div
      className={`${animateClass} ${className}`}
      style={{ ...baseStyle, ...clipTextStyle, ...style }}
    >
      {children}
    </div>
  );
}
