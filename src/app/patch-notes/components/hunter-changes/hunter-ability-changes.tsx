import Image from "next/image";
import type { HunterAbilityChangesProps } from "../../types";

export default function HunterAbilityChanges({
  children,
  abilityImg,
  abilityName,
}: HunterAbilityChangesProps) {
  return (
    <div className="mb-5 flex flex-col">
      <div className="relative mb-3 flex items-center">
        <div className="relative mr-3">
          <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
          <Image
            src={abilityImg}
            className={`${abilityImg.indexOf("LMB") > 0 ? "bg-black p-[2px]" : "bg-white"} sticky z-10`}
            width={60}
            height={60}
            layout="intrinsic"
            alt="ability icon"
          />
        </div>

        <h2 className="mb-0 text-base font-bold text-white">{abilityName}</h2>
      </div>

      <div className="prose prose-patch-hunter-ability-changes">{children}</div>
    </div>
  );
}
