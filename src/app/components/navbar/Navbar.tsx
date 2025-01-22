import { WorldLanguageDropDownMenu } from "../WorldLanguageDropDownMenu";
import NavbarBackground from "./NavbarBackground";
import NavbarLinks from "./NavbarLinks";
import NavbarShineLinks from "./NavbarShineLinks";
import NavbarSidemenuToggle from "./NavbarSidemenuToggle";

export default function Navbar() {
  return (
    <header className="nav-header fixed left-0 top-0 z-[9999] h-24 w-full bg-transparent">
      <NavbarBackground />

      <div className="relative z-20 flex h-full justify-between bg-left-bottom px-2 xs:px-4 md:px-8">
        <NavbarLinks />

        <aside className="flex items-center justify-end gap-2 md:gap-8">
          <WorldLanguageDropDownMenu />
          <NavbarSidemenuToggle />
          <NavbarShineLinks />
        </aside>
      </div>
    </header>
  );
}
