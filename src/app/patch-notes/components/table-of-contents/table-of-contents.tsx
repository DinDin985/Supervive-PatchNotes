"use client";
import { setVisibleSectionAtom } from "@/app/atoms/globalState";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

export default function TableOfContents() {
  const [visibleSection, setVisibleSection] = useAtom(setVisibleSectionAtom);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll("section"));
    console.log(sectionsRef.current);

    sectionsRef.current = sectionsRef.current.filter(
      (section) => section.id !== "",
    );
  }, []);

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
        console.log(nearestSection);
        setVisibleSection(nearestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function scrollToSection(sectionId: string) {
  //   console.log(sectionId);
  //   const section = document.getElementById(sectionId);
  //   console.log(section);
  //   if (section) {
  //     const headerOffset = 96;
  //     const elementPosition = section.getBoundingClientRect().top;
  //     const offsetPosition =
  //       elementPosition + window.pageYOffset - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  return (
    <div className="sticky right-0 top-32 z-10">
      <ul className="absolute left-[80%] ml-0 w-fit max-w-[250px]">
        {sectionsRef.current.map((section, i) => {
          return (
            <li
              className={`${visibleSection === section.id ? "text-neutral-100" : "text-neutral-300"} flex text-sm`}
              key={i}
            >
              <a href={`#${section.id}`}>
                <span className="mr-1">-</span>
                {section.id}
              </a>
              {/* <span className="mr-1">-</span>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-start"
              >
                {section.id}
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
