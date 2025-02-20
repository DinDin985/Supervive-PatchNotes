import {
  getAllHunterOverviewsSlug,
  getHunterOverviewBySlug,
} from "../../hooks/mdx-fetcher";

export async function generateStaticParams() {
  return getAllHunterOverviewsSlug();
}

export type paramsType = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: paramsType }) {
  const { slug } = await params;
  const post = await getHunterOverviewBySlug(slug);

  return {
    title: post.frontmatter.title,
  };
}

export default async function HunterOverview({
  params,
}: {
  params: paramsType;
}) {
  const { slug } = await params;
  const post = await getHunterOverviewBySlug(slug);

  return (
    <div className="relative flex h-fit w-full flex-col items-center pb-16">
      <div className="w-full max-w-[800px]">{post.content}</div>
    </div>
  );
}
