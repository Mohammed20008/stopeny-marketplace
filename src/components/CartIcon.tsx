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

export default function CartIcon() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <div className="relative">
            <Image src="/cart.png" alt="img" width={30} height={30} />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100"></SheetContent>
    </Sheet>
  );
}
