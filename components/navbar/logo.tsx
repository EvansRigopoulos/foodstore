import React from "react";
import favicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.jpg"
      alt="Το Διαμάντι – Ψητοπωλείο"
      width={1135}
      height={800}
      className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
      priority
    />
  );
}
