"use client";

import {
  formatCamelCase,
  formatPascalCase,
} from "@/app/hooks/patch-notes-hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BugFixes from "../components/bug-fixes";
import Custom from "../components/custom";
import EquipmentChanges from "../components/equipment-changes";
import HunterChanges from "../components/hunter-changes";
import Introduction from "../components/introduction";
import MidPatchUpdates from "../components/mid-patch-updates";
import PatchHighlights from "../components/patch-highlights";
import PowerChanges from "../components/power-changes";
import Summary from "../components/summary";
import SystemChanges from "../components/system-changes";
import TableOfContents from "../components/table-of-contents";
import { patchNotesData } from "../data/db";
import type { initalData } from "../types";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [postData] = useState(
    patchNotesData.find((patchNote) => patchNote.slug === slug)?.data,
  );
  const [visableSection, setVisibleSection] = useState<string | null>(null);

  function getSectionNames() {
    if (postData) {
      const initialSections = Object.keys(postData).filter(
        (section) => section !== "introduction",
      ) as (keyof typeof postData)[];

      const sectionsWithContent = initialSections.filter((section) => {
        const content = postData[section];
        if (Array.isArray(content)) {
          return content.length > 0;
        }
        if (typeof content === "object" && content !== null) {
          return Object.keys(content).length > 0;
        }
        return false;
      });

      const formattedSections = sectionsWithContent.map((section) => {
        const pascalCase = formatPascalCase(section);
        return pascalCase;
      });

      if (formattedSections.includes("Custom") && postData.custom) {
        const customSections = postData.custom.map(({ title }) => title);
        const customIndex = formattedSections.indexOf("Custom");
        formattedSections.splice(customIndex, 1, ...customSections);
      }

      return formattedSections;
    } else {
      return [];
    }
  }

  function getMidPatchUpdatesData(initalData: initalData) {
    const data: initalData = { ...initalData };
    for (const [key, value] of Object.entries(data)) {
      if (value.length === 0) {
        delete data[key as keyof typeof data];
      }
    }

    return data;
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let nearestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = section.id;
        }
      });

      if (nearestSection) {
        setVisibleSection(nearestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-fit w-full">
      <div className="absolute top-[500px] hidden h-full w-full xl:block">
        <TableOfContents
          visableSection={visableSection}
          sections={getSectionNames()}
        />
      </div>

      <div className="mx-auto flex h-fit w-full max-w-[1000px] flex-col items-center bg-ui-dark-purple">
        {postData && (
          <div>
            <Introduction introduction={postData.introduction} />
            <div className="flex max-w-[800px] flex-col items-center">
              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="summary"
              >
                <Summary summary={postData.summary} />
              </section>

              {Object.keys(getMidPatchUpdatesData(postData.midPatchUpdates))
                .length !== 0 && (
                <section
                  className="flex w-10/12 flex-col items-center justify-center"
                  id="midPatchUpdates"
                >
                  <MidPatchUpdates
                    midPatchUpdates={getMidPatchUpdatesData(
                      postData.midPatchUpdates,
                    )}
                  />
                </section>
              )}

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="patchHighlights"
              >
                <PatchHighlights patchHighlights={postData.patchHighlights} />
              </section>

              {postData.custom.length !== 0 &&
                postData.custom.map((customData, i) => {
                  return (
                    <section
                      className="flex w-10/12 flex-col items-center justify-center"
                      key={i}
                      id={formatCamelCase(customData.title)}
                    >
                      <Custom custom={customData} />
                    </section>
                  );
                })}

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="systemChanges"
              >
                <SystemChanges systemChanges={postData.systemChanges} />
              </section>

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="hunterChanges"
              >
                <HunterChanges hunterChanges={postData.hunterChanges} />
              </section>

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="equipmentChanges"
              >
                <EquipmentChanges
                  equipmentChanges={postData.equipmentChanges}
                />
              </section>

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="powerChanges"
              >
                <PowerChanges powerChanges={postData.powerChanges} />
              </section>

              <section
                className="flex w-10/12 flex-col items-center justify-center"
                id="bugFixesList"
              >
                <BugFixes bugFixes={postData.bugFixesList} />
              </section>
            </div>
            <div className="absolute bottom-0 left-[80%] h-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}
