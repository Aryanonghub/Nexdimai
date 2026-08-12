"use client";

import Link from "next/link";
import Image from "next/image";
import { scrollToAnchor } from "@/lib/scrollToAnchor";
import FooterWordmark from "./FooterWordmark";

type FooterLink = { href: string; label: string };

const HOME_PRODUCT_LINKS: FooterLink[] = [
  { href: "/velmora", label: "Voice Agent" },
  { href: "/velmora#analytics", label: "Call Record & Analytics" },
  { href: "/velmora#capabilities", label: "Capabilities" },
];
const HOME_COMPANY_LINKS: FooterLink[] = [
  { href: "#what-we-do", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
const VELMORA_PRODUCT_LINKS: FooterLink[] = [
  { href: "#use-cases", label: "Use cases" },
  { href: "#how", label: "How it works" },
  { href: "#analytics", label: "Analytics" },
  { href: "#capabilities", label: "Capabilities" },
];
const VELMORA_COMPANY_LINKS: FooterLink[] = [
  { href: "/", label: "Nexdim AI" },
  { href: "/#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const FOOTER_LINK_CLASS =
  "text-[0.92rem] text-white/60 transition-colors duration-160 ease-in-out hover:text-white";

function FooterNavLink({ href, label }: FooterLink) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={FOOTER_LINK_CLASS} onClick={(e) => scrollToAnchor(e, href)}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={FOOTER_LINK_CLASS} onClick={(e) => scrollToAnchor(e, href)}>
      {label}
    </Link>
  );
}

export default function Footer({ variant }: { variant: "home" | "velmora" }) {
  const productLinks = variant === "velmora" ? VELMORA_PRODUCT_LINKS : HOME_PRODUCT_LINKS;
  const companyLinks = variant === "velmora" ? VELMORA_COMPANY_LINKS : HOME_COMPANY_LINKS;

  return (
    <footer className="relative bg-[#0a0d0c] text-white pt-18 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-8 max-[600px]:px-5 relative z-1 flex justify-between gap-14 flex-wrap pb-12 max-[600px]:flex-col">
        <div className="max-w-[380px]">
          <div className="flex items-center gap-5 mb-4.5">
            {variant === "velmora" ? (
              <Link
                href="/velmora"
                className="flex items-center gap-2.5 font-serif font-medium text-[1.2rem] text-white"
                aria-label="Velmora home"
              >
                <Image src="/velmora.png" alt="Velmora" width={40} height={40} className="size-10 object-contain" />
                Velmora
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2.5 font-serif font-medium text-[1.2rem] text-white"
                aria-label="Nexdim AI home"
              >
                <svg viewBox="0 0 1285 826" aria-hidden="true" className="size-9">
                  <use href="#nexdim-mark" />
                </svg>
                Nexdim AI
              </Link>
            )}
          </div>
          {variant === "velmora" ? (
            <p className="text-white/60 text-[0.92rem] mb-0">
              Velmora places real outbound calls, holds a natural conversation, and reports back
              with a transcript, outcome, and next steps.
            </p>
          ) : (
            <p className="text-white/60 text-[0.92rem] mb-0">
              Nexdim AI designs and integrates AI agents around the work businesses actually do —
              plus Velmora, our voice-agent calling platform.
            </p>
          )}
        </div>

        <div className="flex gap-18 flex-wrap">
          <div>
            <h4 className="text-[0.9rem] font-semibold text-white mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <FooterNavLink {...link} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.9rem] font-semibold text-white mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterNavLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-8 max-[600px]:px-5 relative z-1 flex justify-between py-6 border-t border-white/10 text-[0.82rem] text-white/50 flex-wrap gap-3">
        <span>© 2026 Nexdim AI. All rights reserved.</span>
        <span>support@nexdim.com</span>
      </div>

      <FooterWordmark text={variant === "velmora" ? "Velmora" : "Nexdim AI"} />
    </footer>
  );
}
