import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { PowerChangesProps } from "../types";
import Adjustment from "./changes-format/adjustment";
import AdjustmentAndNewEffect from "./changes-format/adjustment-and-new-effect";
import NewEffect from "./changes-format/new-effect";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function PowerChanges({
  powerChanges,
  containerClassName,
  cutCornersClassName,
  marginVariant,
}: PowerChangesProps) {
  return (
    <div className={twMerge(`mb-8 w-full`, marginVariant)}>
      <h1 className="patch-notes-subtitle">Power Changes</h1>

      {powerChanges.map(({ name, img, description, notes, changes }, i) => {
        let imgName: string | string[] = name.split(" ");
        if (imgName[0] === "[NEW]") {
          imgName = imgName.slice(1);
        }

        imgName = imgName.join("-");

        return (
          <div
            key={i}
            className={twMerge(
              `${i === powerChanges.length - 1 ? "mb-0" : "mb-8"} relative flex flex-col border-4 p-4`,
              containerClassName,
            )}
          >
            <CutCorners className={cutCornersClassName} />

            <div className="mb-6 flex items-center">
              <div className="relative mr-3">
                <Image
                  src={img}
                  className="sticky z-10 bg-white"
                  width={80}
                  height={80}
                  layout="intrinsic"
                  alt="power icon"
                />
                <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
                  {name}
                </h2>

                <h2 className="text-sm text-neutral-300 md:text-base lg:text-lg">
                  {description}
                </h2>
              </div>
            </div>

            <div className="mb-2">
              {notes && <p className="mb-5">&ldquo;{notes}&ldquo;</p>}

              <Hr className="mx-auto mb-6" />

              {changes.map(({ type, changes }, i) => {
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
                  <div key={i} className="flex flex-col">
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
