import Image from "next/image";

export default function Difficulty({
  difficultyLevel,
}: {
  difficultyLevel: string;
}) {
  return (
    <div className="prose-hunter-difficulty prose flex h-32 w-32 font-sm flex-col items-center justify-center border-2 uppercase">
      <Image
        className="m-2"
        src={`/hunters/difficulty/${difficultyLevel}.png`}
        width={50}
        height={50}
        alt=""
      />
      <h2>Difficulty</h2>
      <h2>{difficultyLevel}</h2>
    </div>
  );
}
