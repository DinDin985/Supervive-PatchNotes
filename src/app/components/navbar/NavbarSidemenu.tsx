import { toggleMenuAtom } from "@/app/atoms/globalState";
import { motion } from "motion/react";
import { useAtom } from "jotai";
import Image from "next/image";
import SidemenuLinks from "./SideMenuLinks";

export default function NavbarSidemenu() {
  const [toggleMenu] = useAtom(toggleMenuAtom);

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={toggleMenu ? "visible" : "hidden"}
      variants={menuVariants}
      transition={{
        x: { type: "tween", duration: 0.3, ease: "easeOut" },
      }}
      className={`absolute left-0 top-0 h-screen w-screen bg-black`}
    >
      <div className="absolute left-0 top-0 h-full max-h-[450px] w-full -scale-y-100">
        <Image
          src={"/nav-bar/header-sidemenu.png"}
          width={500}
          height={500}
          className="absolute left-0 top-0 h-full w-full min-w-[1400px]"
          alt="sidemenu-vector"
        />
      </div>
      <a
        href="https://www.playsupervive.com/en-us"
        className="absolute left-6 top-[1.35rem] z-50 rounded-full bg-white p-2"
      >
        <Image
          src={"/nav-bar/supervive-black-logo.png"}
          width={36}
          height={36}
          alt="supervive black logo"
        />
      </a>
      <SidemenuLinks />
    </motion.div>
  );
}
