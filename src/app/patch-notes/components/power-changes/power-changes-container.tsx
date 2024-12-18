import { type ReactNode } from "react";

export default function PowerChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="Power Changes" className="mx-auto flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Power Changes</h1>
      {children}
    </div>
  );
}
