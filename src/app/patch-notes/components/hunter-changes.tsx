"use client";
import Image from "next/image";
import Hr from "./hr";
import Adjustment from "./changes-format/adjustment";
import AdjustmentAndNewEffect from "./changes-format/adjustment-and-new-effect";
import NewEffect from "./changes-format/new-effect";
import ImageEdgeBlue from "./image-edge-blue";
import CutCorners from "./ui/cut-corners";

interface HunterChangesProps {
  hunterChanges: {
    name: string;
    imgSmall: string;
    imgBig: string;
    description: string;
    notes: string;
    changes: {
      type: string;
      abilityName: string;
      abilityImg: string;
      changes: (string | { part1: string; part2: string })[];
    }[];
  }[];
}

export default function HunterChanges({ hunterChanges }: HunterChangesProps) {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle lg:text-4xl">Hunter Changes</h1>

      {hunterChanges.map(
        ({ name, imgSmall, imgBig, description, notes, changes }, i) => {
          return (
            <div
              key={i}
              className={`${i === hunterChanges.length - 1 ? "mb-0" : "mb-8"} relative flex flex-col border-4 p-4 lg:flex-row`}
            >
              <CutCorners />

              <div className={`${notes !== "" ? "mb-5" : "mb-8"} flex lg:mb-0`}>
                <div className="relative mr-5 h-full">
                  <ImageEdgeBlue />

                  <Image
                    src={imgSmall}
                    className="relative z-10 min-h-[100px] min-w-[100px] lg:hidden"
                    width={100}
                    height={100}
                    alt="hunter small image"
                  />

                  <Image
                    src={imgBig}
                    className="sticky top-[150px] z-10 hidden min-w-[175px] lg:block"
                    width={175}
                    height={100}
                    alt="hunter big image"
                  />

                  <div className="absolute -bottom-[5px] -left-[12px] hidden h-[30px] w-[45px] rotate-45 flex-col lg:flex">
                    <div className="w-full flex-1 bg-transparent"></div>
                    <div className="z-[9999] h-5 w-full"></div>
                    <div className="z-20 h-1/2 w-full bg-ui-dark-purple blur-[3px]"></div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl">
                    {name}
                  </h2>

                  <h2 className="text-sm text-neutral-300 md:text-base lg:mb-4 lg:text-base">
                    {description}
                  </h2>

                  <div className="hidden lg:block">
                    {notes && <p className="mb-5">&ldquo;{notes}&ldquo;</p>}

                    <Hr className="mx-auto mb-8 w-11/12" />

                    {changes.map(
                      ({ type, abilityImg, abilityName, changes }, i) => {
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
                                  <AdjustmentAndNewEffect
                                    key={i}
                                    change={change}
                                  />
                                );
                              })}
                            </ul>
                          );
                        }

                        return (
                          <div key={i} className="mb-5 flex flex-col">
                            <div className="relative mb-3 flex items-center">
                              <div className="relative mr-3">
                                <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
                                <Image
                                  src={abilityImg}
                                  className={`${abilityImg.indexOf("LMB") > 0 ? "bg-black p-[2px]" : "bg-white"} sticky z-10`}
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  alt="ability icon"
                                />
                              </div>

                              <h2 className="font-bold">{abilityName}</h2>
                            </div>

                            {changeFormat}
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:hidden">
                {notes && <p className="mb-5">&ldquo;{notes}&ldquo;</p>}

                <Hr className="mx-auto mb-8" />

                {changes.map(
                  ({ type, abilityImg, abilityName, changes }, i) => {
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
                        <div className="mb-3 flex items-center">
                          <div className="relative mr-3">
                            <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
                            <Image
                              src={abilityImg}
                              className={`${abilityImg.indexOf("LMB") > 0 ? "bg-black p-[2px]" : "bg-white"} sticky z-10`}
                              width={60}
                              height={60}
                              layout="intrinsic"
                              alt="ability icon"
                            />
                          </div>
                          <h2 className="font-bold">{abilityName}</h2>
                        </div>

                        {changeFormat}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}
