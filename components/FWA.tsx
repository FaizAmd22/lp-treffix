import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { number } from "@/lib/utils";

const FloatingWA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={"https://wa.me/" + number}
        target="_blank"
        rel="noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg"
      >
        <AspectRatio
          ratio={1}
          className="flex items-center justify-center rounded-full bg-green-600 p-3 shadow-lg"
        >
          <Image
            src="/icons/wa.svg"
            alt="WhatsApp"
            className="h-8 w-8"
            width={50}
            height={50}
          />
        </AspectRatio>
      </a>
    </div>
  );
};

export default FloatingWA;
