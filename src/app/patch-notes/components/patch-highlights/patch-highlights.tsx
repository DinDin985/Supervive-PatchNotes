import Image from "next/image";
import type { ReactNode } from "react";
import Hr from "../../../components/ui/hr";
import CutCorners from "../ui/cut-corners";

export type PatchHighlightsProps = {
  children: ReactNode;
  img?: string;
  video?: string;
};

export default function PatchHighlights({
  children,
  img,
  video,
}: PatchHighlightsProps) {
  return (
    <section id="Patch Highlights" className="mx-auto mb-10 flex w-10/12 flex-col">
      <h1 className="patch-notes-subtitle">Patch Highlights</h1>

      <div className="relative flex flex-col border-4 p-8">
        <CutCorners />

        <div className={`${video ? "pb-[56.25%]" : ""} relative mb-4 w-full`}>
          {video && (
            <iframe
              className="absolute left-0 top-0 z-10 h-full w-full"
              width="560"
              height="315"
              src={video}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          {img && (
            <Image
              src={img}
              width={560}
              height={315}
              layout="responsive"
              objectFit="cover"
              alt="patch hightlight image"
            />
          )}
        </div>

        <Hr className="mb-4 self-center" />

        <div className="prose prose-patch-highlights z-10">{children}</div>
      </div>
    </section>
  );
}
