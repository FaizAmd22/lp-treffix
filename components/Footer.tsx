import React from "react";
import { H2 } from "./ui/h2";
import { Button } from "./ui/button";
import Image from "next/image";
import { items } from "./Navbar";
import Link from "next/link";
import { P } from "./ui/p";
import { Input } from "./ui/input";
import { number } from "@/lib/utils";
import { H4 } from "./ui/h4";

const footerItems = [
  {
    title: "Terms",
    link: "#",
  },
  {
    title: "Privacy",
    link: "#",
  },
  {
    title: "Cookies",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div id="footer" className="mb-10 flex w-full flex-col gap-16">
      <div className="flex flex-col items-center gap-5 rounded-xl bg-primary px-5 py-10 text-center">
        <H2 className="font-bold text-background">
          Ready to take the journey with us?
        </H2>
        <Link href={"https://wa.me/" + number} target="_blank">
          <Button variant="roundedinvert" className="w-fit">
            Contact Us
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex w-full flex-col gap-2 md:w-9/12">
            <Image src="/Logo.svg" alt="logo" width={100} height={100} />
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4">
                <H4 className="text-base font-bold text-[#475467]">
                  HEADQUARTERS
                </H4>
                <P className="text-sm text-muted-foreground">
                  PT. Lalu Lintas Lancar Permata Regency D/37, Jl H Kelik,
                  Srengseng, Kembangan, Jakarta Barat.
                </P>
              </div>
              <div className="flex flex-col gap-4">
                <H4 className="text-base font-bold text-[#475467]">
                  CONTACT US
                </H4>
                <div className="flex flex-col gap-2">
                  <div>
                    <P className="text-sm font-bold text-muted-foreground">
                      Email:
                    </P>
                    <P className="!mt-0 text-sm text-muted-foreground">
                      timothy@treffix.id
                    </P>
                  </div>
                  <div>
                    <P className="text-sm font-bold text-muted-foreground">
                      Mobile:
                    </P>
                    <P className="!mt-0 text-sm text-muted-foreground">
                      (+62) 851-5525-2814
                    </P>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <H4 className="text-base font-bold text-[#475467]">PRODUCTS</H4>
                <div className="flex flex-col gap-2">
                  {items[1].child?.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <P className="text-sm text-muted-foreground">
                        {item.title}
                      </P>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <H4 className="text-base font-bold text-[#475467]">SITE MAP</H4>
                <div className="flex flex-col gap-2">
                  {items.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <P className="text-sm text-muted-foreground">
                        {item.title}
                      </P>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row gap-3">
              {items.map((item, index) => (
                <Link key={index} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </div> */}
          </div>
          <div className="mt-5 flex w-max flex-col gap-2 md:mt-0">
            <P className="font-bold">Stay up to date</P>
            <div className="flex flex-row gap-3">
              <Input type="email" placeholder="Enter your email" />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <P className="mt-5 text-muted-foreground md:mt-0">
            © 2024 Treffix. All rights reserved.
          </P>
          <div className="flex flex-row gap-3">
            {footerItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-muted-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
