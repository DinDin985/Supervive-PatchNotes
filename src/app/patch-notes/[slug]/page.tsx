"use client";

import { useState } from "react";
import BugFixes from "../components/bug-fixes";
import Custom from "../components/custom";
import EquipmentChanges from "../components/equipment-changes";
import HunterChanges from "../components/hunter-changes";
import Introduction from "../components/introduction";
import PatchHighlights from "../components/patch-highlights";
import PowerChanges from "../components/power-changes";
import Summary from "../components/summary";
import SystemChanges from "../components/system-changes";
import { patchNotesData } from "../data/db";

export default function BlogPostPage() {
  const [postData, setPostData] = useState(patchNotesData);

  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center bg-ui-dark-purple">
      {postData && (
        <div>
          <Introduction introduction={postData.introduction} />
          <div className="flex max-w-[800px] flex-col items-center">
            <Summary summary={postData.summary} />
            {/* <MidPatchUpdates midPatchUpdates={postData.midPatchUpdates} /> */}
            <PatchHighlights patchHighlights={postData.patchHighlights} />
            <Custom custom={postData.custom} />
            <SystemChanges systemChanges={postData.systemChanges} />
            <HunterChanges hunterChanges={postData.hunterChanges} />
            <EquipmentChanges equipmentChanges={postData.equipmentChanges} />
            <PowerChanges powerChanges={postData.powerChanges} />
            <BugFixes bugFixes={postData.bugFixesList} />
          </div>
        </div>
      )}
    </div>
  );
}
