// import Image from "next/image";
// import CartModel from "./CartModel";
// const CartIcon = ({
//   onClick,
//   isCartOpen,
//   dropdownRef,
// }: {
//   onClick: () => void;
//   isCartOpen: boolean;
//   dropdownRef: React.RefObject<HTMLDivElement>;
// }) => {
//   return (
//     <div className="relative">
//       <Image
//         src="/cart.png"
//         alt="img"
//         width={30}
//         height={30}
//         onClick={onClick}
//       />
//       <div>
//         {isCartOpen && (
//           <div ref={dropdownRef}>
//             <CartModel />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CartIcon;
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function CartIcon({
  onClick,
  isCartOpen,
  dropdownRef,
}: {
  onClick: () => void;
  isCartOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <div className="relative">
            <Image
              src="/cart.png"
              alt="img"
              width={30}
              height={30}
              onClick={onClick}
            />
          </div>
        </Button>
      </SheetTrigger>
      {isCartOpen && (
        <SheetContent ref={dropdownRef} className="bg-gray-100">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      )}
    </Sheet>
  );
}
