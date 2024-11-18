import Hr from "./hr";
import CutCorners from "./ui/cut-corners";

export default function Custom({ title, description, bulletPoints }) {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">{title}</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />

        <h2 className="mb-6 text-sm text-neutral-300 md:text-base lg:text-xl">
          {description}
        </h2>

        <Hr className="mb-6 self-center" />

        <ul className="list-disc pl-6">
          {/* {bulletPoints.map((bulletPoint, i) => {
            return <li key={i}>{bulletPoint}</li>;
          })} */}
        </ul>
      </div>
    </div>
  );
}
