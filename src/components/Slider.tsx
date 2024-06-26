import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slides } from "@/lib/data";
import Image from "next/image";

import * as React from "react";
const page = () => {
  return (
    <div className="h-screen w-screen md:px-16">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div key={slide.id}>
                <div
                  className={`relative flex h-[calc(100vh-80px)] w-full flex-col items-center lg:flex-row ${slide.bg}`}
                >
                  {/* Text */}
                  <div className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-6 text-center md:w-full md:text-6xl lg:h-[calc(100vh-80px)]">
                    <p className="">{slide.content}</p>
                    <p className="text-3xl xl:text-6xl">{slide.title}</p>
                    <Button>Shop Now!</Button>
                  </div>
                  {/* Image */}
                  <div className="relative h-1/2 w-screen md:w-full lg:h-[calc(100vh-80px)] lg:w-1/2">
                    <Image
                      src={slide.image}
                      alt="slide"
                      fill
                      className=" object-cover
                      "
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default page;
