"use client";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const Page = () => {
  return (
    <div className="mt-20">
      <Filter />
      <h1>Shoes for you</h1>
      <ProductList />
    </div>
  );
};
export default Page;
