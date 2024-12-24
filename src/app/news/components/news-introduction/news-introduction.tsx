"use client";
import Hr from "@/app/components/ui/hr";
import Image from "next/image";
import type { ReactNode } from "react";

export type NewsIntroductionProps = {
  children?: ReactNode;
  img?: string;
  video?: string;
};

export default function NewsIntroduction({
  children,
  img,
  video,
}: NewsIntroductionProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        {img && (
          <div className="absolute -top-6 h-[400px] w-full overflow-hidden lg:border-b-2">
            <Image
              src={img}
              className="absolute left-0 top-0 hidden h-full w-full scale-125 blur-lg lg:block"
              width={500}
              height={300}
              layout="intrinsic"
              objectFit="cover"
              alt="introduction image"
            />
          </div>
        )}

        <div className="flex h-fit w-full flex-col items-center justify-center overflow-hidden text-center md:mt-16">
          <div className="z-10 mb-8 flex w-full max-w-[800px] items-center justify-center bg-white lg:min-h-[400px]">
            {video && (
              <div className={`${video ? "pb-[56.25%]" : ""} relative w-full`}>
                <iframe
                  className="absolute left-0 top-0 z-10 h-full w-full"
                  width="560"
                  height="315"
                  src={video}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            {!video && img && (
              <Image
                src={img}
                className="z-10 max-w-[700px] lg:static lg:h-auto lg:w-full lg:max-w-[800px] lg:border-2 xl:max-w-[1000px]"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="introduction image"
              />
            )}
          </div>

          <div className="prose prose-patch-introduction max-w-none">
            {children}
          </div>

          <Hr className="mb-20" />
        </div>
      </div>
    </div>
  );
}
