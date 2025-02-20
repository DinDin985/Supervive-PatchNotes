import Image from "next/image";

const huntersList = [
  { name: "Beebo", image: "/hunters/cover-image/beebo.png" },
  { name: "Bishop", image: "/hunters/cover-image/bishop.png" },
  { name: "Brall", image: "/hunters/cover-image/brall.png" },
  { name: "Celeste", image: "/hunters/cover-image/celeste.png" },
  { name: "Crysta", image: "/hunters/cover-image/crysta.png" },
  { name: "Elluna", image: "/hunters/cover-image/elluna.png" },
  { name: "Felix", image: "/hunters/cover-image/felix.png" },
  { name: "Ghost", image: "/hunters/cover-image/ghost.png" },
  { name: "Hudson", image: "/hunters/cover-image/hudson.png" },
  { name: "Jin", image: "/hunters/cover-image/jin.png" },
  { name: "Joule", image: "/hunters/cover-image/joule.png" },
  { name: "Kingpin", image: "/hunters/cover-image/kingpin.png" },
  { name: "Myth", image: "/hunters/cover-image/myth.png" },
  { name: "Oath", image: "/hunters/cover-image/oath.png" },
  { name: "Shiv", image: "/hunters/cover-image/shiv.png" },
  { name: "Shrike", image: "/hunters/cover-image/shrike.png" },
  { name: "Void", image: "/hunters/cover-image/void.png" },
  { name: "Zeph", image: "/hunters/cover-image/zeph.png" },
];

export default function Hunters() {
  return (
    <div className="mt-6 px-5 pb-5">
      <div className="mx-auto mb-5 flex w-fit flex-col items-center text-center font-quicksand font-semibold">
        <h1 className="mb-2 text-2xl">Pick Your</h1>

        <h1 className="mb-3 font-arial text-6xl font-bold uppercase">Hunter</h1>

        <h2>
          Whether you want to dive in head first or uplift your teammates we
          have it all.
        </h2>
      </div>

      <div className="grid h-full w-full grid-cols-2 gap-4">
        {huntersList.map((hunter, i) => {
          return (
            <a
              key={i}
              href={`/hunters/${hunter.name.toLowerCase()}`}
              className="group relative flex h-full w-full flex-col overflow-hidden bg-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="object-cover transition-all group-hover:scale-105"
                  src={hunter.image}
                  height={400}
                  width={250}
                  alt={hunter.name}
                />
              </div>

              <div className="bg-black p-3">
                <h3 className="font-quicksand text-lg font-bold uppercase italic tracking-wider">
                  {hunter.name}
                </h3>
              </div>
              <span className="shine-shim group-hover:animate-shine"></span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
