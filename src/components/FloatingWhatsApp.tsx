import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "+919999999999"; // This would come from env in production
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hello Dr. Faiyaz Ahmad, I would like to schedule a consultation.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl medical-transition"
        aria-label="Contact via WhatsApp"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;