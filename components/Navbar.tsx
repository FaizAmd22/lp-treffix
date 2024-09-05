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
import { cn, number } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Card } from "./ui/card";

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
        link: "/services/employee",
        icon: "/icons/user.svg",
      },
      {
        title: "Pemantauan Penyimpanan Dingin",
        description: "Memastikan kontrol suhu dan keamanan secara otomatis.",
        link: "/services/cold-storage",
        icon: "/icons/box.svg",
      },
      {
        title: "Pemantauan Kendaraan ",
        description: "Menghadirkan pengawasan cerdas dan pelacakan kendaraan.",
        link: "/services/vehicle",
        icon: "/icons/car.svg",
      },
    ],
  },
  {
    title: "Hubungi kami",
    link: "/#footer",
  },
  // {
  //   title: "FAQ",
  //   link: "/#faq",
  // },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-background py-3">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="treffix_logo"
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
                            href={child.link}
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
        <Link href={"https://wa.me/" + number} target="_blank">
          <Button>Contact Us</Button>
        </Link>
      </div>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant={"outline"} className="block md:hidden">
            <Image src="/icons/bars.svg" alt="menu" width={15} height={15} />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          className="left-auto right-0 top-0 mt-0 h-screen w-2/3 rounded-none sm:w-1/2"
          showBar={false}
        >
          <DrawerTitle className="px-5 py-3">
            <div className="flex flex-row items-center justify-between">
              <Link href="/">
                <Image src="/Logo.svg" alt="logo" width={100} height={100} />
              </Link>
              <DrawerClose>
                <Button variant={"outline"}>
                  <Image
                    src="/icons/x.svg"
                    alt="close"
                    width={10}
                    height={10}
                  />
                </Button>
              </DrawerClose>
            </div>
          </DrawerTitle>
          <div className="h-full content-center self-center p-5">
            <NavigationMenu className="text-center">
              <NavigationMenuList className="flex flex-col">
                {items.map((item, index) =>
                  item.child ? (
                    <Collapsible key={index}>
                      <CollapsibleTrigger asChild className="text-center">
                        <NavigationMenuItem className="flex flex-row items-center justify-center">
                          <p className="mr-1">Services</p>
                          <ChevronsUpDown className="h-4 w-4" />
                        </NavigationMenuItem>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3 flex flex-col gap-3">
                        {item.child.map((child, index) => (
                          <Link href={child.link} key={index} passHref>
                            <div className="flex flex-row items-center gap-3 rounded-md border px-4 py-3 text-left font-mono text-sm hover:bg-slate-200">
                              <Card className="p-1">
                                <Image
                                  src={child.icon}
                                  alt="icon"
                                  width={25}
                                  height={25}
                                />
                              </Card>
                              {child.title}
                            </div>
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={item.link}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
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
