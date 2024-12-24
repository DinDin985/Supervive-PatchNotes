import {
  getAllPatchNotesPostsPostSlug,
  getPatchNotesPostBySlug,
} from "../../hooks/mdx-fetcher";

export async function generateStaticParams() {
  return getAllPatchNotesPostsPostSlug();
}

export type paramsType = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: paramsType }) {
  const { slug } = await params;
  const post = await getPatchNotesPostBySlug(slug);

  return {
    title: post.frontmatter.title,
  };
}

export default async function PatchNotesPost({
  params,
}: {
  params: paramsType;
}) {
  const { slug } = await params;
  const post = await getPatchNotesPostBySlug(slug);

  return (
    <div className="relative flex h-fit w-full flex-col items-center pb-16">
      <div className="w-full max-w-[800px]">{post.content}</div>
    </div>
  );
}
