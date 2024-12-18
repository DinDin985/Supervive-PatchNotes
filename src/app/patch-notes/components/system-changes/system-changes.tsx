import { SystemChangesProps } from "../../types";
import CutCorners from "../ui/cut-corners";

export default function SystemChanges({ children }: SystemChangesProps) {
  return (
    <div className="mb-8 w-full">
      <div className={`relative flex flex-col border-4 p-4`}>
        <CutCorners />

        <div className="prose prose-patch-system-changes z-10 w-full max-w-none pb-2">
          {children}
        </div>
      </div>
    </div>
  );
}
