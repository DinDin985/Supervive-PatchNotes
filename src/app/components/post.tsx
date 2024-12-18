import Image from "next/image";

interface PostProps {
  title: string;
  date: string;
  img: string;
  description: string;
}

export default function Post({ title, date, img, description }: PostProps) {
  return (
    <div className="m-auto mt-10 flex w-10/12 flex-col items-center text-white md:m-0 md:w-11/12">
      <div className="group relative mb-1 flex aspect-video w-full items-center justify-center overflow-hidden bg-white lg:max-h-none">
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

      <div className="flex w-full flex-col">
        <h2 className="text-sm tracking-wide">{date} |</h2>

        <h1 className="font-tusker-6700 text-lg tracking-[0.08em] text-neon-mint">
          {title}
        </h1>

        <h2>{description}</h2>
      </div>
    </div>
  );
}
