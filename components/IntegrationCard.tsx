import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type Integration = {
  name: string;
  description: string;
  icon: ReactNode;
};

export default function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <Reveal>
      <div className="integration-card">
        <div className="integration-icon">{integration.icon}</div>
        <h3>{integration.name}</h3>
        <p>{integration.description}</p>
      </div>
    </Reveal>
  );
}
