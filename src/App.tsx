import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Site from "./pages/Site";
import DM from "./pages/DM";
import NotFound from "./pages/NotFound";
import AppMedia from "./components/AppMedia";

declare global {
  interface Window {
    twemoji: {
      parse: (element: HTMLElement | Document, options?: object) => void;
    };
  }
}

const queryClient = new QueryClient();

const TwemojiParser = () => {
  const location = useLocation();

  useEffect(() => {
    // Parse emojis after route change - using Apple emoji style
    const timer = setTimeout(() => {
      if (window.twemoji) {
        window.twemoji.parse(document.body, {
          base: 'https://cdn.jsdelivr.net/gh/nicehorse06/emoji-datasource-apple@master/img/apple/',
          folder: '64',
          ext: '.png',
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TwemojiParser />
        <AppMedia>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/site" element={<Site />} />
          <Route path="/dm" element={<DM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AppMedia>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;