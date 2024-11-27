import type { MidPatchUpdatesProps } from "../types";
import BugFixes from "./bug-fixes";
import Custom from "./custom";
import EquipmentChanges from "./equipment-changes";
import Hr from "./hr";
import HunterChanges from "./hunter-changes";
import PowerChanges from "./power-changes";
import SystemChanges from "./system-changes";
import CutCorners from "./ui/cut-corners";

export default function MidPatchUpdates({
  midPatchUpdates,
}: MidPatchUpdatesProps) {
  const {
    title,
    custom,
    systemChanges,
    hunterChanges,
    equipmentChanges,
    powerChanges,
    bugFixesList,
  } = midPatchUpdates;
  console.log(midPatchUpdates);

  return (
    <div className="mb-8">
      <h1 className="patch-notes-subtitle">{title}</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />

        <div className="relative flex flex-col border-ui-dark-purple bg-ui-dark-purple">
          {custom?.map((customData, i) => {
            return (
              <div key={i} className="">
                <Custom
                  containerClassName="border-0 p-0"
                  cutCornersClassName="hidden"
                  marginVariant="mb-2"
                  custom={customData}
                />

                <Hr
                  className={`${i === custom.length - 1 ? "hidden" : ""} mx-auto mb-5`}
                />
              </div>
            );
          })}

          {systemChanges && <Hr className="mx-auto mb-8" />}

          {systemChanges && (
            <div className="">
              <SystemChanges
                containerClassName="border-0 p-0"
                cutCornersClassName="hidden"
                marginVariant="mb-2"
                systemChanges={systemChanges}
              />
            </div>
          )}

          {hunterChanges && <Hr className="mx-auto mb-8" />}

          {hunterChanges && (
            <div className="">
              <HunterChanges
                containerClassName="border-0 p-0"
                cutCornersClassName="hidden"
                hunterChanges={hunterChanges}
              />
            </div>
          )}

          {equipmentChanges && <Hr className="mx-auto mb-8" />}

          {equipmentChanges && (
            <div className="">
              <EquipmentChanges
                containerClassName="border-0 p-0"
                cutCornersClassName="hidden"
                marginVariant="mb-5"
                equipmentChanges={equipmentChanges}
              />
            </div>
          )}

          {powerChanges && <Hr className="mx-auto mb-8" />}

          {powerChanges && (
            <div className="">
              <PowerChanges
                containerClassName="border-0 p-0"
                cutCornersClassName="hidden"
                marginVariant="mb-5"
                powerChanges={powerChanges}
              />
            </div>
          )}

          {bugFixesList && <Hr className="mx-auto mb-8" />}

          {bugFixesList && (
            <BugFixes
              containerClassName="border-0 p-0"
              cutCornersClassName="hidden"
              bugFixes={bugFixesList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
