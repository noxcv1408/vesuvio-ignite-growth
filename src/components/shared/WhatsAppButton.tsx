import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/393314054922';

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatta con noi su WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">Chatta con noi su WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
