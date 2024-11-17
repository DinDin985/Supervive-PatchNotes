import PostList from "./components/post-list";

export default function PatchNotes() {
  return (
    <div className="flex flex-col">
      <div className="absolute top-0 h-28 w-full bg-ui-light-purple"></div>

      <div className="flex h-40 items-center bg-ui-light-purple md:mb-10 xl:h-56">
        <span className="ml-10 font-tusker-5700 text-5xl italic text-white xl:text-6xl">
          Patch Notes
        </span>
      </div>

      <PostList />

      <div className="pb-10"></div>
    </div>
  );
}
