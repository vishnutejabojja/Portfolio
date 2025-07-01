// // LiquidText.jsx
// import React, { useEffect, useState } from "react";

// // Feel free to add / tweak colours
// const GRADIENTS = [
//   ["#ff7e5f", "#feb47b"], // sunset
//   ["#6a11cb", "#2575fc"], // indigo‑blue
//   ["#f7971e", "#ffd200"], // orange‑gold
//   ["#00c9ff", "#92fe9d"], // aqua‑green
// ];

// export default function LiquidText({ children }) {
//   const [i, setI] = useState(0);

//   // Change gradient every 5 s
//   useEffect(() => {
//     const id = setInterval(() => setI((n) => (n + 1) % GRADIENTS.length), 5000);
//     return () => clearInterval(id);
//   }, []);

//   const [from, to] = GRADIENTS[i];

//   return (
//     <span
//       className="font-extrabold text-6xl animate-[flow_4s_ease-in-out_infinite]"
//       style={{
//         backgroundImage: `linear-gradient(120deg, ${from}, ${to})`,
//         backgroundSize: "200% 200%",
//         backgroundClip: "text",
//         WebkitBackgroundClip: "text",
//         color: "transparent",
//         transition: "background-image 1.5s ease",
//       }}
//     >
//       {children}
//     </span>
//   );
// }

// LiquidText.jsx
import React, { useEffect, useState } from "react";

// const GRADIENTS = [
//   ["#ff7e5f", "#feb47b"],   // sunset
//   ["#6a11cb", "#2575fc"],   // indigo‑blue
//   ["#f7971e", "#ffd200"],   // orange‑gold
//   ["#00c9ff", "#92fe9d"],   // aqua‑green
//   ["#f953c6", "#b91d73"],   // pink‑plum
//   ["#4facfe", "#00f2fe"],   // soft‑sky
//   ["#43e97b", "#38f9d7"],   // mint‑teal
//   ["#fa709a", "#fee140"],   // flamingo‑sun
// ];

const GRADIENTS = [
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
  ["#ff7e5f", "#f7971e"], // sunset-orange (loop back to start)
];



const DURATION = 5000;            // 5 s between gradient *starts*
const TRANSITION_MS = 5000;       // 5 s cross‑fade

export default function LiquidText({ children }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % GRADIENTS.length),
      DURATION
    );
    return () => clearInterval(id);
  }, []);

  const [from, to] = GRADIENTS[i];

  return (
    <span
      className="font-extrabold text-6xl animate-[flow_6s_ease_infinite]"
      style={{
        backgroundImage: `linear-gradient(120deg, ${from}, ${to})`,
        backgroundSize: "200% 200%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        // ✨ 5‑second cross‑fade = perfectly smooth
        transition: `background-image ${TRANSITION_MS}ms ease-in-out`,
      }}
    >
      {children}
    </span>
  );
}
