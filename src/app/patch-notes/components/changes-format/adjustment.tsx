import Image from "next/image";

interface AdjustmentProps {
  change: {
    part1: string;
    part2: string;
  };
}

export default function Adjustment({ change }: AdjustmentProps) {
  const { part1, part2 } = change;

  return (
    <li>
      <p className="inline">
        <span className="mr-1">{part1}</span>
        <Image
          src={"/patch-notes/right-arrow.png"}
          className="mb-1 mr-2 inline"
          width={20}
          height={20}
          layout="intrinsic"
          alt="right arrow"
        />
        {part2}
      </p>
    </li>
  );
}
