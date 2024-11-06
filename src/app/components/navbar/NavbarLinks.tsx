import NavbarLogo from "./NavbarLogo";

export default function NavbarLinks() {
  const links = [
    { name: "Account", url: "http://accounts.theorycraftgames.com/" },
    { name: "Creators", url: "http://nexus.gg/supervive" },
    { name: "Refer-a-friend", url: "http://accounts.theorycraftgames.com/" },
    { name: "Twitch Drops", url: "https://drops.theorycraftgames.com/" },
    { name: "Patch Notes", url: "/patch-notes" },
  ];

  return (
    <div className="flex h-full items-center justify-start gap-20">
      <NavbarLogo />

      <ul className="hidden h-full items-center justify-start 2xl:flex">
        {links.map(({ name, url }, i) => {
          return (
            <li
              key={i}
              className="mx-4 flex h-full items-center justify-center whitespace-nowrap font-tusker-6700 text-[1.15rem] uppercase"
            >
              <a
                className="transition-all duration-300 hover:text-neon-mint"
                href={url}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
