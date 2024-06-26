import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <h1 className="text-5xl">This Page is not found</h1>
      <Link href="/" className="flex items-center justify-center gap-2">
        <Button className="group w-fit">
          <BiLeftArrowAlt className="text-lg transition-transform duration-500 group-hover:-translate-x-2" />{" "}
          Back to home
        </Button>
      </Link>{" "}
    </div>
  );
};
export default NotFound;
