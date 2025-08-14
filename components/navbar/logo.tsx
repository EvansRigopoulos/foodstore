import React from "react";
import favicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://i.postimg.cc/zvPdJGFZ/new-logo.jpg"
      alt="To Diamanti"
      width={700}
      height={700}
      className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
      priority
    />
  );
}
