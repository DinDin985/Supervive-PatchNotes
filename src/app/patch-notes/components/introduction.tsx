import Image from "next/image";
import Hr from "./hr";

export default function Introduction() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-fit w-full flex-col items-center justify-center overflow-hidden">
        <Image
          src={"/patch-notes/supervive-wallpaper.png"}
          className="mb-8"
          width={500}
          height={300}
          layout="intrinsic"
          objectFit="cover"
          alt="introduction image"
        />
        <h1 className="mb-4 font-tusker-6700 text-4xl italic tracking-wider">
          Patch Notes 1.00
        </h1>

        <h2 className="mb-1 font-tusker-6700 text-xl tracking-wider">
          Description
        </h2>

        <div className="mb-4 flex text-sm tracking-wider">
          <h2 className="font-quicksand mr-1">Author | </h2>
          <h2 className="font-quicksand">Date</h2>
        </div>

        <Hr className="mb-20" />
      </div>
    </div>
  );
}
