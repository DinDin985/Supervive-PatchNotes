import Image from "next/image";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function SystemChanges({ title }) {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">System Changes</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />

        <div>
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl font-bold">Gliders</h2>
            <p> n n
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sit amet neque velit. Nam tempus tincidunt purus vitae posuere.
              Aliquam ultricies vulputate cursus.&ldquo;
            </p>
          </div>

          <Hr className="mx-auto mb-5" />

          <ul className="mb-5 list-disc pl-6">
            <li>
              <div className="flex items-center">
                <p className="mr-2">Initial Glider Speed: 300</p>
                <Image
                  src={"/patch-notes/right-arrow.png"}
                  className="mr-2"
                  width={20}
                  height={20}
                  layout="intrinsic"
                  alt="right arrow"
                />
                <p>250</p>
              </div>
            </li>
          </ul>
        </div>

        <Hr className="mx-auto mb-5" />

        <div>
          <div className="mb-5 space-y-2">
            <h2 className="text-2xl font-bold">Monsters</h2>
            <p>
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sit amet neque velit. Nam tempus tincidunt purus vitae posuere.
              Aliquam ultricies vulputate cursus.&ldquo;
            </p>
          </div>

          <Hr className="mx-auto mb-5" />

          <ul className="mb-5 list-disc pl-6">
            <li>
              <div className="flex items-center">
                <p className="mr-2">Monster Gold Drop: 100</p>
                <Image
                  src={"/patch-notes/right-arrow.png"}
                  className="mr-2"
                  width={20}
                  height={20}
                  layout="intrinsic"
                  alt="right arrow"
                />
                <p>200</p>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <p className="mr-2">Monster EXP: 250</p>
                <Image
                  src={"/patch-notes/right-arrow.png"}
                  className="mr-2"
                  width={20}
                  height={20}
                  layout="intrinsic"
                  alt="right arrow"
                />
                <p>300</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
