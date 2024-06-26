import Link from "next/link";
import Menue from "./Menu";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];
const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center bg-white bg-opacity-60 px-4 backdrop-blur-lg md:px-16 lg:px-16 2xl:px-64">
      {/* mobile */}
      <div className="flex w-full justify-between md:hidden">
        <Link href="/" className="">
          <Image
            src="/shopping-bag.png"
            alt="shopcart"
            width={40}
            height={40}
          />
        </Link>
        <Menue />
      </div>
      {/* bigscreen */}
      <div className="hidden h-full w-full md:flex">
        {/* leftsection */}
        <div className="flex flex-1 items-center xl:w-1/2">
          <Link href="/" className="mr-4 flex">
            <Image
              src="/shopping-bag.png"
              alt="shopcart"
              width={40}
              height={40}
            />
          </Link>
          <div className="hidden space-x-4 lg:flex">
            <HoverEffect items={links} />
          </div>
        </div>
        {/* right */}
        <div className="flex w-1/2 items-center justify-between">
          <SearchBar />
          <Icons />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
