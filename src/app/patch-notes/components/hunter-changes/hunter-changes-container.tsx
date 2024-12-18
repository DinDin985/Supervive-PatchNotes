import { type ReactNode } from "react";

export default function HunterChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section id="Hunter Changes" className="mx-auto flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Hunter Changes</h1>
      {children}
    </section>
  );
}
