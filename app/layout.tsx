import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/IconSprite";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexdim AI — Applied AI agents for business",
  description:
    "Nexdim AI designs and integrates AI agents around the work businesses actually do — plus Velmora, our voice-agent calling platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(fraunces.variable, inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="m-0 bg-bg text-text text-base leading-[1.6] antialiased [font-family:var(--font-inter),sans-serif]">
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
