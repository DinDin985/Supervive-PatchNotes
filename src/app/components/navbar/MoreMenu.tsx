import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const navigation = [
  { name: "Account", href: "http://accounts.theorycraftgames.com/" },
  { name: "Creators", href: "http://nexus.gg/supervive" },
  { name: "Refer-a-friend", href: "http://accounts.theorycraftgames.com/" },
  { name: "Twitch Drops", href: "https://drops.theorycraftgames.com/" },
];

export function MoreMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="mx-4 flex items-center justify-center whitespace-nowrap font-tusker-6700 text-[1.15rem] uppercase transition-all duration-300 hover:text-neon-mint"
          variant="nav"
          size="nav"
        >
          More ↓
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="z-[9999] w-56 bg-black">
        <DropdownMenuGroup>
          {navigation.map((menuItem) => {
            return (
              <DropdownMenuItem
                className="cursor-pointer"
                asChild
                key={menuItem.name}
              >
                <Link key={menuItem.name} href={menuItem.href} scroll={true}>
                  {menuItem.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
