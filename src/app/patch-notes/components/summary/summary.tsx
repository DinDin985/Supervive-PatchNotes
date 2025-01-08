import Image from "next/image";
import Hr from "../../../components/ui/hr";
import type { SummaryProps } from "../../types";

export default function Summary({
  children,
  authorName,
  authorImg,
}: SummaryProps) {
  return (
    <section
      id="Summary"
      className="mx-auto mb-10 flex w-10/12 scroll-mt-24 flex-col"
    >
      <div className="prose prose-patch-summary mb-4 w-full max-w-none space-y-4">
        {children}
      </div>

      <div className="mb-8 flex items-center">
        <p className="mr-2">- {authorName}</p>
        <div className="w-fit rounded-full bg-white p-[6px]">
          {authorImg ? (
            <Image src={authorImg} width={15} height={15} alt="author icon" />
          ) : (
            <Image
              src={"/patch-notes/misc-icons/balance-team-icon.png"}
              width={15}
              height={15}
              alt="balance team icon"
            />
          )}
        </div>
      </div>

      <Hr className="mx-auto mb-4" />
    </section>
  );
}
