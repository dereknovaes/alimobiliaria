import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511900000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-wine text-wine-foreground flex items-center justify-center shadow-[var(--shadow-wine)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-wine animate-ping opacity-20" />
    </a>
  );
}
