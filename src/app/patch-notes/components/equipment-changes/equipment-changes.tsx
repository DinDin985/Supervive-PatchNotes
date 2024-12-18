import Hr from "@/app/components/ui/hr";
import Image from "next/image";
import type { EquipmentChangesProps } from "../../types";
import CutCorners from "../ui/cut-corners";

export default function EquipmentChanges({
  children,
  equipmentImg,
}: EquipmentChangesProps) {
  return (
    <div className="mb-8 w-full">
      <div className={`relative flex w-full flex-col border-4 p-4`}>
        <CutCorners />

        <div className="flex w-full flex-1 items-center">
          <div className="flex flex-1 flex-col">
            <div className="prose prose-patch-equipment-changes mb-5 flex items-start">
              <div className="relative mr-3">
                <Image
                  src={equipmentImg}
                  className="sticky z-10 min-h-[80px] min-w-[80px] bg-white p-1"
                  width={80}
                  height={80}
                  layout="intrinsic"
                  alt="power icon"
                />
                <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
              </div>

              <div className="prose prose-patch-equipment-changes z-10">
                {children[0]}
                {children[1]}
              </div>
            </div>

            <div className="z-10 mb-5">{children[2]}</div>

            <Hr className="mb-6" />

            <div className="prose prose-patch-equipment-changes z-10">
              {children[3]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
