import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

const FAQItem = ({ question, answer, delay = 0 }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="glass-button rounded-2xl overflow-hidden opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/70 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-white/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
