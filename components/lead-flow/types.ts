export type StageStatus = "completed" | "active" | "pending" | "error" | "idle";

export type OutcomeKind = "interested" | "callback" | "not-interested";

export type StageId =
  | "lead-added"
  | "campaign"
  | "pending"
  | "scheduled"
  | "calling"
  | "conversation"
  | "completed"
  | "analysis"
  | "outcome-interested"
  | "outcome-callback"
  | "outcome-not-interested"
  | "unsuccessful"
  | "retry-scheduled"
  | "pending-retry"
  | "calling-again";

export interface SampleLead {
  id: string;
  name: string;
  phone: string;
  campaign: string;
  source: string;
  addedAt: string;
  agent: string;
  /** Ordered stage ids this lead actually passed through. */
  path: StageId[];
  outcome?: OutcomeKind;
  retryReason?: "No Answer" | "Voicemail" | "Busy" | "Call Failed";
}

export type FilterStatus = "all" | StageStatus;
export type FilterOutcome = "all" | OutcomeKind;
export type FilterRetry = "all" | "no-retry" | "retried";
