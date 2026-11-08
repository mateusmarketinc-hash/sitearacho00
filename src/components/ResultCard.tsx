import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ResultCardProps {
  number: string;
  label: string;
  delay?: number;
}

const ResultCard = ({ number, label, delay = 0 }: ResultCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayNumber, setDisplayNumber] = useState("0");
  
  // Extract numeric value and suffix (like +, %)
  const numericValue = parseInt(number.replace(/[^0-9]/g, "")) || 0;
  const suffix = number.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();
    const delayMs = delay || 0;
    
    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime - delayMs;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * numericValue);
        
        setDisplayNumber(currentValue.toString());
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayNumber(numericValue.toString());
        }
      };
      
      requestAnimationFrame(animate);
    }, delayMs);
    
    return () => clearTimeout(timer);
  }, [isInView, numericValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (delay || 0) / 1000 }}
      className="glass-button rounded-2xl p-4 text-center aspect-square flex flex-col items-center justify-center"
    >
      <p className="text-xl sm:text-2xl font-bold text-white mb-1">
        {displayNumber}{suffix}
      </p>
      <p className="text-[9px] sm:text-xs text-white/70 uppercase tracking-wider leading-tight">
        {label}
      </p>
    </motion.div>
  );
};

export default ResultCard;
