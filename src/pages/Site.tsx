import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import siteBackground from "@/assets/arachno-paris.jpg.asset.json";
import linksIcon from "@/assets/links-dollar.png.asset.json";

const Site = () => {
  return (
    <div className="min-h-screen relative overflow-hidden media-background">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={siteBackground.url} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col w-full max-w-md mx-auto px-5">
        {/* Back Button */}
        <BackButton />

        <Header />

        {/* Links Section */}
        <main className="flex flex-col gap-3 mt-auto mb-4">
          <LinkButton
            href="https://espancabet.com.br/bio?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafaemraoZ4Tc2s54C3aSaxt2-KoWsgD46eX-DM08KJz-cECpDfl9aPAUK1nfA_aem_Cm9J7X_22yXb4S331OvqDA"
            iconImage={linksIcon.url}
            label="💰 Links"
            goldText
            delay={150}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Site;