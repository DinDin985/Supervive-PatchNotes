import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import CutCorners from "../ui/cut-corners";

type CustomProps = {
  children: ReactNode;
  title: string;
  variant: CustomVariants;
};

type CustomVariants = "midPatchUpdate";

export default function Custom({ children, title, variant }: CustomProps) {
  const sectionVariants: Record<CustomVariants, string> = {
    midPatchUpdate: "w-full mx-0 border-0 p-0 mb-5",
  };

  const childrenContainerVariants: Record<CustomVariants, string> = {
    midPatchUpdate: "border-0 p-0",
  };

  return (
    <section
      id={variant === "midPatchUpdate" ? "" : title}
      className={twMerge(
        "mx-auto mb-10 flex w-10/12 scroll-mt-28 flex-col",
        sectionVariants[variant],
      )}
    >
      <h1 className="patch-notes-subtitle z-10">{title}</h1>

      <div
        className={twMerge(
          `relative flex flex-col border-4 p-4`,
          childrenContainerVariants[variant],
        )}
      >
        <CutCorners variant={variant} />

        <div className="prose prose-patch-custom z-10 max-w-none p-2">
          {children}
        </div>
      </div>
    </section>
  );
}
