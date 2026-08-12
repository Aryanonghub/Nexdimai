const BARS = [
  { label: "Booked", width: 62 },
  { label: "Follow-up needed", width: 41 },
  { label: "No answer", width: 23 },
  { label: "Declined", width: 12 },
];

export default function DashboardMock() {
  return (
    <div className="rounded-[20px] border border-border-subtle bg-surface p-8 max-[600px]:p-5.5">
      <div className="mb-6 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-soft">
        <span>
          Outcome breakdown — <strong className="text-accent-light">this campaign</strong>
        </span>
        <span>Preview</span>
      </div>
      {BARS.map((bar) => (
        <div
          className="mb-3.5 grid grid-cols-[140px_1fr] items-center gap-4 text-[0.88rem] text-text-soft max-[900px]:grid-cols-[110px_1fr] max-[600px]:grid-cols-1 max-[600px]:gap-1.5"
          key={bar.label}
        >
          <span>{bar.label}</span>
          <div className="h-2.5 overflow-hidden rounded-full bg-surface-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
              style={{ width: `${bar.width}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-border-subtle pt-5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-soft">
        <span>Spend per call</span>
        <span>Agent performance over time</span>
        <span>Full call log</span>
      </div>
    </div>
  );
}
