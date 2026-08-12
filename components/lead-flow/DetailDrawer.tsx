"use client";

import { X } from "lucide-react";
import { MetaRow } from "./StageCard";
import { ANALYSIS_STEPS, OUTCOME_COPY, STAGE_COUNTS } from "./data";
import type { StageId, SampleLead, OutcomeKind } from "./types";

const STAGE_TITLES: Record<StageId, string> = {
  "lead-added": "Lead Added",
  campaign: "Campaign",
  pending: "Pending",
  scheduled: "Call Scheduled",
  calling: "Calling",
  conversation: "AI Conversation",
  completed: "Call Completed",
  analysis: "AI Analysis",
  "outcome-interested": "Outcome — Interested",
  "outcome-callback": "Outcome — Callback",
  "outcome-not-interested": "Outcome — Not Interested",
  unsuccessful: "Unsuccessful Attempt",
  "retry-scheduled": "Retry Scheduled",
  "pending-retry": "Pending Retry",
  "calling-again": "Calling Again",
};

const STAGE_DESCRIPTIONS: Record<StageId, string> = {
  "lead-added": "A new lead enters the system and is written to the campaign's lead list.",
  campaign: "The lead is assigned to a campaign and enters that campaign's calling queue.",
  pending: "Waiting for the calling scheduler to pick this lead up on its next cron run.",
  scheduled: "A specific call time has been reserved for this lead by the scheduler.",
  calling: "The telephony layer is dialing the lead's number right now.",
  conversation: "The AI agent is holding a live two-way conversation with the customer.",
  completed: "The call has ended. Recording and transcript are being finalized.",
  analysis: "Post-call AI processing is extracting intent, sentiment, and outcome from the transcript.",
  "outcome-interested": "The AI classified this lead as interested based on the conversation.",
  "outcome-callback": "The customer asked to be contacted again at a specific time.",
  "outcome-not-interested": "The AI classified this lead as not interested in continuing.",
  unsuccessful: "The call did not connect — no answer, voicemail, a busy line, or a carrier failure.",
  "retry-scheduled": "A retry has been queued according to the campaign's retry policy.",
  "pending-retry": "Waiting for the scheduler to pick up this retry attempt.",
  "calling-again": "Dialing again. If the customer picks up, this call becomes a normal conversation.",
};

export default function DetailDrawer({
  stageId,
  lead,
  onClose,
}: {
  stageId: StageId | null;
  lead: SampleLead | null;
  onClose: () => void;
}) {
  const open = stageId !== null;

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[380px] bg-surface border-l border-border-subtle shadow-[-24px_0_60px_-32px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {stageId && (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-border-subtle">
              <h3 className="text-[1.05rem] font-semibold text-text">{STAGE_TITLES[stageId]}</h3>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center size-8 rounded-full hover:bg-surface-elevated text-text-muted cursor-pointer"
                aria-label="Close details"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
              <p className="text-[0.88rem] text-text-soft leading-relaxed">{STAGE_DESCRIPTIONS[stageId]}</p>

              {lead && (
                <div className="rounded-xl border border-border-subtle bg-bg-soft p-3.5 flex flex-col gap-2">
                  <span className="text-[0.68rem] font-mono uppercase tracking-[0.06em] text-text-muted">
                    Selected lead
                  </span>
                  <MetaRow label="Name" value={lead.name} />
                  <MetaRow label="Phone" value={lead.phone} />
                  <MetaRow label="Campaign" value={lead.campaign} />
                  <MetaRow label="Source" value={lead.source} />
                  <MetaRow label="Added" value={lead.addedAt} />
                </div>
              )}

              <div className="rounded-xl border border-border-subtle p-3.5 flex flex-col gap-2">
                <span className="text-[0.68rem] font-mono uppercase tracking-[0.06em] text-text-muted">
                  Stage snapshot
                </span>
                {stageId === "analysis" ? (
                  <div className="flex flex-col gap-1.5 mt-1">
                    {ANALYSIS_STEPS.map((step) => (
                      <MetaRow key={step} label={step} value="Done" />
                    ))}
                  </div>
                ) : stageId.startsWith("outcome-") ? (
                  <OutcomeDetail kind={stageId.replace("outcome-", "") as OutcomeKind} />
                ) : (
                  <MetaRow label="Leads in this stage" value={(STAGE_COUNTS[stageId] ?? 0).toLocaleString()} />
                )}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

function OutcomeDetail({ kind }: { kind: OutcomeKind }) {
  const copy = OUTCOME_COPY[kind];
  return (
    <div className="flex flex-col gap-2.5 mt-1">
      <MetaRow label="Confidence" value={copy.confidence} />
      <p className="text-[0.82rem] text-text-soft leading-relaxed">{copy.summary}</p>
      <div className="flex flex-col gap-1.5">
        {copy.insights.map((insight) => (
          <div key={insight} className="flex items-center gap-2 text-[0.8rem] text-text">
            <span className="size-1.5 rounded-full bg-accent shrink-0" />
            {insight}
          </div>
        ))}
      </div>
      {"callback" in copy && (
        <div className="mt-1 rounded-lg bg-accent-tint p-2.5 flex flex-col gap-1.5">
          <MetaRow label="Callback time" value={copy.callback.date} />
          <MetaRow label="Reason" value={copy.callback.reason} />
        </div>
      )}
    </div>
  );
}
