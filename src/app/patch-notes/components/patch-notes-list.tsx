"use client";

import Post from "@/app/components/post";
import Link from "next/link";
import type { PatchNotesListProps } from "../types";

export default function PatchNotesList({
  posts,
  numOfVisablePosts,
}: PatchNotesListProps) {
  return (
    <ul className="mx-auto mb-10 grid w-full max-w-[1600px] bg-ui-dark-purple md:grid-cols-2 md:gap-y-10 md:px-4 lg:grid-cols-3">
      {posts
        .slice()
        .reverse()
        .map((post, i) => {
          return (
            <li
              className={`${i < numOfVisablePosts ? "block" : "hidden"}`}
              key={i}
            >
              <Link
                className="flex items-center justify-center"
                href={`/patch-notes/${post.slug}`}
              >
                <Post
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  img={post.frontmatter["cover-image"]}
                  description={post.frontmatter.description}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
