import NewsPostList from "./components/news-post-list";

export default function News() {
  return (
    <div className="flex flex-col">
      <div className="absolute top-0 h-28 w-full bg-ui-light-purple"></div>

      <div className="flex h-40 flex-col justify-center bg-ui-light-purple md:mb-10 xl:h-56">
        <h1 className="mb-1 ml-10 font-tusker-5700 text-5xl italic text-white xl:text-6xl">
          News
        </h1>
        <p className="ml-10 font-bold">
          Check out the latest announcements on the Skylands
        </p>
      </div>

      <NewsPostList />

      <div className="pb-10"></div>
    </div>
  );
}
