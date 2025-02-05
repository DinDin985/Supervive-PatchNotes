import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import CutCorners from "../ui/cut-corners";

type bugFixesVariants = "midPatchUpdate";

export default function BugFixes({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: bugFixesVariants;
}) {
  const sectionVariants = {
    midPatchUpdate: "w-full",
  };

  const borderVariants = {
    midPatchUpdate: "border-0 p-2",
  };

  const sectionVariantsKey = variant ? sectionVariants[variant] : "";
  const borderVariantsKey = variant ? borderVariants[variant] : "";

  return (
    <section
      id="Bug Fixes"
      className={twMerge(
        "mx-auto mb-10 flex w-10/12 scroll-mt-28 flex-col",
        sectionVariantsKey
      )}
    >
      <h1 className="patch-notes-subtitle">Other Bugfixes/QOL</h1>

      <div
        className={twMerge(
          `relative flex flex-col border-4 p-4`,
          borderVariantsKey,
        )}
      >
        <CutCorners variant={variant} />

        <div className="prose-patch-bugfixes prose z-10">{children}</div>
      </div>
    </section>
  );
}
