import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button variant="ghost" size="icon" aria-label="Voltar" className="absolute top-6 left-4 z-20 media-sound-control"
      onClick={() => {
        if (typeof window.history.state?.idx === "number" && window.history.state.idx > 0) navigate(-1);
        else navigate("/", { replace: true });
      }}>
      <ArrowLeft className="w-6 h-6" />
    </Button>
  );
}