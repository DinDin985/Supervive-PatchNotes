"use client";
import { toggleMenuAtom } from "@/app/atoms/globalState";
import { useAtom } from "jotai";
import NavbarSidemenu from "./NavbarSidemenu";

export default function NavbarSidemenuToggle() {
  const [toggleMenu, setToggleMenu] = useAtom(toggleMenuAtom);

  return (
    <div
      className="2xl:hidden"
      onClick={() => {
        setToggleMenu((prevState) => {
          return !prevState;
        });
      }}
    >
      <div className="group relative z-[9999] flex h-[38px] w-[50px] items-center justify-center rounded-sm border-[1px] border-neutral-100 hover:cursor-pointer hover:border-green-500">
        <div
          className={`${toggleMenu ? "animate-rotateTopBar" : "animate-reverseRotateTopBar"} absolute top-[10px] h-[3px] w-[57.5%] rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
        <div
          className={`${toggleMenu ? "animate-rotateMiddleBar" : "animate-reverseRotateMiddleBar"} h-[3px] w-[57.5%] rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
        <div
          className={`${toggleMenu ? "animate-fadeOut" : "animate-fadeIn"} absolute bottom-[9px] h-[3px] w-[57.5%] origin-right rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
      </div>

      <NavbarSidemenu />
    </div>
  );
}
