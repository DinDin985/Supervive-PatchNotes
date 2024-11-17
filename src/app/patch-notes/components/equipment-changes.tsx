import Image from "next/image";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function EquipmentChanges() {
  const equipmentChangesArray = [];

  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Equipment Changes</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />

        <div className="mb-6 flex items-center">
          <Image
            src={"/patch-notes/equipment-icons/tech-sword.png"}
            className="mr-2 bg-white p-2"
            width={80}
            height={80}
            layout="intrinsic"
            alt="equipment icon"
          />

          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-xl font-bold">Tech Blade</h2>

            <h2 className="text-sm text-neutral-300 md:text-base lg:text-xl">
              Description
            </h2>
          </div>
        </div>

        <Hr className="mx-auto mb-6" />

        <ul className="list-disc pl-6">
          <li>
            <div className="flex items-center">
              <p className="mr-2">Ability Power: 160</p>
              <Image
                src={"/patch-notes/right-arrow.png"}
                className="mr-2"
                width={20}
                height={20}
                layout="intrinsic"
                alt="right arrow"
              />
              <p>170</p>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <p className="mr-2">Ability Haste: 16%</p>
              <Image
                src={"/patch-notes/right-arrow.png"}
                className="mr-2"
                width={20}
                height={20}
                layout="intrinsic"
                alt="right arrow"
              />
              <p>18%</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
