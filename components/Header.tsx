"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavLink = { href: string; label: string };
type DropdownCard = { href: string; label: string; description: string; icon: string };
type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; cards: DropdownCard[] };

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
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-row">
        {variant === "home" ? (
          <Link href="/" className="brand" aria-label="Nexdim home">
            <svg viewBox="0 0 1285 826" aria-hidden="true">
              <use href="#nexdim-mark" />
            </svg>
            Nexdim
          </Link>
        ) : (
          <div className="product-brand">
            <Link href="/velmora" className="brand velmora-brand" aria-label="Velmora home">
              <Image src="/velmora.png" alt="Velmora" width={40} height={40} priority />
              Velmora
            </Link>
          </div>
        )}

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div
                  className="nav-dropdown"
                  ref={dropdownRef}
                  key={item.label}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    type="button"
                    className="nav-dropdown-trigger"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((o) => !o)}
                  >
                    {item.label}
                    <svg aria-hidden="true">
                      <use href="#icon-arrow" />
                    </svg>
                  </button>
                  <div className={`nav-mega-menu ${dropdownOpen ? "open" : ""}`}>
                    {item.cards.map((card) => (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="nav-mega-card"
                        onClick={closeMenus}
                      >
                        <div className="nav-mega-card-text">
                          <h4>{card.label}</h4>
                          <p>{card.description}</p>
                        </div>
                        <svg className="nav-mega-card-icon" aria-hidden="true">
                          <use href={`#${card.icon}`} />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return item.href.startsWith("#") ? (
              <a key={item.href} href={item.href} onClick={closeMenus}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} onClick={closeMenus}>
                {item.label}
              </Link>
            );
          })}
          <a href="#contact" className="nav-cta-mobile" onClick={closeMenus}>
            Request a demo
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary">
            Request a demo
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true">
              <use href="#icon-menu" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
