import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import WhatsAppPulseButton from "@/components/WhatsAppPulseButton";

export const metadata: Metadata = {
  title: "ASL Realtors",
  description: "ASL Realtors — your trusted partner in home renovation and interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden">
        <ErrorReporter />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
            strategy="lazyOnload"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
        )}
        {children}
        <WhatsAppPulseButton />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
