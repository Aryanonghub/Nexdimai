"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Relative time units (mapped proportionally onto the real scroll distance below).
const HOLD = 1; // each panel sits fully visible, static, for this long
const TRANSITION = 0.6; // then crossfades to the next panel over this long
const SCROLL_PER_UNIT = 1.1; // viewport-heights of scroll per unit — raise to slow the whole thing down

export default function StackedFeatureScroll({ children }: { children: ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // React Strict Mode (default in the App Router) double-invokes this effect in
    // dev, and Fast Refresh can re-run it again on every edit. If an earlier run's
    // ScrollTrigger wasn't fully torn down, its scrubbed timeline keeps animating
    // independently of the new one — two timelines both driving the same panels'
    // opacity is exactly what produces "multiple cards visible at once" glitches.
    // Kill anything already attached to this exact trigger before creating a new one.
    ScrollTrigger.getAll()
      .filter((st) => st.trigger === container)
      .forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-stack-panel]", container);
        if (panels.length < 2) return;

        // Deterministic initial state, set in one call so there's no frame where
        // panel visibility/z-index is ambiguous: only panel 0 is visible+stacked
        // on top; every other panel is fully hidden (autoAlpha also flips
        // visibility, so hidden panels can't intercept clicks or show stray text).
        panels.forEach((panel, i) => {
          gsap.set(panel, {
            autoAlpha: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 40,
            zIndex: i === 0 ? 1 : 0,
          });
        });

        const totalUnits = panels.length * HOLD + (panels.length - 1) * TRANSITION;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalUnits * window.innerHeight * SCROLL_PER_UNIT}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Each panel gets a HOLD-length resting window (fully visible, static —
        // the label marks its midpoint) followed by a TRANSITION-length crossfade:
        // the outgoing panel fully hides, then (after a brief blank beat) the
        // incoming one reveals — never both at once, so text never overlaps.
        // zIndex is bumped for the incoming panel right as it starts revealing and
        // dropped for the outgoing one right as it finishes hiding, so stacking
        // order is always explicit rather than left to DOM order.
        let cursor = 0;
        panels.forEach((panel, i) => {
          const id = panel.querySelector<HTMLElement>("[id]")?.id ?? `panel-${i}`;
          tl.addLabel(id, cursor + HOLD / 2);
          cursor += HOLD;

          if (i === panels.length - 1) return;
          const next = panels[i + 1];
          const outDur = TRANSITION * 0.46;
          const inDur = TRANSITION * 0.46;
          const outStart = cursor;
          const inStart = cursor + TRANSITION - inDur;

          tl.set(next, { zIndex: 1 }, outStart)
            .to(panel, { autoAlpha: 0, y: -40, duration: outDur, ease: "power1.in" }, outStart)
            .set(panel, { zIndex: 0 }, outStart + outDur)
            .to(next, { autoAlpha: 1, y: 0, duration: inDur, ease: "power1.out" }, inStart);

          cursor += TRANSITION;
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      data-stack-scroll
      className="relative h-screen max-[900px]:h-auto max-[900px]:flex max-[900px]:flex-col max-[900px]:gap-10 max-[900px]:py-10"
    >
      {children.map((child, i) => (
        <div
          data-stack-panel
          key={i}
          className="absolute inset-0 flex items-center justify-center max-[900px]:static max-[900px]:opacity-100"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
