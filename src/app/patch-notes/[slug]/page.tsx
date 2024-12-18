import { getAllPostSlug, getPostBySlug } from "@/app/hooks/mdx-fetcher";
export async function generateStaticParams() {
  return getAllPostSlug();
}

export default async function PatchNotesPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  console.log(post);

  return (
    <div className="relative flex h-fit w-full flex-col items-center pb-16">
      <div className="w-full max-w-[800px]">{post.content}</div>
    </div>
  );
}
