import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  href?: string;
  to?: string;
  icon?: LucideIcon;
  iconImage?: string;
  iconRounded?: boolean;
  iconFilter?: string;
  label: string;
  delay?: number;
  onClick?: (e: React.MouseEvent) => void;
  goldText?: boolean;
  blueText?: boolean;
  noAnimation?: boolean;
}

const LinkButton = ({ href, to, icon: Icon, iconImage, iconRounded, iconFilter, label, delay = 0, onClick, goldText, blueText, noAnimation }: LinkButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const className = `
    glass-button
    flex items-center gap-4
    w-full px-6 py-4
    rounded-2xl
    ${noAnimation ? '' : 'opacity-0 animate-fade-up'}
    ${isPressed ? "animate-press" : ""}
  `;

  const style = noAnimation ? {} : { animationDelay: `${delay}ms`, animationFillMode: "forwards" as const };

  const content = (
    <>
      {(iconImage || Icon) && (
        <div className={`flex items-center justify-center w-10 h-10 ${iconRounded ? 'rounded-full' : 'rounded-xl'} bg-white/20 backdrop-blur-sm overflow-hidden`}>
          {iconImage ? (
            <img src={iconImage} alt="" className="w-full h-full object-cover" style={iconFilter ? { filter: iconFilter } : undefined} />
          ) : Icon ? (
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          ) : null}
        </div>
      )}
      <span className={`flex-1 text-base font-medium ${goldText ? 'gold-shimmer-text' : blueText ? 'blue-shimmer-text' : 'text-white'}`}>
        {label}
      </span>
      <svg
        className="w-5 h-5 gold-shimmer-text"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#goldGradient)"
        strokeWidth={2}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 74%, 49%)" />
            <stop offset="50%" stopColor="hsl(48, 95%, 70%)" />
            <stop offset="100%" stopColor="hsl(43, 74%, 49%)" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </>
  );

  const handlers = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
    onTouchStart: () => setIsPressed(true),
    onTouchEnd: () => setIsPressed(false),
  };

  if (to) {
    return (
      <Link to={to} className={className} style={style} {...handlers} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      {...handlers}
    >
      {content}
    </a>
  );
};

export default LinkButton;
