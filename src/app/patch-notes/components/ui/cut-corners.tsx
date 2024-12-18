import { twMerge } from "tailwind-merge";

type cutCornersVariants = "midPatchUpdate";

interface cutCornersProps {
  variant?: cutCornersVariants;
}

export default function CutCorners({ variant }: cutCornersProps) {
  const cutCornersVariants = {
    midPatchUpdate: "hidden",
  };

  const variantKey = variant ? cutCornersVariants[variant] : "";

  return (
    <div className={twMerge(`absolute left-0 top-0 h-full w-full`, variantKey)}>
      <div className="absolute -bottom-[18px] -left-[10px] flex h-[60px] w-[45px] rotate-45 flex-col">
        <div className="w-full flex-1 bg-transparent"></div>
        <div className="h-1 bg-white"></div>
        <div className="z-20 h-1/2 w-full bg-ui-dark-purple"></div>
      </div>

      <div className="absolute -right-[10px] -top-[18px] flex h-[60px] w-[45px] -rotate-[135deg] flex-col">
        <div className="w-full flex-1 bg-transparent"></div>
        <div className="h-1 bg-white"></div>
        <div className="z-20 h-1/2 w-full bg-ui-dark-purple"></div>
      </div>
    </div>
  );
}
