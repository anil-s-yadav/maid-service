
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919819122200"; // WhatsApp number from header
    const message = "Hi! I'm interested in your maid services. Can you help me?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};
