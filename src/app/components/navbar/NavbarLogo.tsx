import Image from 'next/image';
import React from 'react'

export default function NavbarLogo() {
  return (
    <div className="w-[200px]">
      <a href="https://www.playsupervive.com/en-us">
        <Image
          src={"/nav-bar/supervive-logo.png"}
          width={170}
          height={80}
          alt="supervive logo"
        />
      </a>
    </div>
  );
}
