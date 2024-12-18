import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import HunterIntro from "../../../draft/hunter-intro";
import Hr from "../components/ui/hr";
import BugFixes from "../patch-notes/components/bug-fixes/bug-fixes";
import Custom from "../patch-notes/components/custom/custom";
import EquipmentChanges from "../patch-notes/components/equipment-changes/equipment-changes";
import EquipmentChangesContainer from "../patch-notes/components/equipment-changes/equipment-changes-container";
import EquipmentSpecificChangesContainer from "../patch-notes/components/equipment-changes/equipment-specific-changes-container";
import HunterAbilityChanges from "../patch-notes/components/hunter-changes/hunter-ability-changes";
import HunterAbilityChangesContainer from "../patch-notes/components/hunter-changes/hunter-ability-changes-container";
import HunterChanges from "../patch-notes/components/hunter-changes/hunter-changes";
import HunterChangesContainer from "../patch-notes/components/hunter-changes/hunter-changes-container";
import Introduction from "../patch-notes/components/introduction/introduction";
import MidPatchUpdates from "../patch-notes/components/mid-patch-updates/mid-patch-updates";
import PatchHighlights from "../patch-notes/components/patch-highlights/patch-highlights";
import PowerChanges from "../patch-notes/components/power-changes/power-changes";
import PowerChangesContainer from "../patch-notes/components/power-changes/power-changes-container";
import PowerSpecificChangesContainer from "../patch-notes/components/power-changes/power-specific-changes-container";
import Summary from "../patch-notes/components/summary/summary";
import SystemChanges from "../patch-notes/components/system-changes/system-changes";
import SystemChangesContainer from "../patch-notes/components/system-changes/system-changes-containter";

const contentDir = path.join(process.cwd(), "src/app/patch-notes/content");

export async function getPostBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    "cover-image": string;
    date: string;
    description: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      BugFixes,
      Custom,
      EquipmentChanges,
      EquipmentChangesContainer,
      EquipmentSpecificChangesContainer,
      Hr,
      HunterAbilityChanges,
      HunterAbilityChangesContainer,
      HunterChanges,
      HunterChangesContainer,
      HunterIntro,
      Introduction,
      MidPatchUpdates,
      PatchHighlights,
      PowerChanges,
      PowerChangesContainer,
      PowerSpecificChangesContainer,
      Summary,
      SystemChanges,
      SystemChangesContainer,
    },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getPosts() {
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files.map(async (file) => await getPostBySlug(path.parse(file).name)),
  );
  return posts;
}

export function getAllPostSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
