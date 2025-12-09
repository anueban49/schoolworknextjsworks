import { BaseStructure } from "../_components/BaseStructure";

export default function IframeLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseStructure>
      {children}
    </BaseStructure>
  );
}
