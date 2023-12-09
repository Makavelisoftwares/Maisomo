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
      <div className="absolute bg-gradient-to-br opacity-70 left-0 right-0 bottom-0 top-0 from-fuchsia-500 to-black" />
    </div>
  );
};
