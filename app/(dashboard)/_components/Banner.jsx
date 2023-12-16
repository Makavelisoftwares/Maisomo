import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-[40vh] w-full mb-3">
      <Image
        src={"/banner.png"}
        alt="banner"
        fill
        className="aspect-video object-cover"
      />
      <div className="absolute flex items-center justify-center p-3 text-center right-0 left-0 top-0 bottom-0 z-20 text-white font-bold uppercase text-2xl">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          possimus sequi, qui quo minus sit nisi recusandae quibusdam quod
          beatae esse ipsa, illum culpa enim ea pariatur unde rem eos.
        </div>
      </div>
      <div className="absolute bg-gradient-to-br opacity-70 left-0 right-0 bottom-0 top-0 from-fuchsia-500 to-black" />
    </div>
  );
};
