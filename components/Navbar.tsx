import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Produk",
    link: "/produk",
  },
  {
    title: "Hubungi kami",
    link: "/contact",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-background py-3">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="logo"
            className="mr-16"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex space-x-8">
          {items.map((item, index) => (
            <Link key={index} href={item.link} className="hover:text-blue-500">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant={"outline"}>Demo</Button>
        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
