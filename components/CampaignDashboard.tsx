const SIDEBAR_ITEMS = [
  "Overview",
  "Agents",
  "Campaigns",
  "Calls",
  "Contacts",
  "Knowledge",
  "Analytics",
  "Integrations",
  "Settings",
];

const LEADS = [
  { name: "Demo lead — Aarav S.", phone: "+91 XXX XXX 4821", status: "completed", outcome: "Interested" },
  { name: "Demo lead — Priya M.", phone: "+91 XXX XXX 7710", status: "completed", outcome: "Callback requested" },
  { name: "Demo lead — Rohan K.", phone: "+91 XXX XXX 2093", status: "completed", outcome: "Not interested" },
  { name: "Demo lead — Sana I.", phone: "+91 XXX XXX 5567", status: "queued", outcome: "—" },
];

export default function CampaignDashboard() {
  return (
    <div className="campaign-dashboard">
      <nav className="campaign-sidebar" aria-label="Velmora dashboard navigation (demo)">
        {SIDEBAR_ITEMS.map((item) => (
          <span key={item} className={`sidebar-item ${item === "Campaigns" ? "is-active" : ""}`}>
            {item}
          </span>
        ))}
      </nav>
      <div className="campaign-main">
        <div className="campaign-header">
          <div>
            <h3>Demo campaign — Lead qualification</h3>
            <span className="campaign-meta">Demo data · not a real campaign</span>
          </div>
          <span className="campaign-status">
            <span className="status-dot" aria-hidden="true"></span>
            Running
          </span>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="lead-table">
            <thead>
              <tr>
                <th>Lead</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              {LEADS.map((lead) => (
                <tr key={lead.name}>
                  <td className="lead-name">{lead.name}</td>
                  <td>{lead.phone}</td>
                  <td>
                    <span className={`lead-status ${lead.status}`}>
                      {lead.status === "completed" ? "Completed" : "Queued"}
                    </span>
                  </td>
                  <td>{lead.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
