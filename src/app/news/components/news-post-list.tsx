"use client";

import Post from "@/app/components/post";
import Hr from "@/app/components/ui/hr";
import Link from "next/link";
import { useState } from "react";
import { newsData } from "../data/db";

export default function NewsPostList() {
  const [posts] = useState([...newsData]);
  const [numOfVisablePosts, showNumOfVisablePosts] = useState(6);

  function ShowMorePosts() {
    showNumOfVisablePosts((prevNum) => prevNum + 6);
  }

  return (
    <div className="w-full flex-col items-center justify-center self-center">
      <ul className="grid- mb-10 grid w-full max-w-[1600px] bg-ui-dark-purple md:grid-cols-2 md:gap-y-10 md:px-4 lg:grid-cols-3">
        {posts
          .slice()
          .reverse()
          .map(({ title, date, img, description, slug }, i) => {
            return (
              <li
                className={`${i < numOfVisablePosts ? "block" : "hidden"}`}
                key={i}
              >
                <Link
                  className="flex items-center justify-center"
                  href={`/news/${slug}`}
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
