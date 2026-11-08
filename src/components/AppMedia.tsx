import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundVideo from "@/assets/arachno-background-updated.mp4.asset.json";

type MediaState = {
  entered: boolean;
  contentReady: boolean;
  enter: () => void;
  reveal: () => void;
};

const MediaContext = createContext<MediaState | undefined>(undefined);

export function useAppMedia() {
  const context = useContext(MediaContext);
  if (!context) throw new Error("Media provider is required");
  return context;
}

export default function AppMedia({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const playWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 1;
    video.muted = false;
    setMuted(false);
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
    });
  }, []);

  const enter = useCallback(() => {
    playWithSound();
    setEntered(true);
  }, [playWithSound]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.muted) playWithSound();
    else {
      video.muted = true;
      setMuted(true);
    }
  };

  return (
    <MediaContext.Provider value={{ entered, contentReady, enter, reveal: () => setContentReady(true) }}>
      <motion.div
        className="fixed inset-0 pointer-events-none media-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded && location.pathname === "/" ? 1 : 0, filter: contentReady ? "blur(0px)" : "blur(18px)", scale: contentReady ? 1 : 1.06 }}
        transition={{ duration: reducedMotion ? 0 : 1, ease: "easeOut" }}
      >
        <video ref={videoRef} onLoadedData={() => setLoaded(true)} autoPlay muted={muted} loop playsInline className="w-full h-full object-cover">
          <source src={backgroundVideo.url} type="video/mp4" />
        </video>
      </motion.div>
      <div className="relative">{children}</div>
      {entered && (contentReady || location.pathname !== "/") && (
        <Button variant="ghost" size="icon" onClick={toggleSound}
          className="media-sound-control fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity"
          aria-label={muted ? "Ativar som" : "Silenciar"} title={muted ? "Ativar música" : "Silenciar música"}>
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      )}
    </MediaContext.Provider>
  );
}