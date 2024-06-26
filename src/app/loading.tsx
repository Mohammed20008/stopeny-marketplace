import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      {" "}
      <div className="h-40 w-40 animate-spin rounded-full border-b-8 border-gray-950"></div>
      <Image
        src="/shopping-bag.png"
        alt="bag"
        width={80}
        height={80}
        className="absolute z-10"
      />
    </div>
  );
};
export default Loading;
