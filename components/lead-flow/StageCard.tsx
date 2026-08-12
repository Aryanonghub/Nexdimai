"use client";

import { type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { StageStatus } from "./types";

const STATUS_STYLES: Record<StageStatus, { pill: string; ring: string; dot: string; label: string }> = {
  completed: {
    pill: "bg-success-tint text-success",
    ring: "border-success/30",
    dot: "bg-success",
    label: "Completed",
  },
  active: {
    pill: "bg-accent text-white",
    ring: "border-accent shadow-[0_0_0_4px_var(--accent-tint)]",
    dot: "bg-white",
    label: "Active",
  },
  pending: {
    pill: "bg-surface-elevated text-text-muted",
    ring: "border-border-subtle",
    dot: "bg-text-muted",
    label: "Pending",
  },
  error: {
    pill: "bg-red-50 text-red-600",
    ring: "border-red-200",
    dot: "bg-red-500",
    label: "Error",
  },
  idle: {
    pill: "bg-surface-elevated text-text-muted",
    ring: "border-border-subtle",
    dot: "bg-text-muted",
    label: "Idle",
  },
};

export function StatusPill({ status, label }: { status: StageStatus; label?: string }) {
  const s = STATUS_STYLES[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-mono uppercase tracking-[0.06em] ${s.pill}`}>
      <span className={`size-1.5 rounded-full ${s.dot} ${status === "active" ? "animate-pulse" : ""}`} />
      {label ?? s.label}
    </span>
  );
}

export function CountBadge({ count, label }: { count: number; label: string }) {
  return (
    <div className="text-right shrink-0">
      <div className="text-[1.05rem] font-semibold text-text leading-none">{count.toLocaleString()}</div>
      <div className="text-[0.62rem] text-text-muted uppercase tracking-[0.06em] mt-1">{label}</div>
    </div>
  );
}

export function Waveform({ active = true, bars = 12 }: { active?: boolean; bars?: number }) {
  return (
    <div className="flex items-center gap-[3px] h-6">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-accent ${active ? "animate-waveform" : ""}`}
          style={{
            height: `${40 + ((i * 37) % 60)}%`,
            animationDelay: `${i * 70}ms`,
            animationDuration: `${700 + (i % 4) * 120}ms`,
            opacity: active ? 1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

export function MiniStepper({ steps, activeIndex }: { steps: string[]; activeIndex: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, i) => {
        const done = i < activeIndex;
        const active = i === activeIndex;
        return (
          <div key={step} className="flex items-center gap-2 text-[0.72rem]">
            <span
              className={`size-3.5 shrink-0 rounded-full border flex items-center justify-center ${
                done
                  ? "bg-success border-success"
                  : active
                    ? "border-accent"
                    : "border-border-subtle"
              }`}
            >
              {active && <span className="size-1.5 rounded-full bg-accent animate-pulse" />}
            </span>
            <span className={done ? "text-text-soft" : active ? "text-text font-medium" : "text-text-muted"}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function PulseRing({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex">
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      <span className="relative">{children}</span>
    </span>
  );
}

export function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[0.78rem]">
      <span className="text-text-muted">{label}</span>
      <span className="text-text font-medium text-right truncate">{value}</span>
    </div>
  );
}

export function NodeShell({
  icon: Icon,
  title,
  status,
  active,
  width = 250,
  onClick,
  onHover,
  onHoverEnd,
  accent = false,
  children,
}: {
  icon: LucideIcon;
  title: string;
  status: StageStatus;
  active?: boolean;
  width?: number;
  onClick?: () => void;
  onHover?: () => void;
  onHoverEnd?: () => void;
  accent?: boolean;
  children?: ReactNode;
}) {
  const s = STATUS_STYLES[status];
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      style={{ width }}
      className={`group text-left cursor-pointer rounded-2xl border bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out hover:shadow-[0_12px_32px_-16px_rgba(46,107,79,0.35)] hover:-translate-y-0.5 ${
        active ? s.ring : "border-border-subtle"
      } ${accent ? "bg-gradient-to-b from-accent-tint to-surface" : ""}`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center justify-center size-8 rounded-lg shrink-0 ${
              status === "completed"
                ? "bg-success-tint text-success"
                : status === "error"
                  ? "bg-red-50 text-red-600"
                  : status === "active"
                    ? "bg-accent text-white"
                    : "bg-surface-elevated text-text-muted"
            }`}
          >
            <Icon className="size-4" />
          </span>
          <span className="text-[0.92rem] font-semibold text-text">{title}</span>
        </div>
      </div>
      <div className="mb-2.5">
        <StatusPill status={status} />
      </div>
      <div className="flex flex-col gap-1.5">{children}</div>
    </button>
  );
}
