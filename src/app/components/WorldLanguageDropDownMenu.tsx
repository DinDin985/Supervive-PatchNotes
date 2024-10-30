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
import Image from "next/image";

export function WorldLanguageDropDownMenu() {
  const [position, setPosition] = React.useState("English (US)");

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
            className="object-contain group-hover:hidden"
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
            className="hover:text-neon-mint text-[.775rem]"
          >
            English (UK)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="English (US)"
            className="hover:text-neon-mint text-[.775rem]"
          >
            English (US)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Deutsch"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Deutsch
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Français"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Français
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Español (España)"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Español (España)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Español (Latinoamérica)"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Español (Latinoamérica)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Italiano"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Italiano
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Polski"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Polski
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Türkçe"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Türkçe
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="Português (Brasil)"
            className="hover:text-neon-mint text-[.775rem]"
          >
            Português (Brasil)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="简体中文"
            className="hover:text-neon-mint text-[.775rem]"
          >
            简体中文
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
