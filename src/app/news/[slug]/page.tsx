import { getAllNewsPostSlug, getNewsPostBySlug } from "@/app/hooks/mdx-fetcher";

export async function generateStaticParams() {
  return getAllNewsPostSlug();
}

export type paramsType = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: paramsType }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  return {
    title: post.frontmatter.title,
  };
}

export default async function NewsPost({ params }: { params: paramsType }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  console.log(params);

  console.log(post);

  return (
    <div className="relative flex h-fit w-full flex-col items-center pb-16">
      <div className="w-full max-w-[1200px]">{post.content}</div>
    </div>
  );
}
