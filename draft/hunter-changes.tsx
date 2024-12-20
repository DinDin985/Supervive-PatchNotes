import Image from "next/image";
import Hr from "../src/app/components/ui/hr";
import CutCorners from "../src/app/patch-notes/components/ui/cut-corners";

export default function HunterChanges() {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Hunter Changes</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />
        <div className="mb-8 flex">
          <div className="relative mr-5 w-fit p-1">
            <div className="absolute inset-0 z-0 h-full w-full bg-white blur-sm"></div>
            <Image
              src={"/patch-notes/hunter-icons/bishop.png"}
              className="relative z-10"
              width={100}
              height={100}
              alt="hunter icon"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold">Bishop</h2>
            <h2 className="text-sm text-neutral-300">Description</h2>
          </div>
        </div>

        <p className="mb-5">
          &#34; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
          amet neque velit. Nam tempus tincidunt purus vitae posuere. Aliquam
          ultricies vulputate cursus. Curabitur non odio accumsan, sagittis
          ligula et, lobortis tellus. In pulvinar libero magna, quis tristique
          turpis maximus ac. &#34;
        </p>

        <Hr className="mx-auto mb-8" />

        <div className="flex flex-col">
          <div className="mb-3 flex items-center">
            <Image
              src={"/patch-notes/misc-icons/balance-team-icon.png"}
              className="mr-2 bg-white p-2"
              width={60}
              height={60}
              layout="intrinsic"
              alt="ability icon"
            />
            <h2 className="font-bold">R - Blastoff!</h2>
          </div>

          <ul className="list-disc pl-6">
            <li>Turn Rate: -10%</li>
            <li>Detination Radius: -25%</li>
            <li>
              <div className="items-cen flex">
                <p className="mr-2">Max Stun Duration: 1.4s</p>
                <Image
                  src={"/patch-notes/right-arrow.png"}
                  className="mr-2"
                  width={20}
                  height={20}
                  layout="intrinsic"
                  alt="right arrow"
                />
                <p>1.2s</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
