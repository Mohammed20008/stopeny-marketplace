import Link from "next/link";
import SearchBar from "./SearchBar";
import Icons from "./Icons";
import Image from "next/image";
import { NavigationMenuDemo } from "./TopMenu";
import { MobileMenu } from "./Menu";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];
const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl md:px-6 lg:px-6 2xl:px-64">
      {/* mobile */}
      <div className="flex w-full justify-between px-4 md:hidden">
        <Link href="/" className=" flex shrink-0">
          <Image
            src="/shopping-bag.png"
            alt="shopcart"
            width={40}
            height={40}
          />
        </Link>
        <div className="">
          <SearchBar />
        </div>

        <MobileMenu />
      </div>
      {/* bigscreen */}
      <div className="hidden h-full w-full justify-between md:flex">
        {/* leftsection */}
        <div className="flex items-center xl:w-1/2">
          <Link href="/" className="mr-4 flex shrink-0">
            <Image
              src="/shopping-bag.png"
              alt="shopcart"
              width={40}
              height={40}
            />
          </Link>
          {/* <div className="hidden space-x-4 lg:flex">
            <HoverEffect items={links} />
          </div> */}
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        {/* right */}
        <div className="flex w-2/3 items-center lg:w-1/2">
          <div className="flex flex-1">
            {" "}
            <SearchBar />
          </div>

          <div className="flex shrink-0">
            <Icons />
          </div>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
