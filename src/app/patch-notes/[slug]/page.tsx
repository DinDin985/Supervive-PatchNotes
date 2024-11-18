"use client";

import { use, useEffect, useState } from "react";
import BugFixes from "../components/bug-fixes";
import Custom from "../components/custom";
import EquipmentChanges from "../components/equipment-changes";
import HunterChangesUnique from "../components/hunter-changes-unique";
import Introduction from "../components/introduction";
import PatchHighlights from "../components/patch-highlights";
import Summary from "../components/summary";
import SystemChanges from "../components/system-changes";

export default function BlogPostPage({ params }) {
  const { slug } = use(params);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:8000/patch-notes/`)
      .then((res) => res.json())
      .then((data) => {
        const slugPost = data.find((obj) => obj.slug === slug);
        setPostData(slugPost.data);
        console.log(slugPost.data);
      })
      .catch((err) => console.error("Error fetching post data:", err));
  }, [slug]);

  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center bg-ui-dark-purple">
      {postData && (
        <div>
          <Introduction />
          <div className="flex max-w-[800px] flex-col items-center">
            <Summary />
            {/* <MidPatchUpdates /> */}
            <PatchHighlights />
            <Custom />
            {/* <HunterChange /> */}
            <HunterChangesUnique />
            <EquipmentChanges />
            <SystemChanges />
            <BugFixes />
          </div>

          <h1 className="text-2xl font-bold">{postData.title}</h1>
          <p>{postData.description}</p>
          <p>{postData.date}</p>
        </div>
      )}
    </div>
  );
}
