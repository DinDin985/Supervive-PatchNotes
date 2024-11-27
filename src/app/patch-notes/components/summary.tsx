import Image from "next/image";
import Hr from "./hr";

type SummaryProps = {
  summary: {
    message: string[];
    author: string;
    authorImg: string;
  };
};

export default function Summary({ summary }: SummaryProps) {
  const { message, author, authorImg } = summary;

  return (
    <div className="mb-10 w-full">
      <div className="mb-8 space-y-4">
        {message.map((text, i) => {
          return (
            <p key={i}>
              {i === 0 ? <span>&ldquo;</span> : ""}
              {text}
              {i === message.length - 1 ? <span>&ldquo;</span> : ""}
            </p>
          );
        })}

        <div className="flex items-center">
          <p className="mr-2">- {author}</p>
          <div className="w-fit rounded-full bg-white p-[6px]">
            {authorImg !== "" ? (
              <Image
                src={"/patch-notes/balance-team-icon.png"}
                width={15}
                height={15}
                alt="author icon"
              />
            ) : (
              <Image
                src={"/patch-notes/balance-team-icon.png"}
                width={15}
                height={15}
                alt="balance team icon"
              />
            )}
          </div>
        </div>
      </div>

      <Hr className="mx-auto mb-4" />
    </div>
  );
}
