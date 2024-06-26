import Image from "next/image";
import { Button } from "./ui/button";

const CartModel = () => {
  const cartItems = true;
  return (
    <div className="absolute right-0 top-12 ring-1 ring-slate-100 shadow-lg flex w-80 rounded-md flex-col z-10 bg-white">
      {!cartItems ? (
        <div className="absolute right-0 h-40 flex items-center justify-center bg-slate-700 w-40">
          Cart is Empty
        </div>
      ) : (
        <div className="p-4 flex flex-col space-y-2">
          <h1 className="text-gray-800 font-semibold">Shopping Cart</h1>

          <div className="flex gap-2">
            {/* image */}
            <div className="bg-gray-400 flex py-6 px-4 rounded-md">
              <Image
                src="/shopping-bag.png"
                alt="d"
                width={40}
                height={40}
                className=""
              />
            </div>

            {/* disc */}
            <div className="flex justify-between">
              <div className="flex-col space-y-2">
                <p className="font-semibold">Shopping bag</p>
                <p className="text-sm text-muted-foreground">available</p>
              </div>
              <p className="absolute right-4">40$</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p>subtotal</p>
            <p>40$</p>
          </div>

          <p className="text-sm text-muted-foreground">
            shipping and taxes calculated at checkout
          </p>
          <div className="flex justify-between">
            <Button variant={"outline"}>View cart</Button>
            <Button>Check out</Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartModel;
