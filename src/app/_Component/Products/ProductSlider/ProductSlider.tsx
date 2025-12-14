"use client";
import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };
  
  export default function ProductSlider({images}:{images:string[]}) {
    return (
     
       <Slider  className='' {...settings}>
        {images.map((img)=>{
            return <Image key={img} src={img} alt='slider img' width={250} height={250}/>
        })}
    </Slider>
     
    )
  }
  