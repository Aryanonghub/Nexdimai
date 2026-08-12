"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Smooth-scrolls to any in-page hash target without letting the browser append
// the #hash to the URL (native <a href="#..."> navigation does that by
// default). Falls through to default behavior for anything that isn't an
// in-page hash link (cross-page links, or a hash with no matching element
// here — e.g. "/#about" clicked from a page that doesn't have #about).
//
// #about / #contact (and similar) can also live inside the home page's pinned
// GSAP stack, where most of the time they're off-screen (opacity 0) even
// though a plain scroll would land on them — so we jump to that panel's
// labeled scroll position instead of just scrolling the element into view.
export function scrollToAnchor(e: { preventDefault: () => void }, href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;
  const id = href.slice(hashIndex + 1);
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();

  const stackScroll = target.closest("[data-stack-scroll]");
  if (stackScroll instanceof HTMLElement) {
    const st = ScrollTrigger.getAll().find((t) => t.trigger === stackScroll && t.pin);
    const tl = st?.animation as gsap.core.Timeline | undefined;
    if (st && tl && id in tl.labels) {
      const progress = tl.labels[id] / tl.duration();
      const y = st.start + progress * (st.end - st.start);
      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
