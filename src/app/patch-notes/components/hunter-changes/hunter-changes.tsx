"use client";
import Hr from "@/app/components/ui/hr";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { HunterChangesProps } from "../../types";
import CutCorners from "../ui/cut-corners";
import ImageEdgeBlur from "../ui/image-edge-blur";

export default function HunterChanges({
  children,
  imgBig,
  imgSmall,
  variant,
}: HunterChangesProps) {
  const containerVariants = {
    midPatchUpdate: "mb-5",
  };

  const defaultVariants = {
    midPatchUpdate: "hidden",
  };

  const midPatchUpdateVariant = {
    midPatchUpdate: "flex-col",
  };

  return (
    <div className={twMerge("mb-8", containerVariants[variant])}>
      <div
        className={twMerge(
          `relative flex flex-col border-4 p-4`,
          defaultVariants[variant],
        )}
      >
        <Hr className={twMerge("hidden")} />

        <CutCorners variant={variant} />

        <div className={`mb-5 flex w-full lg:mb-0`}>
          <div className="relative mr-5 h-full lg:h-auto">
            <ImageEdgeBlur />

            <Image
              src={imgSmall}
              className={twMerge(
                "relative z-10 min-h-[100px] min-w-[100px] lg:hidden",
              )}
              width={100}
              height={100}
              alt="hunter small image"
            />

            <Image
              src={imgBig}
              className={twMerge(
                "sticky top-[150px] z-10 hidden min-w-[175px] lg:block",
              )}
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

          <div className="prose prose-patch-hunter-changes z-10 hidden max-w-none flex-1 lg:block">
            {children}
          </div>

          <div className="prose prose-patch-hunter-changes z-10 max-w-none lg:hidden">
            {children[0]}
            {children[1]}
          </div>
        </div>

        <div className="z-10 mb-5 lg:hidden">{children[2]}</div>

        <Hr className="mx-auto mb-8 lg:hidden" />

        <div className="prose prose-patch-hunter-changes z-10 max-w-none lg:hidden">
          {children[4]}
        </div>
      </div>

      <div className={(twMerge("hidden"), midPatchUpdateVariant[variant])}>
        <div className="mb-5 flex items-center p-2">
          <div className="relative mr-5 h-full lg:h-auto">
            <ImageEdgeBlur />

            <Image
              src={imgSmall}
              className={twMerge("relative z-10 min-h-[70px] min-w-[70px]")}
              width={70}
              height={70}
              alt="hunter small image"
            />
          </div>

          <div className="prose prose-patch-hunter-changes z-10 max-w-none">
            {children[0]}
          </div>
        </div>

        <Hr className="mb-5" />

        <div className="prose prose-patch-hunter-changes z-10 mx-auto w-11/12 max-w-none">
          {children[4]}
        </div>
      </div>
    </div>
  );
}
