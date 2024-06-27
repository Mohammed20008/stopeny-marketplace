"use client";
import Image from "next/image";
import { useState } from "react";
import { ProfileIcon } from "./ProfileIcon";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";

const Icons = () => {
  return (
    <div className="relative ml-4 flex items-center justify-center ">
      <ProfileIcon />
      <Button variant="ghost" className="relative cursor-pointer">
        <Image src="/notification.png" alt="img" width={30} height={30} />
        <span className="absolute -right-[1px] -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-gray-700">
          1
        </span>
      </Button>

      <CartIcon />
    </div>
  );
};
export default Icons;
