"use client";

import Link from "next/link";
import { useState } from "react";
import { patchNotesData } from "../data/db";
import Hr from "./hr";
import { default as Post } from "./post";

export default function PostList() {
  const [posts] = useState([patchNotesData]);
  const [numOfVisablePosts, showNumOfVisablePosts] = useState(6);

  function ShowMorePosts() {
    showNumOfVisablePosts((prevNum) => prevNum + 6);
  }

  // useEffect(() => {
  //   fetch("http://localhost:8000/patch-notes")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

  return (
    <div className="w-full flex-col items-center justify-center self-center">
      <ul className="mb-10 grid w-full max-w-[1600px] bg-ui-dark-purple md:grid-cols-2 md:gap-y-10 md:px-4 lg:grid-cols-3">
        {posts.map(({ title, date, img, description, slug }, i) => {
          return (
            <li
              className={`${i < numOfVisablePosts ? "block" : "hidden"}`}
              key={i}
            >
              <Link
                className="flex items-center justify-center"
                href={`/patch-notes/${slug}`}
              >
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
      </ul>

      <button
        onClick={ShowMorePosts}
        className={`${posts.length <= numOfVisablePosts ? "hidden" : "block"} flex w-full items-center justify-center font-tusker-5700 text-2xl tracking-wider`}
      >
        <Hr className="w-1/5" />
        <span className="mx-4">Show More +</span>
        <Hr className="w-1/5" />
      </button>
    </div>
  );
}
