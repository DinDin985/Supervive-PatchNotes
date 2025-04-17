"use client";
import Hr from "@/app/components/ui/hr";
import Image from "next/image";
import type { IntroductionProps } from "../../types";
import TableOfContents from "../table-of-contents/table-of-contents";

export default function Introduction({ children, img }: IntroductionProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="absolute -top-6 h-[400px] w-full overflow-hidden lg:border-b-2">
          <Image
            src={img}
            className="absolute left-0 top-0 hidden h-full w-full scale-125 blur-lg lg:block"
            width={500}
            height={300}
            layout="intrinsic"
            objectFit="cover"
            alt="background blured introduction image"
          />
        </div>

        <div className="absolute top-[500px] hidden h-[90%] w-full xl:block">
          <TableOfContents />
        </div>

        <div className="flex h-fit w-full flex-col items-center justify-center overflow-hidden text-center md:mt-16">
          <div className="z-10 mb-8 flex w-full items-center justify-center bg-white lg:min-h-[450px]">
            <Image
              src={img}
              className="z-10 max-w-[700px] object-cover lg:static lg:h-auto lg:max-h-[450px] lg:w-full lg:max-w-[800px] lg:border-2 xl:max-w-[1000px]"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              alt="introduction image"
            />
          </div>

          <div className="prose prose-patch-introduction">{children}</div>

          <Hr className="mb-20" />
        </div>
      </div>
    </div>
  );
}
