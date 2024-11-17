import CutCorners from "./ui/cut-corners";

export default function Custom() {
  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle">Custom</h1>
      
      <div className="relative flex flex-col border-4 p-4">
        <CutCorners />
      </div>
    </div>
  );
}
