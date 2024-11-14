import Image from "next/image";

export default function PatchHighlights() {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Patch Highlights</h1>
      <div className="rounded-md border-2 border-ui-light-grey p-4">
        <Image
          src={"/patch-notes/patch-notes-highlight.png"}
          className="mb-4 w-full"
          width={500}
          height={500}
          layout="intrinsic"
          alt="patch hightlight"
        />
        <p>
          &#34; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
          amet neque velit. Nam tempus tincidunt purus vitae posuere. Aliquam
          ultricies vulputate cursus. Curabitur non odio accumsan, sagittis
          ligula et, lobortis tellus. In pulvinar libero magna, quis tristique
          turpis maximus ac. &#34;
        </p>
      </div>
    </div>
  );
}
