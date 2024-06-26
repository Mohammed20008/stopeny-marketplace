import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen flex-col bg-gray-950 p-4 text-gray-400">
      {/* Top */}
      <div className="xs:flex-col flex h-full w-full items-center gap-20 px-4 md:flex-row md:gap-40 lg:gap-8">
        {/* Left */}
        <div className="h-full w-1/4 space-y-2 p-4">
          <div>
            <Image src="/shopping-bag.png" alt="logo" width={40} height={40} />
          </div>
          <div className="flex flex-col space-y-3 text-sm">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              placeat quam repellendus ducimus, quidem odio vel dolorem{" "}
            </p>
            <p>mohammedabdalmenem1@gmail.com</p>
            <p>+20 01129731784</p>
          </div>

          <div className="flex gap-4">
            <FaFacebook />
            <BsTwitterX />
            <FaGithub />
          </div>
        </div>
        {/* center */}
        <div className="hidden h-full w-2/4 gap-4 p-4 text-center lg:flex">
          <div className="w-1/3">
            <p className="mb-4 font-semibold">Comapney</p>
            <div className="flex flex-col space-y-3">
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
            </div>
          </div>
          <div className="w-1/3">
            <p className="mb-4">Shop</p>
            <div className="flex flex-col gap-3">
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
            </div>
          </div>
          <div className="w-1/3">
            <p className="mb-4">Help</p>
            <div className="flex flex-col gap-3">
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
              <Link href="/homepage">Home Page</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mr-4 h-full w-1/4 space-y-4 px-2">
          <p className="text-xl">Subscribe</p>
          <p>get the latest offers</p>
          {/* <div className="flex">
            <input
              type="text"
              placeholder="Email Adress"
              className="w-40 px-2"
            />
            <button className="bg-red-500 p-2 text-gray-950">Join</button>
          </div> */}
          <div>
            <p>Secure Payments</p>
            <div className="flex gap-4">
              <Image src="/paypal.png" alt="" width={40} height={40} />
              <Image src="/mastercard.png" alt="" width={40} height={40} />
              <Image src="/visa.png" alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-16 flex justify-between text-sm">
        <p>@ 2024 Stopeny Shop</p>
        <p>Language United states | English</p>
      </div>
    </div>
  );
};
export default Footer;
