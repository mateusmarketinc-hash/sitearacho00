import { useEffect, useState } from "react";

interface FallingIcon {
  id: number;
  left: number;
  initialOffset: number;
  duration: number;
  size: number;
}

const LogoRain = () => {
  const [icons, setIcons] = useState<FallingIcon[]>([]);

  useEffect(() => {
    const newIcons: FallingIcon[] = [];
    for (let i = 0; i < 15; i++) {
      newIcons.push({
        id: i,
        left: Math.random() * 95,
        initialOffset: Math.random() * 100,
        duration: 12 + Math.random() * 8,
        size: 24 + Math.random() * 16,
      });
    }
    setIcons(newIcons);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <span
          key={icon.id}
          className="absolute opacity-30"
          style={{
            left: `${icon.left}%`,
            fontSize: `${icon.size}px`,
            animation: `logoRain ${icon.duration}s linear infinite`,
            animationDelay: `-${(icon.initialOffset / 100) * icon.duration}s`,
          }}
        >
          🇨🇳
        </span>
      ))}
      <style>{`
        @keyframes logoRain {
          0% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoRain;