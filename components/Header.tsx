"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { scrollToAnchor } from "@/lib/scrollToAnchor";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavLink = { href: string; label: string };
type DropdownCard = { href: string; label: string; description: string; icon: string };
type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; cards: DropdownCard[] };

const BTN = "inline-flex items-center justify-center gap-2 rounded-full px-6.5 py-3.25 font-sans text-[0.92rem] font-semibold cursor-pointer border border-transparent transition-[transform,background,border-color,color] duration-180 ease-in-out [&_svg]:size-4";
const BTN_PRIMARY = "bg-text text-bg hover:bg-btn-primary-hover hover:-translate-y-px";

const PRODUCT_CARDS: DropdownCard[] = [
  {
    href: "/velmora",
    label: "Voice Agent",
    description: "Real outbound calls, held like a natural conversation.",
    icon: "icon-mic",
  },
  {
    href: "/velmora#analytics",
    label: "Call Record & Analytics",
    description: "Every call comes back as a transcript, outcome, and next steps.",
    icon: "icon-chart",
  },
  {
    href: "/velmora#capabilities",
    label: "Capabilities",
    description: "What Velmora handles on every call, from dialing to reporting.",
    icon: "icon-check",
  },
];

const HOME_LINKS: NavItem[] = [
  { type: "dropdown", label: "Product", cards: PRODUCT_CARDS },
  { type: "link", href: "#what-we-do", label: "Services" },
  { type: "link", href: "#about", label: "About" },
  { type: "link", href: "#contact", label: "Contact" },
];

const VELMORA_LINKS: NavItem[] = [
  { type: "link", href: "#use-cases", label: "Use cases" },
  { type: "link", href: "#how", label: "How it works" },
  { type: "link", href: "#analytics", label: "Analytics" },
  { type: "link", href: "#capabilities", label: "Capabilities" },
  { type: "link", href: "#contact", label: "Contact" },
];

export default function Header({ variant }: { variant: "home" | "velmora" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const links = variant === "home" ? HOME_LINKS : VELMORA_LINKS;
  const ctaLabel = variant === "home" ? "Contact us" : "Request a demo";

  function closeMenus() {
    setOpen(false);
    setDropdownOpen(false);
  }

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  function scheduleCloseDropdown() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/78 backdrop-blur-[10px] border-b transition-[border-color] duration-220 ease-in-out ${
        scrolled ? "border-border-subtle" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-8 max-[600px]:px-5 flex items-center justify-between py-4.5">
        {variant === "home" ? (
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif font-medium text-[1.4rem] text-text"
            aria-label="Nexdim AI home"
          >
            <svg viewBox="0 0 1285 826" aria-hidden="true" className="size-9">
              <use href="#nexdim-mark" />
            </svg>
            Nexdim AI
          </Link>
        ) : (
          <div className="flex items-center gap-3.5">
            <Link
              href="/velmora"
              className="flex items-center gap-2.5 font-serif font-medium text-[1.4rem] text-text"
              aria-label="Velmora home"
            >
              <Image src="/velmora.png" alt="Velmora" width={40} height={40} priority className="size-10 object-contain" />
              Velmora
            </Link>
          </div>
        )}

        <NavigationMenu className="hidden min-[901px]:flex" aria-label="Primary">
          <NavigationMenuList>
            {links.map((item) =>
              item.type === "dropdown" ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="grid grid-cols-2 gap-1 w-[520px] max-w-[calc(100vw-32px)] p-2.5">
                    {item.cards.map((card) => (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="flex items-start justify-between gap-2.5 rounded-xl p-3.5 transition-colors duration-140 ease-in-out hover:bg-surface-elevated last:odd:col-span-2"
                      >
                        <div>
                          <h4 className="font-sans text-[0.94rem] font-semibold text-text mb-1">
                            {card.label}
                          </h4>
                          <p className="text-[0.82rem] text-text-soft mb-0">{card.description}</p>
                        </div>
                        <svg
                          className="size-4.5 text-text-muted shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <use href={`#${card.icon}`} />
                        </svg>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                    onClick={(e) => scrollToAnchor(e, item.href)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <nav
          className={`hidden ${open ? "max-[900px]:flex" : ""} max-[900px]:absolute max-[900px]:top-full max-[900px]:inset-x-0 max-[900px]:flex-col max-[900px]:items-start max-[900px]:bg-surface max-[900px]:border-b max-[900px]:border-border-subtle max-[900px]:py-2 text-[0.94rem] font-medium`}
          aria-label="Primary"
        >
          {links.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div
                  className="relative w-full border-b border-border-subtle"
                  ref={dropdownRef}
                  key={item.label}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-1 bg-transparent border-0 px-8 py-3.5 font-sans text-[0.94rem] font-medium text-text-soft cursor-pointer hover:text-text transition-colors duration-160 ease-in-out"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((o) => !o)}
                  >
                    {item.label}
                    <svg aria-hidden="true" className="hidden">
                      <use href="#icon-arrow" />
                    </svg>
                  </button>
                  <div
                    className={`${dropdownOpen ? "flex" : "hidden"} w-full flex-col bg-bg-soft pb-2`}
                  >
                    {item.cards.map((card) => (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="flex items-start justify-between gap-2.5 py-2.5 pr-8 pl-11 transition-colors duration-140 ease-in-out hover:bg-surface-elevated"
                        onClick={closeMenus}
                      >
                        <div>
                          <h4 className="font-sans text-[0.94rem] font-semibold text-text mb-1">
                            {card.label}
                          </h4>
                          <p className="text-[0.82rem] text-text-soft mb-0">{card.description}</p>
                        </div>
                        <svg
                          className="size-4.5 text-text-muted shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <use href={`#${card.icon}`} />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="w-full px-8 py-3.5 border-b border-border-subtle text-text-soft hover:text-text transition-colors duration-160 ease-in-out"
                onClick={(e) => {
                  scrollToAnchor(e, item.href);
                  closeMenus();
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="w-full px-8 py-3.5 border-b border-border-subtle text-text-soft hover:text-text transition-colors duration-160 ease-in-out"
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="#contact"
            className="flex items-center justify-center w-[calc(100%-64px)] mx-8 mt-3 mb-4 py-3.25 px-6.5 rounded-full bg-text text-bg font-semibold hover:bg-btn-primary-hover"
            onClick={(e) => {
              scrollToAnchor(e, "#contact");
              closeMenus();
            }}
          >
            {ctaLabel}
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className={`${BTN} ${BTN_PRIMARY} max-[900px]:hidden`}
            onClick={(e) => scrollToAnchor(e, "#contact")}
          >
            {ctaLabel}
          </a>
          <button
            className="hidden max-[900px]:flex bg-transparent border border-border-subtle rounded-lg p-2 cursor-pointer text-text"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true" className="size-5">
              <use href="#icon-menu" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
