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
    <div className="grid grid-cols-[200px_1fr] overflow-hidden rounded-[20px] border border-border-subtle bg-surface max-[900px]:grid-cols-1">
      <nav
        className="border-r border-border-subtle bg-bg-soft px-3 py-5 max-[900px]:hidden"
        aria-label="Velmora dashboard navigation (demo)"
      >
        {SIDEBAR_ITEMS.map((item) => (
          <span
            key={item}
            className={`mb-0.5 block rounded-md px-3.5 py-2.5 text-[0.86rem] text-text-soft ${
              item === "Campaigns" ? "bg-accent-tint text-text" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </nav>
      <div className="px-7 pt-7 pb-2">
        <div className="mb-5.5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="mb-1 text-[1.15rem]">Demo campaign — Lead qualification</h3>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-muted">
              Demo data · not a real campaign
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-tint px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-success">
            <span className="animate-[pulse_2s_infinite]" aria-hidden="true"></span>
            Running
          </span>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="w-full border-collapse text-[0.86rem] [&_tr:last-child_td]:border-b-0">
            <thead>
              <tr>
                <th className="border-b border-border-subtle px-3 pt-0 pb-2.5 text-left font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-text-muted">
                  Lead
                </th>
                <th className="border-b border-border-subtle px-3 pt-0 pb-2.5 text-left font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-text-muted">
                  Phone
                </th>
                <th className="border-b border-border-subtle px-3 pt-0 pb-2.5 text-left font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-text-muted">
                  Status
                </th>
                <th className="border-b border-border-subtle px-3 pt-0 pb-2.5 text-left font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-text-muted">
                  Outcome
                </th>
              </tr>
            </thead>
            <tbody>
              {LEADS.map((lead) => (
                <tr key={lead.name}>
                  <td className="border-b border-border-subtle p-3 font-medium text-text">{lead.name}</td>
                  <td className="border-b border-border-subtle p-3 text-text-soft">{lead.phone}</td>
                  <td className="border-b border-border-subtle p-3 text-text-soft">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.06em] ${
                        lead.status === "completed"
                          ? "bg-success-tint text-success"
                          : "bg-surface-elevated text-text-muted"
                      }`}
                    >
                      {lead.status === "completed" ? "Completed" : "Queued"}
                    </span>
                  </td>
                  <td className="border-b border-border-subtle p-3 text-text-soft">{lead.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
