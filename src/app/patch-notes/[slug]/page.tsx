export default function BlogPostPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is a blog post with the dynamic slug: {slug}</p>
    </div>
  );
}
