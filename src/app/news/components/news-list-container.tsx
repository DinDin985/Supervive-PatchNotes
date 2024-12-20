"use client";

import ShowMoreButton from "@/app/components/ui/show-more-button";
import { useState } from "react";
import type { NewsListContainer } from "../types";
import NewsList from "./news-post-list";

export default function NewsListContainer({
  postLength,
  posts,
}: NewsListContainer) {
  const [numOfVisablePosts, setNumOfVisablePosts] = useState(6);

  function ShowMorePosts() {
    setNumOfVisablePosts((prevNum) => prevNum + 6);
  }

  return (
    <div>
      <NewsList posts={posts} numOfVisablePosts={numOfVisablePosts} />

      <ShowMoreButton
        numOfVisablePosts={numOfVisablePosts}
        ShowMorePosts={ShowMorePosts}
        postLength={postLength}
      />
    </div>
  );
}
