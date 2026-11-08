import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import LogoRain from "@/components/LogoRain";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import dmBackground from "@/assets/arachno-dm.jpg.asset.json";

const DM = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={dmBackground.url} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo Rain Background - between bg and content */}
      <div className="absolute inset-0 z-[1]">
        <LogoRain />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col w-full max-w-md mx-auto px-5">
        {/* Back Button */}
        <BackButton />

        <Header />

        {/* Links Section */}
        <main className="flex flex-col gap-3 mt-auto mb-2">
          <LinkButton
            href="https://api.whatsapp.com/send?phone=5554992733864&text=Olá%21%20Quero%20saber%20mais%20sobre%20a%20mentoria%20individual%20de%20CPA%20com%20Baú%20e%20Extração."
            iconImage={whatsappIcon}
            label="Chamar DM"
            delay={150}
            blueText
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DM;