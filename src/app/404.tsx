import Image from "next/image";

export default function Custom404() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center bg-black">
      <h1 className="z-10 mb-10 font-tusker-5700 text-6xl uppercase italic">
        404 Error - Page Not Found!
      </h1>

      <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button group relative inline-flex after:absolute after:inset-0 after:block after:rounded after:bg-pink after:blur-lg group-hover:after:bg-neon-mint">
        <span className="_transition-colors group-hover:animate-border relative z-10 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r from-pink to-neon-purple p-px font-tusker-5700 text-[1.5rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-black">
          <span className="flex items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 group-hover:bg-neon-mint">
            Go to home page
          </span>
          <span className="shine-shim animate-shine"></span>
        </span>
      </span>

      <Image
        src={"/not-found/background.png"}
        alt="Background Image"
        className="absolute -top-10 scale-125"
        width={500}
        height={500}
      />
    </div>
  );
}
