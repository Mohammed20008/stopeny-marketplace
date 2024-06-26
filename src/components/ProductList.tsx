import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productList } from "@/lib/data";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-24 flex flex-wrap justify-center gap-x-4 gap-y-16 md:px-16 2xl:px-64">
      {productList.map((product) => (
        <Card
          key={product.id}
          className="relative h-80 w-80 bg-white transition hover:border-none hover:bg-gray-100 hover:shadow-2xl "
        >
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.discreption}</CardDescription>
          </CardHeader>
          <div className=" rounded-md px-4">
            <CardContent className="relative h-40 w-full rounded-md bg-gray-300">
              <Link href={"/test"}>
                {" "}
                <Image
                  src={product.image}
                  alt="bag"
                  fill
                  className=" object-contain"
                />
              </Link>
            </CardContent>
          </div>

          <CardFooter className="absolute -bottom-4 flex w-full justify-between">
            <Button variant={"default"}>Add to the Cart</Button>
            {product.price}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default ProductList;
