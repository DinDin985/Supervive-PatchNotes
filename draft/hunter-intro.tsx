import Image from "next/image";
import ImageEdgeBlur from "../src/app/patch-notes/components/ui/image-edge-blur";
import type { HunterIntroProps } from "../src/app/patch-notes/types";

export default function HunterIntro({
  children,
  imgBig,
  imgSmall,
}: HunterIntroProps) {
  console.log("CHILDREN");
  console.log(children);

  return (
    <div>
      <div className={`mb-5 flex lg:mb-0`}>
        <div className="relative mr-5">
          <ImageEdgeBlur />

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

        <div className="prose prose-patch-hunter-intro flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
