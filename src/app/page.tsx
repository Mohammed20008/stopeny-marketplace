import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-fit">
        <Slider />
      </div>
      <div className="">
        <Categories />
        {/* <ScrollArea /> */}
      </div>
      <div className="">
        <ProductList />
      </div>
    </main>
  );
}
