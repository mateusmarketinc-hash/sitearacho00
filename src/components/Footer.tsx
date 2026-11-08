const Footer = () => {
  return (
    <footer className="mt-auto pt-8 pb-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
      <div className="flex items-center justify-center gap-4 text-sm text-white/70">
        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Política de Privacidade
        </a>
        <span className="text-white/30">•</span>
        <a
          href="#"
          className="hover:text-white transition-colors duration-200"
        >
          Termos de Uso
        </a>
      </div>
      <p className="mt-4 text-center text-xs text-white/50">
        © 2025 Todos os direitos reservados.
      </p>
      <p className="mt-2 text-center text-xs text-white/50">
        feito por{" "}
        <a 
          href="https://www.instagram.com/mateus_npu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          @mateus
        </a>
      </p>
    </footer>
  );
};

export default Footer;
