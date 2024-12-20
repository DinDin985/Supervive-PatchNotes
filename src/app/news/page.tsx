import type { JSXElementConstructor, ReactElement } from "react";
import { getNewsPosts } from "../hooks/mdx-fetcher";
import NewsListContainer from "./components/news-list-container";

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

export default async function News() {
  const posts = await getNewsPosts();

  function sortPostsByDate(posts: post[]) {
    return posts.sort(
      (a, b) =>
        new Date(a.frontmatter.date).getTime() -
        new Date(b.frontmatter.date).getTime(),
    );
  }

  return (
    <div className="flex flex-col">
      <div className="absolute top-0 h-28 w-full bg-ui-light-purple"></div>

      <div className="flex h-40 flex-col justify-center bg-ui-light-purple md:mb-10 xl:h-56">
        <h1
          className={`mb-1 ml-10 font-tusker-5700 text-5xl italic text-white xl:text-6xl`}
        >
          News
        </h1>
        <p className="ml-10 font-bold">
          Check out the latest announcements on the Skylands
        </p>
      </div>

      <NewsListContainer
        postLength={posts.length}
        posts={sortPostsByDate(posts)}
      />

      <div className="pb-10"></div>
    </div>
  );
}
