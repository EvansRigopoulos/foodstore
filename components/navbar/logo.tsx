import React from "react";
import favicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="https://i.postimg.cc/VL8Lktjf/logo.jpg"
        alt="To Diamanti"
        width={100}
        height={100}
        className="sm:w-20"
      />
    </div>
  );
}
