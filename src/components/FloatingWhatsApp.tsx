import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const whatsappNumber = "+919999999999"; // This would come from env in production
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hello Dr. Faiyaz Ahmad, I would like to schedule a consultation.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl medical-transition flex items-center justify-center"
      >
        <FaWhatsapp className="h-9 w-9 text-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;