import Image from "next/image";
import Hr from "./hr";

export default function Introduction() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center md:mt-12">
        <div className="absolute top-16 h-[400px] w-full overflow-hidden lg:border-b-2">
          <Image
            src={"/patch-notes/supervive-wallpaper.png"}
            className="absolute left-0 top-0 hidden h-full w-full scale-125 blur-lg lg:block"
            width={500}
            height={300}
            layout="intrinsic"
            objectFit="cover"
            alt="introduction image"
          />
        </div>

        <div className="flex h-fit w-full flex-col items-center justify-center overflow-hidden">
          <Image
            src={"/patch-notes/supervive-wallpaper.png"}
            className="z-10 mb-8 max-w-[700px] lg:static lg:h-auto lg:w-full lg:max-w-[800px] lg:border-2 xl:max-w-[1000px]"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
            alt="introduction image"
          />

          {/* <div className="absolute h-[300px] w-full bg-black"></div> */}

          <h1 className="mb-4 font-tusker-6700 text-4xl italic tracking-wider">
            Patch Notes 1.00
          </h1>

          <h2 className="mb-1 font-tusker-6700 text-xl tracking-wider">
            Description
          </h2>

          <div className="mb-6 flex text-sm tracking-wider">
            <h2 className="mr-1 font-quicksand">Author | </h2>
            <h2 className="font-quicksand">Date</h2>
          </div>

          <Hr className="mb-20" />
        </div>
      </div>
    </div>
  );
}
