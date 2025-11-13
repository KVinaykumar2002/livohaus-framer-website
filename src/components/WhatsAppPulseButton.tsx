"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "916303822799";
const PREFILLED_MESSAGE = "Hello ASL Realtors, I'd like to chat about your services.";

export default function WhatsAppPulseButton() {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    PREFILLED_MESSAGE,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ASL Realtors on WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full border border-[#25D366]/40 opacity-80 animate-[pulse_2.8s_ease-out_infinite]" />
        <span className="absolute inset-0 rounded-full border border-[#25D366]/30 opacity-60 animate-[pulse_2.8s_ease-out_infinite_0.6s]" />
        <span className="absolute inset-0 rounded-full border border-[#25D366]/20 opacity-40 animate-[pulse_2.8s_ease-out_infinite_1.2s]" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FF4E60] shadow-[0_0_8px_rgba(255,78,96,0.6)]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </span>
      </Link>
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
