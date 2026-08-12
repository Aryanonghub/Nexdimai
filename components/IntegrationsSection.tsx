import Reveal from "./Reveal";
import IntegrationCard, { type Integration } from "./IntegrationCard";

/**
 * Icons below are original placeholder glyphs (generic spreadsheet /
 * document / envelope motifs), not the official Google Sheets, Notion,
 * or Gmail marks. Swap the three <svg> blocks for the real brand SVGs
 * (from each company's press/brand-asset page) before shipping.
 */
const SheetsGlyph = (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="#1B8F5A" />
    <g stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="7" width="16" height="18" rx="2" />
      <path d="M8 13h16M8 19h16M14.2 7v18M19.8 7v18" />
    </g>
  </svg>
);

const NotionGlyph = (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="#171717" stroke="#2A2A2A" />
    <g stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9h8l3 3v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z" />
      <path d="M18 9v3h3" />
      <path d="M12 16h6M12 19h6" />
    </g>
  </svg>
);

const GmailGlyph = (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="#D14836" />
    <g stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="9" width="18" height="14" rx="2" />
      <path d="M7 10l9 7 9-7" />
    </g>
  </svg>
);

const INTEGRATIONS: Integration[] = [
  {
    name: "Google Sheets",
    description: "Read and update sheets after calls.",
    icon: SheetsGlyph,
  },
  {
    name: "Notion",
    description: "Read and update docs and databases.",
    icon: NotionGlyph,
  },
  {
    name: "Gmail",
    description: "Read, send, and manage emails by voice.",
    icon: GmailGlyph,
  },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations">
      <div className="mx-auto max-w-295 px-8 max-[600px]:px-5">
        <Reveal className="mx-auto mb-12 max-w-160 text-center">
          <p
            className="mb-3.5! inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold tracking-[0.14em] text-text-soft uppercase before:inline-block before:h-[1.5px] before:w-4 before:bg-accent before:content-['']"
            style={{ justifyContent: "center" }}
          >
            Example integrations
          </p>
          <h2>
            One intelligent layer
            <br />
            to orchestrate all your apps.
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {INTEGRATIONS.map((integration) => (
            <IntegrationCard key={integration.name} integration={integration} />
          ))}
        </div>
      </div>
    </section>
  );
}
