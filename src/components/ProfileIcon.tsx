// import Image from "next/image";
// import { Button } from "./ui/button";
// import Link from "next/link";

// const ProfileIcon = ({
//   onClick,
//   isProfileOpen,
//   // dropdownRef,
// }: {
//   onClick: () => void;
//   isProfileOpen: boolean;
//   // dropdownRef: React.RefObject<HTMLDivElement>;
// }) => {
//   return (
//     <div>
//       <Image
//         src="/user1.png"
//         alt="img"
//         width={30}
//         height={30}
//         className=" cursor-pointer"
//         onClick={onClick}
//       />
//       <div className="relative">
//         {isProfileOpen && (
//           <div
//             className="absolute -right-8 top-6 z-10 flex h-40 w-40 flex-col items-center justify-center rounded-md bg-gray-950 shadow-lg ring-1 ring-slate-100"
//             // ref={dropdownRef}
//           >
//             <div className="flex flex-col items-center bg-gray-950">
//               <Link href="/sign-in">
//                 <Button variant={"outline"} className="mb-2 w-fit">
//                   Log In
//                 </Button>
//               </Link>
//               <Link href="/sign-in">
//                 <Button variant={"outline"} className="mb-2 w-fit">
//                   Sign out
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default ProfileIcon;
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ProfileIcon() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Image
            src="/user1.png"
            alt="img"
            width={30}
            height={30}
            className=" cursor-pointer"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
