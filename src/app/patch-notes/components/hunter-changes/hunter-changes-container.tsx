import { twMerge } from "tailwind-merge";
import type { HunterChangesContainerProps } from "../../types";

export default function HunterChangesContainer({
  children,
  variant = "default",
}: HunterChangesContainerProps) {
  const sectionVariants = {
    default: "",
    midPatchUpdate: "w-full",
  };

  const titleVariants = {
    default: "",
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
