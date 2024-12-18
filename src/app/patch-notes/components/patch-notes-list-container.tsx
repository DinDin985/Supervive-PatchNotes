"use client";

import { useState } from "react";
import type { PatchNotesListContainer } from "../types";
import PatchNotesList from "./patch-notes-list";
import ShowMoreButton from "./ui/show-more-button";

export default function PatchNotesListContainer({
  postLength,
  posts,
}: PatchNotesListContainer) {
  const [numOfVisablePosts, setNumOfVisablePosts] = useState(6);

  function ShowMorePosts() {
    setNumOfVisablePosts((prevNum) => prevNum + 6);
  }

  return (
    <div>
      <PatchNotesList posts={posts} numOfVisablePosts={numOfVisablePosts} />

      <ShowMoreButton
        numOfVisablePosts={numOfVisablePosts}
        ShowMorePosts={ShowMorePosts}
        postLength={postLength}
      />
    </div>
  );
}
