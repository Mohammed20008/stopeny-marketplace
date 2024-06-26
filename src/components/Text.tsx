"use client";
import { useState } from "react";
import { Separator } from "./ui/separator";

const Text = () => {
  const [quantity, setquantity] = useState(0);
  const decrease = () => {
    quantity !== 0 && setquantity((prevquantity) => prevquantity - 1);
  };
  const increase = () => {
    setquantity((prevquantity) => prevquantity + 1);
  };

  return (
    <div className=" space-y-6">
      {/* header */}
      <div className="px-2 py-4">
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">
          Digital Item
        </h1>
        <p className=" text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          repellat officiis, delectus ut accusamus, ad deserunt fugiat quis vero
          nisi, repellendus pariatur inventore corrupti. Ad consequatur alias
          ipsam repellendus maxime?
        </p>
      </div>
      <Separator />
      {/* price */}
      <p className="text-2xl font-semibold">$40</p>
      <Separator />
      {/* preferences */}
      <div className="flex flex-col gap-4">
        <p>choose color</p>
        <div className="flex gap-4">
          <div className="h-6 w-6 rounded-full bg-black"></div>
          <div className="h-6 w-6 rounded-full bg-pink-700"></div>
          <div className="relative h-6 w-6 rounded-full bg-white">
            <span className="absolute -bottom-1 right-3 h-8 w-[1px] rotate-45 bg-black"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>choose size</p>
        <div className="flex gap-4">
          <div className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-md ring-2 ring-gray-400 hover:bg-gray-300">
            small
          </div>
          <div className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-md ring-2 ring-gray-400">
            medium
          </div>
          <div className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-md ring-2 ring-gray-400">
            large
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col space-y-4">
        <p>quantity</p>
        <div className="flex w-max items-center gap-8 rounded-full bg-neutral-300 px-4 py-2 ">
          <button onClick={decrease}>-</button>
          {quantity}
          <button onClick={increase}>+</button>
        </div>
      </div>
      <Separator />
      {/* description */}
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          repellat officiis, delectus ut accusamus, ad deserunt fugiat quis vero
          nisi, repellendus pariatur inventore corrupti. Ad consequatur alias
          ipsam repellendus maxime?
        </p>
      </div>
    </div>
  );
};
export default Text;
