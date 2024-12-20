import Hr from "@/app/components/ui/hr";
import type { ShowMoreButtonProps } from "@/app/patch-notes/types";

export default function ShowMoreButton({
  ShowMorePosts,
  numOfVisablePosts,
  postLength,
}: ShowMoreButtonProps) {
  return (
    <button
      onClick={ShowMorePosts}
      className={`${postLength <= numOfVisablePosts ? "hidden" : "block"} flex w-full items-center justify-center font-tusker-5700 text-2xl tracking-wider`}
    >
      <Hr className="w-1/5" />
      <span className="mx-4">Show More +</span>
      <Hr className="w-1/5" />
    </button>
  );
}
