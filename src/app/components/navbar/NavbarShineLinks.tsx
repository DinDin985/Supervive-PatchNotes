export default function NavbarShineLinks() {
  return (
    <div className="hidden h-20 items-center justify-center gap-4 2xl:flex">
      <a href="https://www.playsupervive.com/en-us/supporter-packs">
        <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button group relative inline-flex !h-12 after:absolute after:inset-0 after:block after:rounded after:bg-neon-mint after:blur-lg group-hover:after:bg-pink">
          <span className="_transition-colors group-hover:animate-border relative z-10 inline-flex !h-12 items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r from-neon-mint to-neon-purple p-px font-tusker-5700 text-[2rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-white">
            <span className="flex h-full items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 text-2xl group-hover:bg-pink">
              Supporter Packs
            </span>
            <span className="shine-shim animate-shine"></span>
          </span>
        </span>
      </a>

      <a href="https://store.steampowered.com/app/1283700/SUPERVIVE/?utm_source=weblander&utm_campaign=OB&utm_medium=web">
        <span className="group-hover:after:animate-pulse-button-hover after:animate-pulse-button group relative inline-flex !h-12 after:absolute after:inset-0 after:block after:rounded after:bg-pink after:blur-lg group-hover:after:bg-neon-mint">
          <span className="_transition-colors group-hover:animate-border relative z-10 inline-flex !h-12 items-center justify-center overflow-hidden whitespace-nowrap rounded bg-gradient-to-r from-pink to-neon-purple p-px font-tusker-5700 text-[2rem] font-medium uppercase italic leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group-hover:from-[rgba(255,255,255,0.5)] group-hover:to-[rgba(255,255,255,0)] group-hover:bg-[length:200%_200%] group-hover:text-black">
            <span className="flex !h-12 items-center justify-center whitespace-nowrap rounded-[3px] px-6 py-4 text-2xl group-hover:bg-neon-mint">
              Play Free
            </span>
            <span className="shine-shim animate-shine"></span>
          </span>
        </span>
      </a>
    </div>
  );
}
