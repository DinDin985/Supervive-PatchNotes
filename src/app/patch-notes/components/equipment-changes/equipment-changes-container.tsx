import { type ReactNode } from "react";

export default function EquipmentChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section id="Equipment Changes" className="mx-auto flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Equipment Changes</h1>
      {children}
    </section>
  );
}
