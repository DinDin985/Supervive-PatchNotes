import Adjustment from "./changes-format/adjustment";
import AdjustmentAndNewEffect from "./changes-format/adjustment-and-new-effect";
import NewEffect from "./changes-format/new-effect";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

interface SystemChangesProps {
  systemChanges: {
    title: string;
    notes: string;
    changes: {
      type: string;
      subtitle?: string;
      changes: (
        | string
        | {
            systemSpecificName: string;
            changeList: (
              | string
              | {
                  part1: string;
                  part2: string;
                }
            )[];
          }
      )[];
    }[];
  }[];
}

export default function SystemChanges({ systemChanges }: SystemChangesProps) {
  console.log(systemChanges);
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">System Changes</h1>

      {systemChanges.map(({ title, notes, changes }, i) => {
        return (
          <div
            key={i}
            className={`${i === systemChanges.length - 1 ? "mb-0" : "mb-8"} relative flex flex-col border-4 p-4`}
          >
            <CutCorners />

            <div>
              <div className="mb-5 space-y-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                {notes && (
                  <p>
                    &ldquo;
                    {notes}
                    &ldquo;
                  </p>
                )}
              </div>

              <Hr className="mx-auto mb-5" />

              {changes.map(({ type, subtitle, changes }, i) => {
                let changeFormat: JSX.Element | null = null;

                if (type === "adjustment") {
                  changeFormat = (
                    <ul key={i} className="list-disc pl-6">
                      {changes.map((change, i) => {
                        return typeof change === "object" ? (
                          <Adjustment key={i} change={change} />
                        ) : null;
                      })}
                    </ul>
                  );
                } else if (type === "newEffect") {
                  changeFormat = (
                    <ul key={i} className="list-disc pl-6">
                      {changes.map((change, i) => {
                        return typeof change === "string" ? (
                          <NewEffect key={i} change={change} />
                        ) : null;
                      })}
                    </ul>
                  );
                } else {
                  changeFormat = (
                    <ul key={i} className="list-disc pl-6">
                      {changes.map((change, i) => {
                        return (
                          <AdjustmentAndNewEffect key={i} change={change} />
                        );
                      })}
                    </ul>
                  );
                }

                return (
                  <div key={i} className="mb-5 flex flex-col">
                    <h2>{subtitle}</h2>
                    {changeFormat}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
