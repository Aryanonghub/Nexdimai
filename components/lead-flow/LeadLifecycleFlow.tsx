"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  MarkerType,
  BackgroundVariant,
  type Edge,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ListFilter, Radio, User, LayoutGrid } from "lucide-react";
import { nodeTypes, type FlowNodeData } from "./nodes";
import DetailDrawer from "./DetailDrawer";
import { CAMPAIGN, NODE_POSITIONS, SAMPLE_LEADS, STAGE_COUNTS } from "./data";
import type { StageId, StageStatus, FilterOutcome, FilterRetry } from "./types";

const MAIN_ORDER: StageId[] = [
  "lead-added",
  "campaign",
  "pending",
  "scheduled",
  "calling",
  "conversation",
  "completed",
  "analysis",
];
const OUTCOME_IDS: StageId[] = ["outcome-interested", "outcome-callback", "outcome-not-interested"];
const RETRY_ORDER: StageId[] = ["unsuccessful", "retry-scheduled", "pending-retry", "calling-again"];
const ALL_STAGES = [...MAIN_ORDER, ...OUTCOME_IDS, ...RETRY_ORDER];

const EDGE_DEFS: { id: string; source: StageId; target: StageId; sourceHandle?: string; targetHandle?: string; retry?: boolean }[] = [
  { id: "e-1", source: "lead-added", target: "campaign" },
  { id: "e-2", source: "campaign", target: "pending" },
  { id: "e-3", source: "pending", target: "scheduled" },
  { id: "e-4", source: "scheduled", target: "calling" },
  { id: "e-5", source: "calling", sourceHandle: "right", target: "conversation", targetHandle: "left" },
  { id: "e-6", source: "conversation", target: "completed" },
  { id: "e-7", source: "completed", target: "analysis" },
  { id: "e-8", source: "analysis", target: "outcome-interested" },
  { id: "e-9", source: "analysis", target: "outcome-callback" },
  { id: "e-10", source: "analysis", target: "outcome-not-interested" },
  { id: "r-1", source: "calling", sourceHandle: "bottom", target: "unsuccessful", retry: true },
  { id: "r-2", source: "unsuccessful", target: "retry-scheduled", retry: true },
  { id: "r-3", source: "retry-scheduled", target: "pending-retry", retry: true },
  { id: "r-4", source: "pending-retry", target: "calling-again", retry: true },
  { id: "r-5", source: "calling-again", target: "conversation", targetHandle: "bottom", retry: true },
];

function statusFromIndex(index: number, active: number): StageStatus {
  if (index < active) return "completed";
  if (index === active) return "active";
  return "pending";
}

