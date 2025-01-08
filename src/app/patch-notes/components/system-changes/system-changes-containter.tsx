import type { ReactNode } from "react";

export default function SystemChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      id="System Changes"
      className="mx-auto flex w-10/12 scroll-mt-28 flex-col"
    >
      <h1 className="patch-notes-subtitle">System Changes</h1>
      {children}
    </section>
  );
}
