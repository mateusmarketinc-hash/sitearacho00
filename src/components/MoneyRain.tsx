import { useEffect, useState } from "react";

interface MoneyEmoji {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

interface MoneyRainProps {
  isActive: boolean;
  onComplete: () => void;
}

const MoneyRain = ({ isActive, onComplete }: MoneyRainProps) => {
  const [emojis, setEmojis] = useState<MoneyEmoji[]>([]);

  useEffect(() => {
    if (isActive) {
      const newEmojis: MoneyEmoji[] = [];
      for (let i = 0; i < 50; i++) {
        newEmojis.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 500,
          duration: 1000 + Math.random() * 1000,
        });
      }
      setEmojis(newEmojis);

      // Navigate after animation
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {emojis.map((emoji) => (
        <span
          key={emoji.id}
          className="absolute text-3xl animate-money-fall"
          style={{
            left: `${emoji.left}%`,
            animationDelay: `${emoji.delay}ms`,
            animationDuration: `${emoji.duration}ms`,
          }}
        >
          💰
        </span>
      ))}
    </div>
  );
};

export default MoneyRain;
