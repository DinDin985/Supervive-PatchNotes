import { type ReactNode } from "react";

export default function ConsumableChangesContainer({ children }: { children: ReactNode }) {
  return (
    <section id="Consumable Changes" className="mx-auto flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Consumable Changes</h1>
      {children}
    </section>
  );
}
