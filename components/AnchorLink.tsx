"use client";

import type { ReactNode } from "react";
import { scrollToAnchor } from "@/lib/scrollToAnchor";

export default function AnchorLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={(e) => scrollToAnchor(e, href)}>
      {children}
    </a>
  );
}
