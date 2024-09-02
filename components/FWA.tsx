import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { number } from "@/lib/utils";

const FloatingWA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={"https://wa.me/" + number}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg"
      >
        <AspectRatio
          ratio={1}
          className="flex items-center justify-center rounded-full bg-green-600 p-3 shadow-lg"
        >
          <Image
            src="/icons/wa.svg"
            alt="WhatsApp"
            className="h-6 w-6"
            width={50}
            height={50}
          />
        </AspectRatio>
      </a>
    </div>
  );
};

export default FloatingWA;
