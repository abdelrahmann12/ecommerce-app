"use client";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
// };

export default function MainSlider() {
  return (
 

    <Carousel className=" overflow-hidden p-1 h-"  >
      <CarouselContent >
        <CarouselItem className="overflow-hidden relative w-full h-[500px]">
          <Image src={"/images/slider-image-1.jpeg"} alt='slider img' fill />
        </CarouselItem>
        <CarouselItem className="overflow-hidden relative w-full h-[500px]">
          <Image src={"/images/slider-image-2.jpeg"} alt='slider img' fill />
        </CarouselItem>
        <CarouselItem className="overflow-hidden relative w-full h-[500px]">
          <Image src={"/images/slider-image-3.jpeg"} alt='slider img' fill/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="z-10 absolute bg-black text-white top-1/2 left-5" />
      <CarouselNext className=" z-10 absolute bg-black text-white top-1/2 right-5" />
    </Carousel>



    // <Slider className='' {...settings}>
    //   <div>
    //     <Image src={"/images/slider-image-1.jpeg"} alt='slider img' width={600} height={600}/>
    //   </div>
    //   <div>
    //     <Image src={"/images/slider-image-2.jpeg"} alt='slider img' width={600} height={600}/>
    //   </div>
    //   <div>
    //     <Image src={"/images/slider-image-3.jpeg"} alt='slider img' width={600} height={600}/>
    //   </div>

    // </Slider>

    
  );
}
