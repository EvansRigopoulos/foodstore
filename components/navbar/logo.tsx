import React from "react";
import favicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={favicon} alt="To Diamanti" className="sm:w-20" />
    </div>
  );
}
