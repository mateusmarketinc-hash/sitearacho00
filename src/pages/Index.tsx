import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAppMedia } from "@/components/AppMedia";
import OpeningMoneyRain from "@/components/OpeningMoneyRain";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import MoneyRain from "@/components/MoneyRain";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import linksIcon from "@/assets/links-dollar.png.asset.json";
import arachnoLogo from "@/assets/arachno-logo.png.asset.json";
import instagramIcon from "@/assets/instagram-icon.png";

const Index = () => {
  const navigate = useNavigate();
  const [showMoneyRain, setShowMoneyRain] = useState(false);
  const { entered, contentReady: showContent, enter: enterSite, reveal } = useAppMedia();
  const showOpening = !entered;
  const reducedMotion = useReducedMotion();

  const handleSiteClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setShowMoneyRain(true);
  }, []);

  const handleMoneyRainComplete = useCallback(() => {
    navigate("/site");
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Money Rain Effect */}
      <MoneyRain isActive={showMoneyRain} onComplete={handleMoneyRainComplete} />

      <AnimatePresence onExitComplete={reveal}>
        {showOpening && (
          <motion.div
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.12 }}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
          >
            <OpeningMoneyRain />
            <Button
              variant="ghost"
              onClick={enterSite}
              aria-label="Entrar no site e ativar música"
              className="relative z-10 h-auto w-auto max-w-[85vw] p-0 hover:bg-transparent focus-visible:ring-ring"
            >
              <motion.img
                src={arachnoLogo.url}
                alt="arachno"
                className="h-72 w-72 sm:h-96 sm:w-96 object-contain"
                initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      {showContent && (
      <div className="relative z-10 min-h-screen flex flex-col w-full max-w-md mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -20 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.1, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* Links Section */}
        <main className="flex flex-col gap-3 mt-auto mb-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
          >
            <LinkButton
              to="/dm"
              iconImage={whatsappIcon}
              label="Fique Rico Agora!"
              noAnimation
              goldText
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
          >
            <LinkButton
              href="https://www.instagram.com/arachno00/"
              iconImage={instagramIcon}
              label="Instagram"
              noAnimation
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.95, ease: "easeOut" }}
          >
            <LinkButton
              to="/site"
              iconImage={linksIcon.url}
              label="Links"
              goldText
              noAnimation
              onClick={handleSiteClick}
            />
          </motion.div>
        </main>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 1.1, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>
      </div>
      )}
    </div>
  );
};

export default Index;