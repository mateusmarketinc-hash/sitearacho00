import mapsIcon from "@/assets/maps-icon.png";

interface MapWidgetProps {
  delay?: number;
}

const MapWidget = ({ delay = 0 }: MapWidgetProps) => {
  const address = "Av Maranhão, 363 - Santa Maria, Uberaba, MG, 38022-250";
  const googleMapsDirectUrl = "https://www.google.com/maps/place/Av.+Maranh%C3%A3o,+363+-+Santa+Maria,+Uberaba+-+MG,+38022-250/@-19.756559,-47.9513404,17z/data=!3m1!4b1!4m6!3m5!1s0x94bad04e1e86678b:0x21f6f30c6a82d8ad!8m2!3d-19.756559!4d-47.9513404!16s%2Fg%2F11vkdc98f0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div
      className="glass-button rounded-2xl overflow-hidden opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Map Header */}
      <a
        href={googleMapsDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 border-b border-white/10 hover:bg-white/10 transition-colors"
      >
        <img 
          src={mapsIcon} 
          alt="Maps" 
          className="w-8 h-8 rounded-lg"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">Nossa Localização</p>
          <p className="text-xs text-white/70 truncate">{address}</p>
        </div>
        <svg
          className="w-5 h-5 text-white/70 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Map Embed */}
      <div className="relative w-full h-40">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8!2d-47.9319!3d-19.7476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ0JzUxLjQiUyA0N8KwNTUnNTQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1&q=${encodedAddress}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] contrast-[1.1]"
        />
      </div>
    </div>
  );
};

export default MapWidget;
