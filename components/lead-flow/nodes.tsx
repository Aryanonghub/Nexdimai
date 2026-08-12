"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import {
  UserPlus,
  Megaphone,
  Clock,
  CalendarClock,
  PhoneCall,
  AudioLines,
  CheckCircle2,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  PhoneForwarded,
  PhoneMissed,
  RotateCcw,
  FileText,
  Mic2,
} from "lucide-react";
import { NodeShell, StatusPill, CountBadge, Waveform, MiniStepper, PulseRing, MetaRow } from "./StageCard";
import { ANALYSIS_STEPS, OUTCOME_COPY } from "./data";
import type { StageStatus, SampleLead, StageId, OutcomeKind } from "./types";

export interface FlowNodeData {
  status: StageStatus;
  view: "campaign" | "individual";
  count: number;
  lead: SampleLead | null;
  onOpen: (stageId: StageId) => void;
  [key: string]: unknown;
}

type Props = NodeProps & { data: FlowNodeData };

const HANDLE_CLS = "!bg-border-subtle !size-2 !border-0";
const H_IN = <Handle type="target" position={Position.Left} className={HANDLE_CLS} />;
const H_OUT = <Handle type="source" position={Position.Right} className={HANDLE_CLS} />;
// Nodes with more than one handle of the same type need explicit, unique ids
// so edges can say exactly which one they connect to.
const H_OUT_RIGHT = <Handle type="source" id="right" position={Position.Right} className={HANDLE_CLS} />;
const H_OUT_BOTTOM = <Handle type="source" id="bottom" position={Position.Bottom} className={HANDLE_CLS} />;
const H_IN_TOP = <Handle type="target" position={Position.Top} className={HANDLE_CLS} />;
const H_OUT_TOP = <Handle type="source" position={Position.Top} className={HANDLE_CLS} />;
const H_IN_LEFT = <Handle type="target" id="left" position={Position.Left} className={HANDLE_CLS} />;
const H_IN_BOTTOM = <Handle type="target" id="bottom" position={Position.Bottom} className={HANDLE_CLS} />;

export function LeadAddedNode({ data }: Props) {
  const { status, view, count, lead, onOpen } = data;
  return (
    <>
      {H_OUT}
      <NodeShell icon={UserPlus} title="Lead Added" status={status} active={status === "active"} onClick={() => onOpen("lead-added")}>
        {view === "individual" && lead ? (
          <>
            <MetaRow label="Name" value={lead.name} />
            <MetaRow label="Phone" value={lead.phone} />
            <MetaRow label="Source" value={lead.source} />
            <MetaRow label="Added" value={lead.addedAt} />
          </>
        ) : (
          <CountBadge count={count} label="leads added" />
        )}
      </NodeShell>
    </>
  );
}

export function CampaignNode({ data }: Props) {
  const { status, view, count, lead, onOpen } = data;
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell icon={Megaphone} title="Campaign" status={status} active={status === "active"} onClick={() => onOpen("campaign")}>
        <MetaRow label="Campaign" value={lead && view === "individual" ? lead.campaign : "Q3 Renewal Outreach"} />
        <MetaRow label="Status" value="Running" />
        {view === "campaign" && <MetaRow label="Leads" value={count.toLocaleString()} />}
        <div className="mt-1 h-1.5 w-full rounded-full bg-surface-elevated overflow-hidden">
          <div className="h-full rounded-full bg-accent" style={{ width: "75%" }} />
        </div>
      </NodeShell>
    </>
  );
}

export function PendingNode({ data, id }: Props) {
  const { status, view, count, onOpen } = data;
  const isRetry = id === "pending-retry";
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell
        icon={Clock}
        title={isRetry ? "Pending Retry" : "Pending"}
        status={status}
        active={status === "active"}
        onClick={() => onOpen(id as StageId)}
      >
        <MetaRow label="Next run" value="in 42s" />
        <MetaRow label="Queue" value={view === "campaign" ? `${count} waiting` : "In queue"} />
        <div className="flex gap-1 mt-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-accent/50 animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </NodeShell>
    </>
  );
}

export function ScheduledNode({ data }: Props) {
  const { status, view, count, onOpen } = data;
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell icon={CalendarClock} title="Call Scheduled" status={status} active={status === "active"} onClick={() => onOpen("scheduled")}>
        <MetaRow label="Scheduled" value="10:32 AM" />
        <MetaRow label="Priority" value="Normal" />
        {view === "campaign" ? <MetaRow label="In queue" value={count} /> : <MetaRow label="Retry #" value="0" />}
      </NodeShell>
    </>
  );
}

