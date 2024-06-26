"use client";
import ProductImages from "@/components/ProductImages";
import Text from "@/components/Text";
const Page = () => {
  return (
    <div className="flex">
      {" "}
      <div className="relative flex w-screen flex-col items-center justify-center gap-4 overflow-auto px-4 py-4 shadow-2xl ring-1 ring-slate-50 md:flex-row">
        {/* images */}
        <div className="top-20 flex w-screen flex-col items-center gap-6 bg-gray-100 p-4 shadow-2xl md:sticky md:w-1/2">
          <ProductImages />
        </div>
        {/* text */}
        <div className="sticky top-0 h-full w-full space-y-6 p-4 shadow-2xl ring-1 ring-slate-50 md:w-1/2">
          <Text />
        </div>
      </div>
    </div>
  );
};
export default Page;
