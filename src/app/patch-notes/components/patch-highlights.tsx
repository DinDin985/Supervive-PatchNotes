import Image from "next/image";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

type PatchHighlightsProps = {
  patchHighlights: {
    video?: string;
    img?: string;
    notes: string;
  };
};

export default function PatchHighlights({
  patchHighlights,
}: PatchHighlightsProps) {
  const { video, img, notes } = patchHighlights;

  return (
    <div className="mb-8 w-full">
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

        <p>&ldquo;{notes}&ldquo;</p>
      </div>
    </div>
  );
}
