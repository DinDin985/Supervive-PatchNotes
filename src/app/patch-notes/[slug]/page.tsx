import {
  getAllPatchNotesPostsPostSlug,
  getPatchNotesPostBySlug,
} from "../../hooks/mdx-fetcher";

export async function generateStaticParams() {
  return getAllPatchNotesPostsPostSlug();
}

export type paramsType = Promise<{ slug: string }>;

export default async function PatchNotesPost({
  params,
}: {
  params: paramsType;
}) {
  const { slug } = await params;
  console.log(slug);

  const post = await getPatchNotesPostBySlug(slug);
  console.log(params);

  console.log(post);

  return (
    <div className="relative flex h-fit w-full flex-col items-center pb-16">
      <div className="w-full max-w-[800px]">{post.content}</div>
    </div>
  );
}
