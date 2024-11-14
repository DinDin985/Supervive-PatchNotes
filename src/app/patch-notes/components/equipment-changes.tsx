import Image from "next/image";

export default function EquipmentChanges() {
  const equipmentChangesArray = [];

  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Equipment Changes</h1>
      <div className="flex flex-col rounded-md border-2 border-ui-light-grey p-4">
        <div className="mb-3 flex items-center">
          <Image
            src={"/patch-notes/equipment-icons/tech-sword.png"}
            className="mr-2 bg-white p-2"
            width={80}
            height={80}
            layout="intrinsic"
            alt="equipment icon"
          />
          <h2 className="text-xl font-bold">Tech Blade</h2>
        </div>

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
