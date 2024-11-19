import CutCorners from "./ui/cut-corners";

interface BugFixesProps {
  bugFixes: string[];
}

export default function BugFixes({ bugFixes }: BugFixesProps) {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Other Bugfixes/QoL</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />
        <ul className="list-disc pl-6">
          {bugFixes.map((bugFix, i) => {
            return <li key={i}>{bugFix}</li>;
          })}
          <li>Fixed an issue where teammate Kingpin&apos;s Hook would miss.</li>
          <li>Fixed a skill issue in the player base.</li>
          <li>Fixed jin&apos;s icon to match with in game model.</li>
          <li>Fixed model issue with Shrike to match Island Girl vibes.</li>
          <li>Fixed an issue where little cook turned into big cook.</li>
        </ul>
      </div>
    </div>
  );
}