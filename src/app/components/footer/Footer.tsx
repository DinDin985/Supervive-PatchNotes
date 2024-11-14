import Image from "next/image";

export default function Footer() {
  const links = [
    {
      name: "Steam",
      link: "https://store.steampowered.com/app/1283700/SUPERVIVE/",
      image: "/footer/steam.png",
      alt: "steam logo",
    },
    {
      name: "Discord",
      link: "https://discord.com/invite/supervive",
      image: "/footer/discord.png",
      alt: "discord logo",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@theorycraftgames",
      image: "/footer/youtube.png",
      alt: "youtube logo",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@playsupervive",
      image: "/footer/tiktok.png",
      alt: "tikTok logo",
    },
    {
      name: "Twitch",
      link: "https://www.twitch.tv/directory/category/supervive",
      image: "/footer/twitch.png",
      alt: "twitch logo",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/theorycraftgames",
      image: "/footer/instagram.png",
      alt: "instagram logo",
    },
    {
      name: "X",
      link: "https://x.com/playSUPERVIVE",
      image: "/footer/x.png",
      alt: "x logo",
    },
  ];

  return (
    <footer className="relative w-full bg-[#111214] bg-footer-texture bg-bottom bg-no-repeat pb-20 pt-10 text-white xl:bg-cover">
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="h-full px-[5.55%] 2xl:px-0">
          <div className="purple-gradient-border border-t">
            <div className="flex flex-col-reverse justify-between pt-8 lg:flex-row">
              <div className="flex flex-col items-center justify-between space-y-6 pt-10 lg:items-start lg:pt-0">
                <div>
                  <a href="https://www.playsupervive.com/en-us">
                    <Image
                      className="transition-opacity duration-300 hover:opacity-80 lg:mx-0"
                      src="/footer/supervive-logo.png"
                      height={90}
                      width={225}
                      alt="supervive logo"
                    />
                  </a>
                  <p className="text-pretty pt-3 text-center text-xl lg:text-left">
                    Open Beta 11/20/2024
                  </p>
                </div>
                <div className="flex flex-col items-center lg:block">
                  <a
                    href="https://www.playsupervive.com/en-us/privacy-policy"
                    className="decoration-ui-light-grey-alt underline decoration-dotted underline-offset-8 hover:decoration-pink hover:decoration-solid active:bg-neon-mint active:text-black active:no-underline"
                  >
                    Privacy Policy
                  </a>
                  <div className="pt-10 text-ui-light-grey">
                    <p>SUPERVIVE and the SUPERVIVE logo are trademarks of </p>
                    <a href="https://www.theorycraftgames.com">
                      Theorycraft Games
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="md:bg-pink-400 inline-block">
                  <ul className="mx-auto mb-12 flex max-w-[400px] flex-wrap justify-between gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-8 md:max-w-none md:justify-center lg:justify-end">
                    {links.map(({ name, link, image }, i) => {
                      return (
                        <li key={i} className="w-[90px]">
                          <a
                            className="btn btn-hover before:shine-shim relative flex aspect-square flex-shrink-0 items-center justify-center overflow-hidden rounded border border-ui-light-grey hover:border-pink hover:bg-pink active:border-neon-mint active:bg-neon-mint active:text-black lg:max-w-[90px]"
                            href={link}
                          >
                            <Image src={image} width={75} height={75} alt="" />
                            <span className="sr-only">{name}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-center lg:justify-end">
                    <div className="inline-flex flex-col space-y-3">
                      <a
                        className="w-full"
                        href="https://drive.google.com/drive/folders/197PDN3UYOQ5peQ-eqX-sGaxujFsxLag2"
                      >
                        <span className="group flex">
                          <span className="_transition-colors bg-ui-black relative z-10 flex w-full items-center justify-center overflow-hidden whitespace-nowrap rounded border border-ui-light-grey px-4 font-tusker-5700 text-2xl font-medium uppercase italic leading-none text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:border-pink group-hover:bg-pink group-active:border-neon-mint group-active:bg-neon-mint group-active:text-black">
                            <span className="flex items-center justify-center whitespace-nowrap px-4 py-2 text-[1.1rem] tracking-wide">
                              <Image
                                className="mr-2 invert"
                                src="/footer/download-symbol.png"
                                width={24}
                                height={24}
                                alt="download symbol"
                              />
                              DOWNLOAD THE CREATOR AND PRESS KIT
                            </span>
                            <span className="shine-shim animate-shine"></span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="after flex items-center gap-5 pt-4 before:block before:h-px before:w-full before:bg-gradient-to-r before:from-neon-purple before:to-neon-purple-lighter after:block after:h-px after:w-full after:bg-gradient-to-r after:from-neon-purple-lighter after:to-neon-purple">
              <Image
                src="/footer/supervive-icon.png"
                width={41}
                height={80}
                alt="supervive logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
