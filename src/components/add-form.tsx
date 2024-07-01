export default function AddForm() {
  return (
    <form>
      <div className="px-5 py-2.5 lg:px-6 lg:py-5 bg-white rounded-md flex gap-3 lg:gap-6 items-center">
        <button
          type="submit"
          className="size-5 lg:size-6 rounded-full border"
        ></button>
        <input
          type="text"
          name=""
          className="flex-1 bg-transparent outline-none border-none text-xs lg:text-lg"
          placeholder="Create a new todo…"
        />
      </div>
    </form>
  );
}
