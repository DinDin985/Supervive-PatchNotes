import { twMerge } from "tailwind-merge";
import { CustomProps } from "../types";
import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function Custom({
  custom,
  containerClassName,
  cutCornersClassName,
  marginVariant,
}: CustomProps) {
  const { title, notes, bulletPoints } = custom;
  return (
    <div className="w-full">
      <div className={twMerge(`mb-8`, marginVariant)}>
        <h1 className="patch-notes-subtitle">{title}</h1>

        <div
          className={twMerge(
            `relative flex flex-col border-4 p-4`,
            containerClassName,
          )}
        >
          <CutCorners className={cutCornersClassName} />

          {notes.length !== 0 && (
            <div>
              <div className="mb-5">
                {notes.map((noteStructure, i) => {
                  if (typeof noteStructure === "string") {
                    return (
                      <p key={i}>
                        {i === 0 ? <span>&ldquo;</span> : null}
                        {noteStructure}
                        {i === notes.length - 1 ? <span>&ldquo;</span> : null}
                      </p>
                    );
                  } else {
                    return (
                      <ul className="list-disc pl-6" key={i}>
                        {noteStructure.map((bulletPoint, i) => {
                          return bulletPoint !== "" ? (
                            <li key={i}>{bulletPoint}</li>
                          ) : (
                            <p key={i} className="mb-4"></p>
                          );
                        })}
                      </ul>
                    );
                  }
                })}
              </div>
              <Hr className="mx-auto mb-5" />
            </div>
          )}

          <ul className="mb-5 list-disc pl-6">
            {bulletPoints.map((bulletPoint, i) => {
              return <li key={i}>{bulletPoint}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
