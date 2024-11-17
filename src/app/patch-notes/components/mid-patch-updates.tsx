import CutCorners from "./ui/cut-corners";

export default function MidPatchUpdates() {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Mid Patch Updates</h1>

      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />

        <div className="relative flex flex-col border-ui-dark-purple bg-ui-dark-purple lg:flex-row">
          <h2 className="font-tusker-6700 text-xl uppercase tracking-wider">
            Date Title
          </h2>
        </div>
      </div>
    </div>
  );
}
