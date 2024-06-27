"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: any) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formdata = new FormData(e.currentTarget);
    const name = formdata.get("inputValue");
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full flex-1 items-center rounded-md bg-gray-100 p-2"
    >
      <input
        name="inputValue"
        type="text"
        placeholder={"Search"}
        className="flex-1 bg-transparent outline-none"
      />
      <button className=" shrink-0">
        {" "}
        <Image
          src="/search.png"
          alt="find"
          width={20}
          height={20}
          className="cursor-pointer opacity-50"
        />
      </button>
    </form>
  );
};
export default SearchBar;
