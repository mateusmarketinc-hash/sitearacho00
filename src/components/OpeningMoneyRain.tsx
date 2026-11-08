import { motion, useReducedMotion } from "framer-motion";

const drops = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 37 + 5) % 100}%`,
  duration: 7 + index % 5,
  delay: -(index * 1.3),
  rotation: (index % 2 ? 1 : -1) * (15 + index * 4),
}));

export default function OpeningMoneyRain() {
  const reducedMotion = useReducedMotion();
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop, index) => (
        <motion.span key={index} className="absolute text-3xl sm:text-4xl" style={{ left: drop.left, top: reducedMotion ? `${(index * 19) % 90}%` : "-10%" }}
          initial={{ opacity: 0 }}
          animate={reducedMotion ? { opacity: 0.4 } : { y: ["-10vh", "115vh"], rotate: [0, drop.rotation], opacity: [0, 0.8, 0.8, 0] }}
          transition={reducedMotion ? { duration: 0 } : { duration: drop.duration, delay: drop.delay, repeat: Infinity, ease: "linear" }}>
          💸
        </motion.span>
      ))}
    </div>
  );
}