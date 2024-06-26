import Image from "next/image";
import { useState } from "react";
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/23698636/pexels-photo-23698636/free-photo-of-a-room-with-pictures-on-the-wall-and-tables.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/22805588/pexels-photo-22805588/free-photo-of-a-close-up-of-a-white-flower-branch.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/23698636/pexels-photo-23698636/free-photo-of-a-room-with-pictures-on-the-wall-and-tables.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-sneaking-cat-on-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/20218578/pexels-photo-20218578/free-photo-of-a-coffeepot-and-a-cup-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
];
const ProductImages = () => {
  const [index, setindex] = useState(0);

  return (
    <div className="sticky top-20">
      {/* mainImage */}
      <div className=" relative h-96 w-full rounded-md ">
        <div className="relative rounded-md" />
        <Image
          src={images[index].url}
          alt="img"
          fill
          className=" rounded-md object-contain"
        />
      </div>
      {/* small images */}
      <div className="mt-6 flex flex-wrap justify-between gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative h-40 w-40 cursor-pointer rounded-md"
            onClick={() => setindex(i)}
          >
            <Image src={image.url} alt="img" fill className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
