import { BadgeCheck } from "lucide-react";
import arachnoLogo from "@/assets/arachno-logo.png.asset.json";

const Header = () => {
  return (
    <header className="flex flex-col items-center pt-8 pb-8">
      {/* Logo with golden glow */}
      <div className="relative mb-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.4)_0%,transparent_70%)] blur-xl scale-150" />
        <img 
          src={arachnoLogo.url} 
          alt="arachno" 
          className="relative w-60 h-60 sm:w-72 sm:h-72 object-contain drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]"
          style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.6)) drop-shadow(0 0 2px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Instagram */}
      <div className="mt-0 flex flex-col items-center gap-1">
        <a 
          href="https://www.instagram.com/arachno00/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-white/70 hover:text-white transition-colors drop-shadow-md flex items-center gap-1"
        >
          @arachno00
          <BadgeCheck className="w-3 h-3 text-blue-400 fill-blue-400" />
        </a>
      </div>
    </header>
  );
};

export default Header;