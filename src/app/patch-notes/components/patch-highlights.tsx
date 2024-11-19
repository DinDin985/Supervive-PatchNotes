import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

type PatchHighlightsProps = {
  patchHighlights: {
    video: string;
    notes: string;
  };
};

export default function PatchHighlights({
  patchHighlights,
}: PatchHighlightsProps) {
  const { video, notes } = patchHighlights;

  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Patch Highlights</h1>

      <div className="relative flex flex-col border-4 p-8">
        <CutCorners />

        <div className="relative mb-4 w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 z-10 h-full w-full"
            width="560"
            height="315"
            src={video}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Hr className="mb-4 self-center" />

        <p>&ldquo;{notes}&ldquo;</p>
      </div>
    </div>
  );
}
