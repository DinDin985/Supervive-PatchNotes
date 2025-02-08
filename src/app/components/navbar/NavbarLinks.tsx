import { MoreMenu } from "./MoreMenu";
import NavbarLogo from "./NavbarLogo";

export default function NavbarLinks() {
  const links = [
    { name: "Patch Notes", href: "/patch-notes" },
    { name: "Hunters", href: "/hunters" },
    { name: "News", href: "/news" },
  ];

  return (
    <div className="flex h-full items-center justify-start gap-20">
      <NavbarLogo />

      <ul className="hidden h-full items-center justify-start 2xl:flex">
        {links.map(({ name, href }, i) => {
          return (
            <li
              key={i}
              className="mx-4 flex h-full items-center justify-center whitespace-nowrap font-tusker-6700 text-[1.15rem] uppercase"
            >
              <a
                className="transition-all duration-300 hover:text-neon-mint"
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}

        <MoreMenu />
      </ul>
    </div>
  );
}
