import type { SampleLead, StageId } from "./types";

export const CAMPAIGN = {
  name: "Q3 Renewal Outreach",
  status: "Running",
  totalLeads: 1240,
  progress: 0.75,
};

/** Campaign-view aggregate counts, keyed by stage id. */
export const STAGE_COUNTS: Record<StageId, number> = {
  "lead-added": 1240,
  campaign: 1240,
  pending: 86,
  scheduled: 34,
  calling: 12,
  conversation: 8,
  completed: 934,
  analysis: 21,
  "outcome-interested": 312,
  "outcome-callback": 167,
  "outcome-not-interested": 401,
  unsuccessful: 143,
  "retry-scheduled": 89,
  "pending-retry": 52,
  "calling-again": 9,
};

export const SAMPLE_LEADS: SampleLead[] = [
  {
    id: "lead-aarav",
    name: "Aarav Sharma",
    phone: "+91 98200 XXXXX",
    campaign: CAMPAIGN.name,
    source: "Website form",
    addedAt: "Today, 09:12 AM",
    agent: "Velmora — Renewals",
    path: [
      "lead-added",
      "campaign",
      "pending",
      "scheduled",
      "calling",
      "conversation",
      "completed",
      "analysis",
      "outcome-interested",
    ],
    outcome: "interested",
  },
  {
    id: "lead-priya",
    name: "Priya Menon",
    phone: "+91 90210 XXXXX",
    campaign: CAMPAIGN.name,
    source: "Imported list",
    addedAt: "Today, 08:47 AM",
    agent: "Velmora — Renewals",
    path: [
      "lead-added",
      "campaign",
      "pending",
      "scheduled",
      "calling",
      "unsuccessful",
      "retry-scheduled",
      "pending-retry",
      "calling-again",
      "conversation",
      "completed",
      "analysis",
      "outcome-callback",
    ],
    outcome: "callback",
    retryReason: "No Answer",
  },
  {
    id: "lead-rohan",
    name: "Rohan Iyer",
    phone: "+91 88888 XXXXX",
    campaign: CAMPAIGN.name,
    source: "Referral",
    addedAt: "Yesterday, 06:20 PM",
    agent: "Velmora — Renewals",
    path: [
      "lead-added",
      "campaign",
      "pending",
      "scheduled",
      "calling",
      "conversation",
      "completed",
      "analysis",
      "outcome-not-interested",
    ],
    outcome: "not-interested",
  },
];

/** x,y layout for each node on the canvas. */
export const NODE_POSITIONS: Record<StageId, { x: number; y: number }> = {
  "lead-added": { x: 0, y: 0 },
  campaign: { x: 300, y: 0 },
  pending: { x: 600, y: 0 },
  scheduled: { x: 900, y: 0 },
  calling: { x: 1200, y: 0 },
  conversation: { x: 1580, y: 0 },
  completed: { x: 1980, y: 0 },
  analysis: { x: 2300, y: 0 },
  "outcome-interested": { x: 2660, y: -220 },
  "outcome-callback": { x: 2660, y: 0 },
  "outcome-not-interested": { x: 2660, y: 220 },
  unsuccessful: { x: 1200, y: 320 },
  "retry-scheduled": { x: 1500, y: 320 },
  "pending-retry": { x: 1800, y: 320 },
  "calling-again": { x: 1580, y: 320 },
};

export const ANALYSIS_STEPS = [
  "Transcript",
  "Conversation Analysis",
  "Intent Detection",
  "Sentiment Analysis",
  "Outcome Detection",
  "Summary & Insights",
];

export const OUTCOME_COPY = {
  interested: {
    label: "Interested",
    confidence: "94%",
    reason: "Asked about renewal pricing and requested a follow-up email.",
    summary:
      "Customer is renewing this cycle. Wants pricing for the annual plan and a comparison against the current tier.",
    insights: ["Price-sensitive", "Prefers email follow-up", "Decision maker"],
  },
  "not-interested": {
    label: "Not Interested",
    confidence: "88%",
    reason: "Already switched to a competitor last quarter.",
    summary: "Customer churned before this outreach cycle started. No renewal intent detected.",
    insights: ["Already churned", "No budget signal", "Do not re-contact this quarter"],
  },
  callback: {
    label: "Callback",
    confidence: "91%",
    reason: "In a meeting, asked to be called back this week.",
    summary: "Customer is interested but couldn't talk. Wants a call after Thursday.",
    insights: ["Genuine interest", "Timing constraint only", "High callback priority"],
    callback: { date: "Thu, 2:00 PM", reason: "Requested — currently in back-to-back meetings" },
  },
} as const;
