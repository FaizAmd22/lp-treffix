import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";

export const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Service",
    link: "/produk",
    child: [
      {
        title: "Pemantauan Karyawan",
        description:
          "Memungkinkan pengawasan karyawan dengan otomatis dan real-time.",
        link: "/produk",
      },
      {
        title: "Pemantauan Penyimpanan Dingin",
        description: "Memastikan kontrol suhu dan keamanan secara otomatis.",
        link: "/produk",
      },
      {
        title: "Pemantauan Kendaraan ",
        description: "Menghadirkan pengawasan cerdas dan pelacakan kendaraan.",
        link: "/produk",
      },
    ],
  },
  {
    title: "Hubungi kami",
    link: "#footer",
  },
  {
    title: "FAQ",
    link: "#faq",
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
        <div className="hidden space-x-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item, index) =>
                item.child ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                        {item.child.map((child, index) => (
                          <ListItem
                            key={index}
                            title={child.title}
                            // href={item.link}
                            href={"#"}
                          >
                            {child.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    {/* <Link href={item.link} passHref> */}
                    <NavigationMenuLink
                      href={item.link}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                    {/* </Link> */}
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="hidden flex-row gap-2 md:flex">
        <Button variant={"outline"}>Demo</Button>
        <Button>Contact Us</Button>
      </div>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant={"outline"} className="block md:hidden">
            <Image src="/icons/bars.svg" alt="menu" width={15} height={15} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="left-auto right-0 top-0 mt-0 h-screen rounded-none">
          <div className="h-full content-center p-5">
            <DrawerClose>
              <Button variant={"outline"} className="absolute right-3 top-3">
                <Image src="/icons/x.svg" alt="close" width={10} height={10} />
              </Button>
            </DrawerClose>
            <NavigationMenu className="text-center">
              <NavigationMenuList className="flex flex-col">
                {items.map((item, index) =>
                  item.child ? (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      {/* <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                          {item.child.map((child, index) => (
                            <ListItem
                              key={index}
                              title={child.title}
                              href={item.link}
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent> */}
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index} className="w-full">
                      {/* <Link href={item.link} passHref> */}
                      <NavigationMenuLink
                        href={item.link}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                      {/* </Link> */}
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        href={props.href}
        className={cn(
          "block h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
      >
        <div className="flex h-full flex-col justify-between gap-1">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
