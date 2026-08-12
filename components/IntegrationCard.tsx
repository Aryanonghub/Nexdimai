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
      <div className="flex min-h-36 flex-col gap-2.5 rounded-[16px] border border-border-subtle bg-surface p-4 transition-[transform,border-color] duration-350 ease-in-out hover:-translate-y-0.5 hover:border-[#3d3d3d]">
        <div className="h-8 w-8 overflow-hidden rounded-md">{integration.icon}</div>
        <h3 className="mb-0! text-lg">{integration.name}</h3>
        <p className="mb-0! text-sm text-text-soft">{integration.description}</p>
      </div>
    </Reveal>
  );
}
