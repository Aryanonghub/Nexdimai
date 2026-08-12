type Node = { label: string; icon?: string; accent?: boolean };

function NodeBox({ node }: { node: Node }) {
  return (
    <div className={`workflow-node ${node.accent ? "is-accent" : ""}`}>
      {node.icon && (
        <div className="node-icon">
          <svg aria-hidden="true">
            <use href={`#${node.icon}`} />
          </svg>
        </div>
      )}
      <div className="node-box">{node.label}</div>
    </div>
  );
}

function Connector() {
  return <div className="workflow-connector" aria-hidden="true" />;
}

const TRUNK: Node[] = [
  { label: "New lead", icon: "icon-agent" },
  { label: "AI agent reaches out", icon: "icon-chat" },
  { label: "Understand intent", icon: "icon-target" },
];

const INTERESTED_PATH: Node[] = [
  { label: "Interested", icon: "icon-check", accent: true },
  { label: "Update CRM", icon: "icon-database" },
  { label: "Book meeting", icon: "icon-calendar" },
  { label: "Notify sales", icon: "icon-bell" },
];

const NOT_INTERESTED_PATH: Node[] = [
  { label: "Not interested", icon: "icon-list" },
  { label: "Logged, no action", icon: "icon-list" },
];

export default function WorkflowBuilder() {
  return (
    <div className="workflow-builder" role="img" aria-label="Workflow: a new lead is reached by an AI agent, which determines intent. Interested leads are added to the CRM, a meeting is booked, and sales is notified. Leads that aren't interested are logged with no further action.">
      <div className="workflow-row">
        {TRUNK.map((node, i) => (
          <span key={node.label} style={{ display: "flex", alignItems: "center" }}>
            <NodeBox node={node} />
            <Connector />
          </span>
        ))}
        <div className="workflow-branch">
          <span style={{ display: "flex", alignItems: "center" }}>
            {INTERESTED_PATH.map((node, i) => (
              <span key={node.label} style={{ display: "flex", alignItems: "center" }}>
                <NodeBox node={node} />
                {i < INTERESTED_PATH.length - 1 && <Connector />}
              </span>
            ))}
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            {NOT_INTERESTED_PATH.map((node, i) => (
              <span key={node.label} style={{ display: "flex", alignItems: "center" }}>
                <NodeBox node={node} />
                {i < NOT_INTERESTED_PATH.length - 1 && <Connector />}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
