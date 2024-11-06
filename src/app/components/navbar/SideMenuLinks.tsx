import { motion } from "framer-motion";

export default function SidemenuLinks() {
  const links = [
    { name: "Account", url: "http://accounts.theorycraftgames.com/" },
    { name: "Creators", url: "http://nexus.gg/supervive" },
    { name: "Refer-a-friend", url: "http://accounts.theorycraftgames.com/" },
    { name: "Twitch Drops", url: "https://drops.theorycraftgames.com/" },
    { name: "Patch Notes", url: "/patch-notes" },
  ];

  const ulVariants = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.3 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const liVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, duration: 0.1 },
        opacity: { duration: 0.1 },
      },
    },
  };

  return (
    <nav className="fixed flex h-full w-full items-center justify-center">
      <motion.ul variants={ulVariants} className="flex flex-col text-center">
        {links.map(({ name, url }, i) => {
          return (
            <motion.li
              key={i}
              variants={liVariants}
              className={`mx-4 mt-3 flex h-full items-center justify-center font-tusker-5700 text-5xl uppercase italic xs:text-5xl sm:text-6xl`}
            >
              <a
                className="transition-colors duration-300 hover:text-neon-mint"
                href={url}
              >
                {name}
              </a>
            </motion.li>
          );
        })}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 md:mt-24 lg:mt-32">
          <a
            className="w-full"
            href="https://www.playsupervive.com/en-us/supporter-packs"
          >
            <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button group relative inline-flex w-full after:absolute after:inset-0 after:block after:rounded after:bg-neon-mint after:blur-lg group-hover:after:bg-pink">
              <span className="_transition-colors group-hover:animate-border relative z-10 inline-flex w-full items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r from-neon-mint to-neon-purple p-px font-tusker-5700 text-[1.5rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-white">
                <span className="flex w-full items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 group-hover:bg-pink">
                  Supporter Packs
                </span>
                <span className="shine-shim animate-shine"></span>
              </span>
            </span>
          </a>

          <a
            className="w-full"
            href="https://store.steampowered.com/app/1283700/SUPERVIVE/?utm_source=weblander&utm_campaign=OB&utm_medium=web"
          >
            <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button group relative inline-flex w-full after:absolute after:inset-0 after:block after:rounded after:bg-pink after:blur-lg group-hover:after:bg-neon-mint">
              <span className="_transition-colors group-hover:animate-border relative z-10 inline-flex w-full items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r from-pink to-neon-purple p-px font-tusker-5700 text-[1.5rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-black">
                <span className="flex w-full items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 group-hover:bg-neon-mint">
                  Play Free
                </span>
                <span className="shine-shim animate-shine"></span>
              </span>
            </span>
          </a>
        </div>
      </motion.ul>
    </nav>
  );
}
