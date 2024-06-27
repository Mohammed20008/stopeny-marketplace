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
    <div className="h-screen w-screen px-16">
      <Carousel className="">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div key={slide.id}>
                <div
                  className={`relative flex h-[calc(100vh-80px)] w-full flex-col items-center lg:flex-row ${slide.bg}`}
                >
                  {/* Text */}
                  <div className="flex h-1/2 w-full flex-col items-center justify-center gap-6 px-4 text-center md:w-full md:text-3xl lg:h-[calc(100vh-80px)] lg:w-1/2 lg:text-4xl">
                    <p className="relative flex items-center font-medium leading-snug tracking-tight text-gray-600">
                      {`${slide.content}`}
                      {index === 0 && (
                        <span className="absolute -right-10 -top-4 h-10 w-10 md:-right-4 md:top-8 md:h-20 md:w-20 lg:right-16 lg:top-10 xl:-right-10 xl:-top-12">
                          {" "}
                          <Image
                            alt="test"
                            fill
                            src="/feather.png"
                            className="absolute md:right-0 md:top-0 xl:-right-6 xl:top-0"
                          />
                        </span>
                      )}
                    </p>
                    <p className="text-3xl font-medium xl:text-6xl">
                      {slide.title}
                    </p>
                    <Button>Shop Now!</Button>
                  </div>
                  {/* Image */}
                  <div className="relative h-1/2 w-full md:w-full lg:h-[400px] lg:w-1/2">
                    <Image
                      src={slide.image}
                      alt="slide"
                      fill
                      className="object-contain
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
