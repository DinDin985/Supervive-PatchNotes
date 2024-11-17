import Image from "next/image";

export default function Post({ title, date, img, description }) {
  return (
    <div className="m-auto mt-10 flex w-10/12 flex-col items-center text-white md:m-0 md:w-11/12">
      <div className="group relative mb-3 flex aspect-video w-full items-center justify-center overflow-hidden bg-white lg:max-h-none">
        <Image
          src={img}
          className="w-full duration-300 ease-in-out group-hover:scale-105"
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
          alt="Patch notes cover art"
        />
        <span className="shine-shim group-hover:animate-shine"></span>
      </div>

      <div className="flex w-full flex-col font-tusker-6700 tracking-wider">
        <div className="flex items-center">
          <h1 className="text-lg text-neon-mint">{title}</h1>
          <span className="mx-2 font-tusker-5700">|</span>
          <h2 className="font-tusker-5700">{date}</h2>
        </div>

        <h2 className="font-tusker-5700 text-sm tracking-widest">
          {description}
        </h2>
      </div>
    </div>
  );
}
