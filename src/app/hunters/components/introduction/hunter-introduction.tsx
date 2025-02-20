import Image from "next/image";

export default function HunterIntroduction({ children, img }) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-5 flex h-fit w-full justify-center bg-white">
        <Image src={img} height={400} width={250} alt="hunter image" />
      </div>

      <div className="prose-hunter-introduction prose mb-5 px-5">
        {children.map((element, i) => {
          return i <= 2 ? <div key={i}>{element}</div> : null;
        })}
      </div>

      <div className="flex w-full px-5">
        {children.map((element, i) => {
          return i >= 3 ? (
            <div className="mr-4" key={i}>
              {element}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