export function CallingNode({ data, id }: Props) {
  const { status, view, count, lead, onOpen } = data;
  const isRetry = id === "calling-again";
  const content = (
    <NodeShell
      icon={PhoneCall}
      title={isRetry ? "Calling Again" : "Calling"}
      status={status}
      active={status === "active"}
      onClick={() => onOpen(id as StageId)}
    >
      <MetaRow label="Phone" value={lead?.phone ?? "+91 9•••• XXXXX"} />
      <MetaRow label="Agent" value={lead?.agent ?? "Velmora"} />
      <MetaRow label="Connection" value={status === "active" ? "Connecting…" : "Idle"} />
      {view === "campaign" && <MetaRow label="Active calls" value={count} />}
    </NodeShell>
  );
  return (
    <>
      {H_IN}
      {isRetry ? H_OUT_TOP : H_OUT_RIGHT}
      {!isRetry && H_OUT_BOTTOM}
      {status === "active" ? <PulseRing>{content}</PulseRing> : content}
    </>
  );
}

export function ConversationNode({ data }: Props) {
  const { status, view, count, lead, onOpen } = data;
  return (
    <>
      {H_IN_LEFT}
      {H_IN_BOTTOM}
      {H_OUT}
      <button
        type="button"
        onClick={() => onOpen("conversation")}
        style={{ width: 320 }}
        className={`text-left cursor-pointer rounded-2xl border bg-gradient-to-b from-accent-tint to-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out hover:shadow-[0_16px_40px_-16px_rgba(46,107,79,0.4)] hover:-translate-y-0.5 ${
          status === "active" ? "border-accent shadow-[0_0_0_4px_var(--accent-tint)]" : "border-border-subtle"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-8 rounded-lg bg-accent text-white">
              <AudioLines className="size-4" />
            </span>
            <span className="text-[0.92rem] font-semibold text-text">AI Conversation</span>
          </div>
          <StatusPill status={status} />
        </div>

        <div className="flex items-center justify-between text-[0.72rem] text-text-muted mb-2 font-mono uppercase tracking-[0.05em]">
          <span>Telephony</span>
          <span>→</span>
          <span>AI Agent</span>
          <span>→</span>
          <span>Customer</span>
        </div>

        <Waveform active={status === "active"} />

        <div className="mt-3 flex flex-col gap-1.5">
          <MetaRow label="Agent" value={lead?.agent ?? "Velmora — Renewals"} />
          <MetaRow label="Customer" value={lead?.name ?? "Live customer"} />
          <MetaRow label="Duration" value={status === "active" ? "00:47" : "—"} />
          {view === "campaign" && <MetaRow label="In conversation" value={count} />}
        </div>

        <div className="mt-3 rounded-lg bg-surface border border-border-subtle p-2.5 text-[0.76rem] text-text-soft italic">
          {status === "active"
            ? "“…and would Thursday afternoon work for a follow-up call?”"
            : "Transcript will appear once the call connects."}
        </div>
      </button>
    </>
  );
}

export function CompletedNode({ data }: Props) {
  const { status, view, count, onOpen } = data;
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell icon={CheckCircle2} title="Call Completed" status={status} active={status === "active"} onClick={() => onOpen("completed")}>
        <MetaRow label="Duration" value="04:12" />
        <MetaRow label="Ended" value="10:41 AM" />
        <MetaRow label="Recording" value="Available" />
        {view === "campaign" && <MetaRow label="Completed today" value={count} />}
      </NodeShell>
    </>
  );
}

export function AnalysisNode({ data }: Props) {
  const { status, view, count, onOpen } = data;
  const activeIndex = status === "active" ? 2 : status === "completed" ? ANALYSIS_STEPS.length : 0;
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell icon={Sparkles} title="AI Analysis" status={status} active={status === "active"} width={260} onClick={() => onOpen("analysis")}>
        {view === "campaign" && <MetaRow label="Analyzing now" value={count} />}
        <div className="mt-1">
          <MiniStepper steps={ANALYSIS_STEPS} activeIndex={activeIndex} />
        </div>
      </NodeShell>
    </>
  );
}

const OUTCOME_ICON: Record<OutcomeKind, typeof ThumbsUp> = {
  interested: ThumbsUp,
  callback: PhoneForwarded,
  "not-interested": ThumbsDown,
};

export function OutcomeNode({ data, id }: Props) {
  const { view, count, onOpen } = data;
  const kind = id.replace("outcome-", "") as OutcomeKind;
  const copy = OUTCOME_COPY[kind];
  const Icon = OUTCOME_ICON[kind];
  const tint =
    kind === "interested"
      ? "from-success-tint to-surface border-success/30"
      : kind === "not-interested"
        ? "from-red-50 to-surface border-red-200"
        : "from-accent-tint to-surface border-accent/30";
  const iconTint =
    kind === "interested" ? "bg-success text-white" : kind === "not-interested" ? "bg-red-500 text-white" : "bg-accent text-white";

  return (
    <>
      {H_IN}
      <button
        type="button"
        onClick={() => onOpen(id as StageId)}
        style={{ width: 270 }}
        className={`text-left cursor-pointer rounded-2xl border bg-gradient-to-b p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out hover:shadow-[0_12px_32px_-16px_rgba(46,107,79,0.3)] hover:-translate-y-0.5 ${tint}`}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <span className={`flex items-center justify-center size-8 rounded-lg ${iconTint}`}>
            <Icon className="size-4" />
          </span>
          <span className="text-[0.92rem] font-semibold text-text">{copy.label}</span>
        </div>
        <MetaRow label="Confidence" value={copy.confidence} />
        {view === "campaign" && <MetaRow label="Leads" value={count} />}
        <p className="text-[0.76rem] text-text-soft mt-1.5 leading-snug">{copy.reason}</p>
        {kind === "callback" && "callback" in copy && (
          <div className="mt-2 rounded-lg bg-surface border border-border-subtle p-2 text-[0.72rem]">
            <MetaRow label="Callback" value={copy.callback.date} />
          </div>
        )}
      </button>
    </>
  );
}

export function UnsuccessfulNode({ data }: Props) {
  const { status, view, count, lead, onOpen } = data;
  const reasons = ["No Answer", "Voicemail", "Busy", "Call Failed"];
  return (
    <>
      {H_IN_TOP}
      {H_OUT}
      <NodeShell icon={PhoneMissed} title="Unsuccessful Attempt" status={status === "active" ? "error" : status} active={false} onClick={() => onOpen("unsuccessful")}>
        <div className="flex flex-wrap gap-1 mb-1">
          {reasons.map((r) => (
            <span
              key={r}
              className={`text-[0.62rem] font-mono uppercase tracking-[0.04em] px-1.5 py-0.5 rounded ${
                lead?.retryReason === r ? "bg-red-100 text-red-700" : "bg-surface-elevated text-text-muted"
              }`}
            >
              {r}
            </span>
          ))}
        </div>
        {view === "campaign" && <MetaRow label="This week" value={count} />}
      </NodeShell>
    </>
  );
}

export function RetryScheduledNode({ data }: Props) {
  const { status, view, count, onOpen } = data;
  return (
    <>
      {H_IN}
      {H_OUT}
      <NodeShell icon={RotateCcw} title="Retry Scheduled" status={status} active={status === "active"} onClick={() => onOpen("retry-scheduled")}>
        <MetaRow label="Attempt" value="#2" />
        <MetaRow label="Next retry" value="in 30 min" />
        {view === "campaign" && <MetaRow label="Scheduled" value={count} />}
      </NodeShell>
    </>
  );
}

export function CallingAgainMergeLabel() {
  return (
    <div className="rounded-full bg-surface border border-border-subtle px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-[0.05em] text-text-muted shadow-sm">
      merges into conversation on pickup
    </div>
  );
}

export const nodeTypes = {
  "lead-added": LeadAddedNode,
  campaign: CampaignNode,
  pending: PendingNode,
  scheduled: ScheduledNode,
  calling: CallingNode,
  conversation: ConversationNode,
  completed: CompletedNode,
  analysis: AnalysisNode,
  "outcome-interested": OutcomeNode,
  "outcome-callback": OutcomeNode,
  "outcome-not-interested": OutcomeNode,
  unsuccessful: UnsuccessfulNode,
  "retry-scheduled": RetryScheduledNode,
  "pending-retry": PendingNode,
  "calling-again": CallingNode,
};

// unused imports kept intentionally minimal; re-export for drawer reuse
export { FileText, Mic2 };
