import Image from "next/image";

export default function NavbarBackground() {
  return (
    <div className="absolute left-0 top-0 z-20 h-full w-full overflow-hidden bg-black md:h-[calc(100%+20px)] md:clip-header">
      <Image
        className="absolute left-0 top-0 h-full w-full"
        src={"/nav-bar/header-glow-right.png"}
        width={998}
        height={104}
        alt="background glow"
      />
      <Image
        className="absolute left-0 top-0 h-full"
        src={"/nav-bar/header-vector-1.png"}
        width={463}
        height={104}
        alt="background vector"
      />
      <Image
        className="absolute left-0 top-0 hidden h-full md:block"
        src={"/nav-bar/header-vector-2.png"}
        width={563}
        height={104}
        alt="background vector"
      />
      <Image
        className="absolute right-0 top-0 hidden h-full lg:block"
        src={"/nav-bar/header-vector-3.png"}
        width={728}
        height={104}
        alt="background vector"
      />
    </div>
  );
}
