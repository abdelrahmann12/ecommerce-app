import React from "react";
import "./Marquee.css";

export default function Marquee() {
  return (
    <div className=" overflow-hidden whitespace-nowrap bg-amber-400">
      <div className="marque inline-block animate-marquee w-full py-2">
         Free Shipping On Orders Over EG 500 &#x2023; 
      </div>
    </div>
  );
}
