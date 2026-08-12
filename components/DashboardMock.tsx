const BARS = [
  { label: "Booked", width: 62 },
  { label: "Follow-up needed", width: 41 },
  { label: "No answer", width: 23 },
  { label: "Declined", width: 12 },
];

export default function DashboardMock() {
  return (
    <div className="dash-mock">
      <div className="dash-head">
        <span>
          Outcome breakdown — <strong>this campaign</strong>
        </span>
        <span>Preview</span>
      </div>
      {BARS.map((bar) => (
        <div className="bar-row" key={bar.label}>
          <span className="bar-label">{bar.label}</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${bar.width}%` }} />
          </div>
        </div>
      ))}
      <div className="dash-footnote">
        <span>Spend per call</span>
        <span>Agent performance over time</span>
        <span>Full call log</span>
      </div>
    </div>
  );
}
