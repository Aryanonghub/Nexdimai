"use client";

import { useState } from "react";

type UseCase = {
  id: string;
  tabLabel: string;
  heading: string;
  body: string;
  agentLine: string;
  calleeLine: string;
};

const USE_CASES: UseCase[] = [
  {
    id: "scheduling",
    tabLabel: "Scheduling",
    heading: "Fill the calendar without a front desk on the phone all day.",
    body: "Velmora calls to book, confirm, or move appointments, and checks availability against the goal you've set before it hangs up.",
    agentLine:
      "You're due for a check-up — I have Tuesday at 10am or Thursday at 2pm.",
    calleeLine: "Thursday works better for me.",
  },
  {
    id: "followup",
    tabLabel: "Sales follow-up",
    heading: "Follow up on every lead, not just the warm ones.",
    body: "Velmora works a lead list on a schedule, qualifies interest, and logs what it learns so a rep can pick up the ones worth a human call.",
    agentLine:
      "You downloaded our pricing guide last week — still exploring options, or ready to talk specifics?",
    calleeLine: "Still comparing, but send me a call time next week.",
  },
  {
    id: "renewals",
    tabLabel: "Renewals & billing",
    heading: "Chase renewals before they lapse.",
    body: "Velmora reaches out ahead of a renewal or payment date, confirms details, and flags anything that needs a person's attention.",
    agentLine: "Your plan renews on the 14th — should I go ahead and keep it as is?",
    calleeLine: "Yes, that's fine, thanks for checking.",
  },
  {
    id: "surveys",
    tabLabel: "Feedback calls",
    heading: "Ask how it went, right after it happened.",
    body: "Velmora calls shortly after a service or visit, asks a few real questions, and turns the answers into a record you can act on.",
    agentLine: "Quick one — how was your visit with us this week?",
    calleeLine: "Good, actually — the wait was shorter than usual.",
  },
];

export default function UseCaseTabs() {
  const [activeId, setActiveId] = useState(USE_CASES[0].id);

  return (
    <div className="overflow-hidden rounded-[20px] border border-border-subtle bg-surface">
      <div
        className="flex flex-wrap border-b border-border-subtle"
        role="tablist"
        aria-label="Velmora use cases"
      >
        {USE_CASES.map((uc) => (
          <button
            key={uc.id}
            role="tab"
            id={`tab-${uc.id}`}
            aria-selected={activeId === uc.id}
            aria-controls={`panel-${uc.id}`}
            className="min-w-37.5 flex-1 cursor-pointer border-0 border-r border-border-subtle bg-transparent px-5 py-4 text-left text-[0.9rem] font-semibold text-text-soft transition-colors duration-160 ease-in-out last:border-r-0 hover:text-text aria-selected:bg-accent-tint aria-selected:text-text aria-selected:shadow-[inset_0_-2px_0_var(--accent)] max-[900px]:min-w-[50%] max-[600px]:min-w-full max-[600px]:border-r-0 max-[600px]:border-b max-[600px]:border-border-subtle"
            onClick={() => setActiveId(uc.id)}
          >
            {uc.tabLabel}
          </button>
        ))}
      </div>
      <div className="p-10 max-[900px]:p-7 max-[600px]:p-5">
        {USE_CASES.map((uc) => (
          <div
            key={uc.id}
            id={`panel-${uc.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${uc.id}`}
            hidden={activeId !== uc.id}
            className={`grid-cols-[1.1fr_0.9fr] items-center gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 ${
              activeId === uc.id ? "grid" : ""
            }`}
          >
            <div>
              <h3>{uc.heading}</h3>
              <p>{uc.body}</p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-bg-soft p-5">
              <div className="flex flex-col gap-2.5">
                <p className="max-w-[82%] self-start rounded-[14px] rounded-bl-[4px] bg-accent px-3.5 py-2.5 text-[0.88rem] text-white">
                  {uc.agentLine}
                </p>
                <p className="max-w-[82%] self-end rounded-[14px] rounded-br-[4px] border border-border-subtle bg-surface-elevated px-3.5 py-2.5 text-[0.88rem] text-text">
                  {uc.calleeLine}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
