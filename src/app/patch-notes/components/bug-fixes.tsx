export default function BugFixes() {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Bug-Fixes</h1>
      <div className="flex flex-col rounded-md border-2 border-ui-light-grey p-4">
        <ul className="list-disc pl-6">
          <li>Fixed an issue where Kingpin's Hook would miss.</li>
          <li>Fixed a skill issue in the player base.</li>
          <li>Fixed jin's icon to match with in game model.</li>
          <li>Fixed model issue with Shrike to match Island Girl vibes.</li>
          <li>Fixed an issue where little cook turned into big cook.</li>
        </ul>
      </div>
    </div>
  );
}
