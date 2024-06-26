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
      className="flex flex-1 items-center gap-2 rounded-md  bg-gray-100 p-2"
    >
      <input
        name="inputValue"
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button>
        {" "}
        <Image
          src="/search.png"
          alt="find"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </button>
    </form>
  );
};
export default SearchBar;
