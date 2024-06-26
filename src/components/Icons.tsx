"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ProfileIcon from "./ProfileIcon";
import CartIcon from "./CartIcon";

const Icons = () => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [isProfileOpen, setisProfileOpen] = useState(false);

  const handleProfile = () => {
    setisProfileOpen(!isProfileOpen);
    setisCartOpen(false);
  };
  const handleCart = () => {
    setisCartOpen(!isCartOpen);
    setisProfileOpen(false);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisProfileOpen(false);
        setisCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative ml-4 flex items-center justify-center gap-4">
      <ProfileIcon
        onClick={handleProfile}
        isProfileOpen={isProfileOpen}
        dropdownRef={dropdownRef}
      />
      <div className="relative">
        <Image src="/notification.png" alt="img" width={30} height={30} />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-gray-700">
          1
        </span>
      </div>

      <CartIcon
        onClick={handleCart}
        isCartOpen={isCartOpen}
        dropdownRef={dropdownRef}
      />
    </div>
  );
};
export default Icons;
