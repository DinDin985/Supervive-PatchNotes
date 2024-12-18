import type { MidPatchUpdatesProps } from "../../types";
import CutCorners from "../ui/cut-corners";

export default function MidPatchUpdates({
  children,
  title,
}: MidPatchUpdatesProps) {
  return (
    <section
      id="Mid Patch Updates"
      className="mx-auto mb-10 flex w-10/12 flex-col"
    >
      <h1 className="patch-notes-subtitle">{title}</h1>

      <div className={`relative flex flex-col border-4 p-4`}>
        <CutCorners />

        <div>{children}</div>
      </div>
    </section>
  );
}
