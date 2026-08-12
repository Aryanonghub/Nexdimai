"use client";

import { useRef, useState, type MouseEvent } from "react";

export default function TextHoverEffect({ text }: { text: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pos, setPos] = useState({ cx: "50%", cy: "50%" });
  const [hovered, setHovered] = useState(false);
  const maskId = "text-hover-mask";
  const gradientId = "text-hover-gradient";

  function handleMouseMove(e: MouseEvent<SVGSVGElement>) {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      cx: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      cy: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 140"
      width="100%"
      height="100%"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ userSelect: "none" }}
      role="img"
      aria-label={text}
    >
      <defs>
        <radialGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          r="22%"
          cx={pos.cx}
          cy={pos.cy}
        >
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="55%" stopColor="#7c74f0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="1"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "5.5rem",
          fontWeight: 500,
          opacity: hovered ? 0.5 : 0.18,
          transition: "opacity 400ms ease",
        }}
      >
        {text}
      </text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="1"
        mask={`url(#${maskId})`}
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "5.5rem",
          fontWeight: 500,
        }}
      >
        {text}
      </text>
    </svg>
  );
}
