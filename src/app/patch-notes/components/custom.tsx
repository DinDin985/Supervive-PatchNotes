import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

interface CustomProps {
  custom: {
    title: string;
    notes: string;
    bulletPoints: string[];
  }[];
}

export default function Custom({ custom }: CustomProps) {
  return (
    <div className="mb-8 w-10/12">
      {custom.map(({ title, notes, bulletPoints }, i) => {
        return (
          <div
            className={`${i === custom.length - 1 ? "mb-0" : "mb-8"}`}
            key={i}
          >
            <h1 className="patch-notes-subtitle">{title}</h1>

            <div className="relative flex flex-col border-4 p-4">
              <CutCorners />

              {notes && (
                <div className="flex flex-col">
                  <h2 className="mb-4">&ldquo;{notes}&ldquo;</h2>
                  <Hr className="mb-4 self-center" />
                </div>
              )}

              <ul className="list-disc pl-6">
                {bulletPoints.map((bulletPoint, i) => {
                  return <li key={i}>{bulletPoint}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
