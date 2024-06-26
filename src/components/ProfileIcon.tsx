import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProfileIcon = ({
  onClick,
  isProfileOpen,
  dropdownRef,
}: {
  onClick: () => void;
  isProfileOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div>
      <Image
        src="/user1.png"
        alt="img"
        width={30}
        height={30}
        onClick={onClick}
      />
      <div className="relative">
        {isProfileOpen && (
          <div
            ref={dropdownRef}
            className="absolute -right-8 top-6 z-10 flex h-40 w-40 flex-col items-center justify-center rounded-md bg-gray-950 shadow-lg ring-1 ring-slate-100"
          >
            <div className="flex flex-col items-center bg-gray-950">
              <Link href="/sign-in">
                <Button variant={"outline"} className="mb-2 w-fit">
                  Log In
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant={"outline"} className="mb-2 w-fit">
                  Sign out
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfileIcon;
