export type posts = {
  frontmatter: {
    title: string;
    "cover-image": string;
    date: string;
    description: string;
    subdirectory: string;
  };
  content: React.ReactNode;
  slug: string;
};

export type NewsListContainer = {
  postLength: number;
  posts: posts[];
};

export type NewsListProps = {
  posts: posts[];
  numOfVisablePosts: number;
};
