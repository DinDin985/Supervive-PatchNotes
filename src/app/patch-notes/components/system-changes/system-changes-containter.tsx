import type { ReactNode } from "react";

export default function SystemChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="systemChanges" className="mx-auto flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">System Changes</h1>
      {children}
    </div>
  );
}
