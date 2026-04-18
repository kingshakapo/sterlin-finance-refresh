import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27640806800";
const DEFAULT_MESSAGE = "Hello Sterling, I'd like to learn more about your services.";

export const WhatsAppWidget = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sterling on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-ivory shadow-[0_0_0_0_hsl(142,70%,45%/0.7)] transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
      style={{ animation: "wa-glow 2.4s ease-in-out infinite" }}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" strokeWidth={0} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-navy px-3 py-1.5 text-xs font-medium text-ivory shadow-elegant group-hover:block">
        Chat on WhatsApp
      </span>
      <style>{`
        @keyframes wa-glow {
          0%, 100% { box-shadow: 0 0 0 0 hsl(142 70% 45% / 0.55), 0 8px 24px hsl(142 70% 30% / 0.35); }
          50% { box-shadow: 0 0 0 14px hsl(142 70% 45% / 0), 0 8px 28px hsl(142 70% 30% / 0.45); }
        }
      `}</style>
    </a>
  );
};
