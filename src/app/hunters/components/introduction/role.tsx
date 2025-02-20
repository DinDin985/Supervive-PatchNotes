import Image from "next/image";

export default function Role({ roleType }: { roleType: string }) {
  return (
    <div className="prose-hunter-role prose flex h-32 w-32 flex-col items-center justify-center border-2 uppercase">
      <Image
        className="m-2"
        src={`/hunters/role/${roleType}.png`}
        width={50}
        height={50}
        alt=""
      />
      <h2>Role</h2>
      <h2>{roleType}</h2>
    </div>
  );
}
