import Image from "next/image";
import NavbarButton from "./NavbarButton";
import { WorldLanguageDropDownMenu } from "./WorldLanguageDropDownMenu";

export default function Navbar() {
  return (
    <header className="nav-header fixed left-0 top-0 z-[9999] h-24 w-full bg-transparent">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black md:h-[calc(100%+20px)] md:clip-header">
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
      <div className="relative flex h-full justify-between px-2 xs:px-4 md:px-8">
        <div className="flex h-full items-center justify-start gap-20">
          <div className="w-[200px]">
            <a href="https://www.playsupervive.com/en-us">
              <Image
                src={"/nav-bar/supervive-logo.png"}
                width={170}
                height={80}
                alt="supervive logo"
              />
            </a>
          </div>
          <ul className="hidden h-full items-center justify-start 2xl:flex">
            <li className="font-tusker-6700 mx-4 flex h-full items-center justify-center whitespace-nowrap text-[1.15rem] uppercase">
              <a
                className="hover:text-neon-mint transition-all duration-300"
                href="http://accounts.theorycraftgames.com/"
              >
                Account
              </a>
            </li>
            <li className="font-tusker-6700 mx-4 flex h-full items-center justify-center whitespace-nowrap text-[1.15rem] uppercase">
              <a
                href="http://nexus.gg/supervive"
                className="hover:text-neon-mint transition-all duration-300"
              >
                Creators
              </a>
            </li>
            <li className="font-tusker-6700 mx-4 flex h-full items-center justify-center whitespace-nowrap text-[1.15rem] uppercase">
              <a
                href="http://accounts.theorycraftgames.com/"
                className="hover:text-neon-mint transition-all duration-300"
              >
                Refer-a-friend
              </a>
            </li>
            <li className="font-tusker-6700 mx-4 flex h-full items-center justify-center whitespace-nowrap text-[1.15rem] uppercase">
              <a
                href="https://drops.theorycraftgames.com/"
                className="hover:text-neon-mint transition-all duration-300"
              >
                Twitch Drops
              </a>
            </li>
          </ul>
        </div>
        <aside className="flex items-center justify-end gap-2 md:gap-8">
          <WorldLanguageDropDownMenu />
          <NavbarButton />
          <div className="hidden h-20 items-center justify-center gap-4 2xl:flex">
            <a href="https://www.playsupervive.com/en-us/supporter-packs">
              <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button after:bg-neon-mint group-hover:after:bg-pink group relative inline-flex !h-12 after:absolute after:inset-0 after:block after:rounded after:blur-lg">
                <span className="font-tusker-5700 _transition-colors from-neon-mint to-neon-purple group-hover:animate-border relative z-10 inline-flex !h-12 items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r p-px text-[2rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-white">
                  <span className="group-hover:bg-pink flex h-full items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 text-2xl">
                    Supporter Packs
                  </span>
                  <span className="shine-shim animate-shine"></span>
                </span>
              </span>
            </a>

            <a href="https://store.steampowered.com/app/1283700/SUPERVIVE/?utm_source=weblander&utm_campaign=OB&utm_medium=web">
              <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button after:bg-pink group-hover:after:bg-neon-mint group relative inline-flex !h-12 after:absolute after:inset-0 after:block after:rounded after:blur-lg">
                <span className="font-tusker-5700 _transition-colors from-pink to-neon-purple group-hover:animate-border relative z-10 inline-flex !h-12 items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r p-px text-[2rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-black">
                  <span className="group-hover:bg-neon-mint flex !h-12 items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 text-2xl">
                    Play Free
                  </span>
                  <span className="shine-shim animate-shine"></span>
                </span>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
