import React from "react";
import Post from "./components/Post";
import Link from "next/link";

export default function PatchNotes() {
  const blogPosts = [
    { slug: "patch-1-00-notes", title: "Patch 1.00 Notes" },
    { slug: "patch-1-01-notes", title: "Patch 1.01 Updates" },
  ];

  const tempLength = [
    {
      title: "Patch 1.00 Notes",
      date: "11/9/2024",
      img: "/patch-notes/supervive-wallpaper.png",
      description: "Happy Hunting Hunters",
      slug: "patch-1-00-notes",
    },
    {
      title: "Patch 1.01 Notes",
      date: "11/23/2024",
      img: "/patch-notes/duos.png",
      description: "Knock down your foes in Patch 1.01",
      slug: "patch-1-01-notes",
    },
    {
      title: "Patch 1.02 Notes",
      date: "12/7/2024",
      img: "/patch-notes/shrike.png",
      description: "Execute percision with Patch 1.02",
      slug: "patch-1-02-notes",
    },
    {
      title: "Patch 1.03 Notes",
      date: "12/21/2024",
      img: "/patch-notes/skylands.png",
      description: "THEY LIKE THOSE ODDS IN Patch 1.03",
      slug: "patch-1-03-notes",
    },
    {
      title: "Patch 1.04 Notes",
      date: "1/4/2025",
      img: "/patch-notes/freedom.png",
      description: "Dropping in with Patch 1.04",
      slug: "patch-1-04-notes",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex h-40 items-center bg-[#9724F0]">
        <span className="ml-10 font-tusker-5700 text-5xl italic text-white">
          Patch Notes
        </span>
      </div>
      <ul className="bg-[#34025B]">
        {tempLength.map(({ title, date, img, description, slug }) => {
          return (
            <li>
              <Link href={`/patch-notes/${slug}`}>
                <Post
                  title={title}
                  date={date}
                  img={img}
                  description={description}
                />
              </Link>
            </li>
          );
        })}
        <div className="pb-10"></div>
      </ul>
    </div>
  );
}
