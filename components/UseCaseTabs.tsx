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
    <div className="usecases-tabs">
      <div className="usecase-tablist" role="tablist" aria-label="Velmora use cases">
        {USE_CASES.map((uc) => (
          <button
            key={uc.id}
            role="tab"
            id={`tab-${uc.id}`}
            aria-selected={activeId === uc.id}
            aria-controls={`panel-${uc.id}`}
            className="usecase-tab"
            onClick={() => setActiveId(uc.id)}
          >
            {uc.tabLabel}
          </button>
        ))}
      </div>
      <div className="usecase-panels">
        {USE_CASES.map((uc) => (
          <div
            key={uc.id}
            id={`panel-${uc.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${uc.id}`}
            hidden={activeId !== uc.id}
            className={`usecase-panel ${activeId === uc.id ? "active" : ""}`}
          >
            <div>
              <h3>{uc.heading}</h3>
              <p>{uc.body}</p>
            </div>
            <div className="usecase-example">
              <div className="transcript">
                <p className="bubble bubble-agent">{uc.agentLine}</p>
                <p className="bubble bubble-callee">{uc.calleeLine}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
