import React from "react";
import Post from "./components/post";

export default function PatchNotes() {
  const tempLength = [
    {
      title: "Patch 1.00 Notes",
      date: "11/9/2024",
      img: "/patch-notes/supervive-wallpaper.png",
      description: "Happy Hunting Hunters",
    },
    {
      title: "Patch 1.01 Notes",
      date: "11/23/2024",
      img: "/patch-notes/duos.png",
      description: "Knock down your foes in Patch 1.01",
    },
    {
      title: "Patch 1.02 Notes",
      date: "12/7/2024",
      img: "/patch-notes/shrike.png",
      description: "Execute percision with Patch 1.02",
    },
    {
      title: "Patch 1.03 Notes",
      date: "12/21/2024",
      img: "/patch-notes/skylands.png",
      description: "THEY LIKE THOSE ODDS IN Patch 1.03",
    },
    {
      title: "Patch 1.04 Notes",
      date: "1/4/2025",
      img: "/patch-notes/freedom.png",
      description: "Dropping in with Patch 1.04",
    },
  ];

  return (
    <div className="flex flex-col pt-24">
      <div className="flex h-40 items-center bg-[#9724F0]">
        <span className="ml-10 font-tusker-5700 text-5xl italic text-white">
          Patch Notes
        </span>
      </div>
      <div className="bg-[#34025B]">
        {tempLength.map(({ title, date, img, description }) => {
          return (
            <Post
              title={title}
              date={date}
              img={img}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
