export const UnitsSideBar = async ({ chapters }) => {
  return (
    <div>
      <div className="text-lg font-bold">Chapters</div>
      {chapters.map((chap, index) => (
        <div
          key={index}
          className="px-1 py-3 bg-sky-100 text-sky-700 border border-zinc-400/30 rounded-md mt-2"
        >
          {chap?.title}
        </div>
      ))}
    </div>
  );
};
