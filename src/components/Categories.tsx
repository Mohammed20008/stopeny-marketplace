import { slides } from "@/lib/data";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-screen md:px-4">
      <p className="mb-6 ml-20 text-xl font-semibold">Categories</p>
      <div className="scrollbar flex gap-8 overflow-x-scroll">
        {slides.map((slide) => (
          <Card
            key={slide.id}
            className="group relative h-80 w-60 shrink-0 rounded-md"
          >
            <Link href="/list">
              <CardContent className="p4 h-full w-full rounded-md bg-black/90 px-2">
                <Image
                  src={slide.image}
                  alt="category"
                  fill
                  className="z-10 rounded-md object-contain transition-transform delay-100 duration-500 hover:-translate-y-4"
                />
                {/* <Image
                  src="/shopping-bag.png"
                  alt="category"
                  fill
                  className="rounded-md object-contain"
                /> */}
              </CardContent>
            </Link>

            <CardFooter className="overflow-hidden rounded-md">
              <p className="absolute inset-x-0 bottom-0 flex h-16 justify-center rounded-md bg-gray-300 transition-transform duration-500 group-hover:-translate-y-4">
                Category
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Categories;
