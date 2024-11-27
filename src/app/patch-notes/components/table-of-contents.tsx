import { formatCamelCase } from "@/app/hooks/patch-notes-hooks";

type TableOfContentsProps = {
  visableSection: string | null;
  sections: string[];
};

export default function TableOfContents({
  visableSection,
  sections,
}: TableOfContentsProps) {
  function scrollToSection(sectionId: string) {
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="sticky right-0 top-28 z-[9999]">
      <ul className="absolute left-[80%] w-fit">
        {sections.map((section: string, i) => {
          const sectionPascalCase = formatCamelCase(section);

          return (
            <li
              className={`${visableSection === sectionPascalCase ? "text-neutral-100" : "text-neutral-300"} text-sm`}
              key={i}
            >
              <button onClick={() => scrollToSection(sectionPascalCase)}>
                {section}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
