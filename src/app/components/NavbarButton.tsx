"use client";
import { useState } from "react";

export default function NavbarButton() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div
      className="2xl:hidden"
      onClick={() => setOpenMenu((prevState) => !prevState)}
    >
      <div className="group relative flex h-[38px] w-[50px] items-center justify-center rounded-sm border-[1px] border-neutral-100 hover:cursor-pointer hover:border-green-500">
        <div
          className={`${openMenu ? "animate-rotateTopBar" : "animate-reverseRotateTopBar"} absolute top-[10px] h-[3px] w-[57.5%] rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
        <div
          className={`${openMenu ? "animate-rotateMiddleBar" : "animate-reverseRotateMiddleBar"} h-[3px] w-[57.5%] rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
        <div
          className={`${openMenu ? "animate-fadeOut" : "animate-fadeIn"} absolute bottom-[9px] h-[3px] w-[57.5%] origin-right rounded-lg bg-neutral-100 group-hover:bg-green-500`}
        ></div>
      </div>
    </div>
  );
}
