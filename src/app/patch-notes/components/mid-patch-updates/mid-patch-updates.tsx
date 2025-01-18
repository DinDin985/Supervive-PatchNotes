import Hr from "@/app/components/ui/hr";
import type { MidPatchUpdatesProps } from "../../types";
import CutCorners from "../ui/cut-corners";

export default function MidPatchUpdates({
  children,
  title,
}: MidPatchUpdatesProps) {
  return (
    <section
      id="Mid Patch Updates"
      className="mx-auto mb-10 flex w-10/12 scroll-mt-28 flex-col"
    >
      <h1 className="patch-notes-subtitle">{title}</h1>

      <div className={`relative flex flex-col border-4 p-4`}>
        <CutCorners />

        <div>
          {Array.isArray(children) &&
            children.map((element, i) => {
              return children.length - 1 !== i ? (
                <div key={i}>
                  {element}
                  <Hr className="mb-5" />
                </div>
              ) : (
                <div key={i}>{element}</div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
