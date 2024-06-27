// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Menue = () => {
//   const [Open, setOpen] = useState(false);
//   return (
//     <div>
//       <div className="relative h-8 w-8 cursor-pointer">
//         <Image src="/menu.png" fill alt="menu" onClick={() => setOpen(!Open)} />
//       </div>
//       {Open && (
//         <div className="absolute inset-x-0 top-20 z-10 flex min-h-screen flex-col items-center justify-center gap-y-12 bg-black bg-opacity-95 text-white backdrop-blur-3xl">
//           <Link href="/homepage">Home Page</Link>
//           <Link href="/homepage">Home Page</Link>
//           <Link href="/homepage">Home Page</Link>
//           <Link href="/homepage">Home Page</Link>
//           <Link href="/homepage">Home Page</Link>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Menue;
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
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
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className=" z-10 flex min-h-screen flex-col items-center justify-center gap-y-12 backdrop-blur-3xl">
          <Link href="/homepage">Home Page</Link>
          <Link href="/homepage">Home Page</Link>
          <Link href="/homepage">Home Page</Link>
          <Link href="/homepage">Home Page</Link>
          <Link href="/homepage">Home Page</Link>{" "}
        </div>
      </SheetContent>
    </Sheet>
  );
}
