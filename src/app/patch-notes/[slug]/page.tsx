import BugFixes from "../components/bug-fixes";
import Custom from "../components/custom";
import EquipmentChanges from "../components/equipment-changes";
import HunterChange from "../components/hunter-changes";
import Introduction from "../components/introduction";
import MidPatchUpdates from "../components/mid-patch-updates";
import PatchHighlights from "../components/patch-highlights";
import Summary from "../components/summary";
import SystemChanges from "../components/system-changes";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  return (
    <div className="flex flex-col items-center bg-ui-dark-purple">
      <Introduction />
      <Summary />
      <MidPatchUpdates />
      <PatchHighlights />
      <Custom />
      <HunterChange />
      <EquipmentChanges />
      <SystemChanges />
      <BugFixes />
      <h1>Blog Post: {slug}</h1>
      <p>This is a blog post with the dynamic slug: {slug}</p>
    </div>
  );
}
