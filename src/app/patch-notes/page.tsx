import type { JSXElementConstructor, ReactElement } from "react";
import { Tusker5700 } from "../fonts";
import { getPatchNotesPosts } from "../hooks/mdx-fetcher";
import PatchNotesListContainer from "./components/patch-notes-list-container";

type post = {
  frontmatter: {
    title: string;
    "cover-image": string;
    date: string;
    description: string;
  };
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
};

export default async function PatchNotes() {
  const posts = await getPatchNotesPosts();

  function sortPostsByDate(posts: post[]) {
    return posts.sort(
      (a, b) =>
        new Date(a.frontmatter.date).getTime() -
        new Date(b.frontmatter.date).getTime(),
    );
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="absolute top-0 h-28 w-full bg-ui-light-purple"></div>

      <div className="flex h-40 items-center bg-ui-light-purple md:mb-10 xl:h-56">
        <h1
          className={`${Tusker5700.className} ml-10 text-5xl italic text-white xl:text-6xl`}
        >
          Patch Notes
        </h1>
      </div>

      <PatchNotesListContainer
        postLength={posts.length}
        posts={sortPostsByDate(posts)}
      />
    </div>
  );
}