export default function LeadLifecycleFlow() {
  const [view, setView] = useState<"campaign" | "individual">("campaign");
  const [selectedLeadId, setSelectedLeadId] = useState(SAMPLE_LEADS[1].id);
  const [drawerStage, setDrawerStage] = useState<StageId | null>(null);
  const [statusFilter, setStatusFilter] = useState<"all" | StageStatus>("all");
  const [outcomeFilter, setOutcomeFilter] = useState<FilterOutcome>("all");
  const [retryFilter, setRetryFilter] = useState<FilterRetry>("all");
  const [tick, setTick] = useState(0);

  const lead = useMemo(() => SAMPLE_LEADS.find((l) => l.id === selectedLeadId) ?? SAMPLE_LEADS[0], [selectedLeadId]);

  useEffect(() => {
    const speed = view === "individual" ? 1000 : 2200;
    const interval = setInterval(() => setTick((t) => t + 1), speed);
    return () => clearInterval(interval);
  }, [view, selectedLeadId]);

  const statuses = useMemo(() => {
    const map = new Map<StageId, StageStatus>();
    if (view === "campaign") {
      const cycle = tick % (MAIN_ORDER.length + 2);
      MAIN_ORDER.forEach((id, i) => map.set(id, statusFromIndex(i, cycle)));
      OUTCOME_IDS.forEach((id) => map.set(id, cycle >= MAIN_ORDER.length ? "active" : "idle"));
      RETRY_ORDER.forEach((id) => map.set(id, "idle"));
    } else {
      const path = lead.path;
      const cycle = tick % (path.length + 2);
      ALL_STAGES.forEach((id) => map.set(id, "idle"));
      path.forEach((id, i) => map.set(id, statusFromIndex(i, cycle)));
    }
    return map;
  }, [view, tick, lead]);

  const visiblePathSet = useMemo(() => (view === "individual" ? new Set(lead.path) : null), [view, lead]);

  const openDrawer = (stageId: StageId) => setDrawerStage(stageId);

  const nodes: Node<FlowNodeData>[] = useMemo(() => {
    return ALL_STAGES.filter((id) => !visiblePathSet || visiblePathSet.has(id)).map((id) => {
      const status = statuses.get(id) ?? "idle";
      const dimmed =
        (statusFilter !== "all" && status !== statusFilter) ||
        (outcomeFilter !== "all" && id.startsWith("outcome-") && id !== `outcome-${outcomeFilter}`) ||
        (retryFilter === "no-retry" && RETRY_ORDER.includes(id)) ||
        (retryFilter === "retried" && !RETRY_ORDER.includes(id) && !MAIN_ORDER.slice(0, 5).includes(id));
      return {
        id,
        type: id,
        position: NODE_POSITIONS[id],
        data: {
          status,
          view,
          count: STAGE_COUNTS[id],
          lead: view === "individual" ? lead : null,
          onOpen: openDrawer,
        },
        style: { opacity: dimmed ? 0.35 : 1, transition: "opacity 200ms ease" },
        draggable: false,
      };
    });
  }, [statuses, view, lead, visiblePathSet, statusFilter, outcomeFilter, retryFilter]);

  const edges: Edge[] = useMemo(() => {
    return EDGE_DEFS.filter((e) => {
      if (!visiblePathSet) return true;
      const path = lead.path;
      const si = path.indexOf(e.source);
      const ti = path.indexOf(e.target);
      return si !== -1 && ti !== -1 && ti === si + 1;
    }).map((e) => {
      const targetStatus = statuses.get(e.target);
      const isLive = targetStatus === "active" || targetStatus === "completed";
      return {
        id: e.id,
        source: e.source,
        target: e.target,
        sourceHandle: e.sourceHandle,
        targetHandle: e.targetHandle,
        animated: isLive,
        style: {
          stroke: e.retry ? "var(--text-muted)" : isLive ? "var(--accent)" : "var(--border)",
          strokeWidth: e.retry ? 1.5 : 2,
          strokeDasharray: e.retry ? "5 4" : undefined,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: e.retry ? "var(--text-muted)" : isLive ? "var(--accent)" : "var(--border)",
          width: 16,
          height: 16,
        },
      };
    });
  }, [statuses, visiblePathSet, lead]);

  return (
    <div className="rounded-2xl border border-border-subtle bg-surface overflow-clip contain-[paint] max-w-full">
      <div className="flex flex-wrap items-center gap-3 justify-between p-4 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center size-8 rounded-lg bg-accent-tint text-accent-light">
            <Radio className="size-4" />
          </span>
          <div>
            <div className="text-[0.92rem] font-semibold text-text">{CAMPAIGN.name}</div>
            <div className="text-[0.72rem] text-text-muted">{CAMPAIGN.totalLeads.toLocaleString()} leads · live pipeline</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded-full border border-border-subtle bg-bg-soft p-1 text-[0.78rem]">
            <button
              type="button"
              onClick={() => setView("campaign")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                view === "campaign" ? "bg-surface shadow-sm text-text font-medium" : "text-text-muted"
              }`}
            >
              <LayoutGrid className="size-3.5" /> Campaign View
            </button>
            <button
              type="button"
              onClick={() => setView("individual")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                view === "individual" ? "bg-surface shadow-sm text-text font-medium" : "text-text-muted"
              }`}
            >
              <User className="size-3.5" /> Lead View
            </button>
          </div>

          {view === "individual" && (
            <select
              value={selectedLeadId}
              onChange={(e) => setSelectedLeadId(e.target.value)}
              className="rounded-full border border-border-subtle bg-bg-soft px-3 py-1.5 text-[0.78rem] text-text cursor-pointer"
            >
              {SAMPLE_LEADS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-soft">
        <span className="flex items-center gap-1.5 text-[0.72rem] text-text-muted font-mono uppercase tracking-[0.05em]">
          <ListFilter className="size-3.5" /> Filters
        </span>
        <FilterSelect
          value={statusFilter}
          onChange={(v) => setStatusFilter(v as "all" | StageStatus)}
          options={[
            ["all", "All statuses"],
            ["completed", "Completed"],
            ["active", "Active"],
            ["pending", "Pending"],
            ["error", "Error"],
          ]}
        />
        <FilterSelect
          value={outcomeFilter}
          onChange={(v) => setOutcomeFilter(v as FilterOutcome)}
          options={[
            ["all", "All outcomes"],
            ["interested", "Interested"],
            ["callback", "Callback"],
            ["not-interested", "Not interested"],
          ]}
        />
        <FilterSelect
          value={retryFilter}
          onChange={(v) => setRetryFilter(v as FilterRetry)}
          options={[
            ["all", "All leads"],
            ["retried", "Retried only"],
            ["no-retry", "No retry"],
          ]}
        />
      </div>

      <div style={{ height: 620 }} className="bg-bg-soft overflow-clip contain-[paint]">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.15 }}
            minZoom={0.3}
            maxZoom={1.5}
            proOptions={{ hideAttribution: true }}
            nodesConnectable={false}
          >
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="var(--border-subtle)" />
            <Controls showInteractive={false} position="bottom-left" />
            <MiniMap
              position="bottom-right"
              pannable
              zoomable
              maskColor="rgba(244,243,236,0.7)"
              style={{ background: "var(--surface)", border: "1px solid var(--border-subtle)" }}
            />
          </ReactFlow>
        </ReactFlowProvider>
      </div>

      <DetailDrawer stageId={drawerStage} lead={view === "individual" ? lead : null} onClose={() => setDrawerStage(null)} />
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-[0.76rem] text-text cursor-pointer"
    >
      {options.map(([v, label]) => (
        <option key={v} value={v}>
          {label}
        </option>
      ))}
    </select>
  );
}
