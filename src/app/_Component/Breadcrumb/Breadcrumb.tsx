"use client"
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathName = usePathname();
  console.log(pathName);
  const path = pathName.split("/").filter(Boolean);
  console.log(path);
  return (
    <div className=" bg-gray-200 text-center p-3  flex items-center justify-center gap-2 mt-2">
      <span className=" text-gray-500">Home</span>
      <span className="relative -top-1">__</span>
      <span className=" capitalize">{path.join(" / ")}</span>
    </div>
  );
}
