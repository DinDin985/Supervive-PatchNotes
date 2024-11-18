import Image from "next/image";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function PatchHighlights({ img, notes }) {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Patch Highlights</h1>

      <div className="relative flex flex-col border-4 p-8">
        <CutCorners />

        <Image
          src={img}
          className="mb-4 w-full"
          width={500}
          height={500}
          layout="intrinsic"
          alt="patch hightlight"
        />

        <Hr className="mb-4 self-center" />

        <p>
        {/* {notes} */}
        </p>
      </div>
    </div>
  );
}
