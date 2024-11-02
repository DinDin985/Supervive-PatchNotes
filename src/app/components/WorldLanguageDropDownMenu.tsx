"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAtom } from "jotai";
import Image from "next/image";
import { toggleMenuAtom } from "../atoms/globalState";

export function WorldLanguageDropDownMenu() {
  const [position, setPosition] = React.useState("English (US)");
  const [toggleMenu] = useAtom(toggleMenuAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="group relative bg-transparent p-2 hover:bg-transparent"
        >
          <Image
            src="/nav-bar/world-language.svg"
            alt="world language button"
            width={32}
            height={32}
            className={`${toggleMenu ? "opacity-0" : "opacity-100"} object-contain transition-all duration-700 ease-in-out group-hover:hidden`}
          />
          <Image
            src="/nav-bar/world-language-green.svg"
            alt="world language button"
            width={32}
            height={32}
            className="hidden object-contain group-hover:block"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0 z-[9999] w-auto whitespace-nowrap bg-black">
        <DropdownMenuRadioGroup
          value={position}
          className="leading-3 text-white"
          onValueChange={setPosition}
        >
          <DropdownMenuRadioItem
            value="English (UK)"
            className="text-[.775rem] hover:text-neon-mint"
          >
            English (UK)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="English (US)"
            className="text-[.775rem] hover:text-neon-mint"
          >
            English (US)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Deutsch"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Deutsch
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Français"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Français
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Español (España)"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Español (España)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Español (Latinoamérica)"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Español (Latinoamérica)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Italiano"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Italiano
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Polski"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Polski
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Türkçe"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Türkçe
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Português (Brasil)"
            className="text-[.775rem] hover:text-neon-mint"
          >
            Português (Brasil)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="简体中文"
            className="text-[.775rem] hover:text-neon-mint"
          >
            简体中文
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
