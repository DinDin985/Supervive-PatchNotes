import type { ReactNode } from "react";
import CutCorners from "../ui/cut-corners";

export default function BugFixes({ children }: { children: ReactNode }) {
  return (
    <section id="Bug Fixes" className="mx-auto mb-10 flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Other Bugfixes/QOL</h1>

      <div className={`relative flex flex-col border-4 p-4`}>
        <CutCorners />

        <div className="prose-patch-bugfixes prose z-10">{children}</div>
      </div>
    </section>
  );
}
