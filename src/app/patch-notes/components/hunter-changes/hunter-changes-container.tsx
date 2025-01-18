import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type hunterChangesContainerVariants = "midPatchUpdate";

export default function HunterChangesContainer({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: hunterChangesContainerVariants;
}) {
  const sectionVariants = {
    midPatchUpdate: "w-full",
  };

  const titleVariants = {
    midPatchUpdate: "mb-5",
  };
 

  return (
    <section
      id="Hunter Changes"
      className={twMerge(
        "mx-auto flex w-10/12 scroll-mt-28 flex-col",
        sectionVariants[variant],
      )}
    >
      <h1 className={twMerge("patch-notes-subtitle", titleVariants[variant])}>
        Hunter Changes
      </h1>
      {children}
    </section>
  );
}
