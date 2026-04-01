"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "@untitledui/icons";

const navLinks = [
  { label: "About Us", href: "https://treffix.id/" },
  {
    label: "Our Products",
    href: "#",
    children: [{ label: "Employee Management", href: "#" }],
  },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgba(16,16,16,0.7) 0%, rgba(16,16,16,0.4) 50%, transparent 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 lg:h-24">
        <Link href="/">
          <Image
            src="/logo/treffix.svg"
            alt="Treffix Logo"
            width={137}
            height={40}
            className="w-28 lg:w-34.25 h-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-xl text-white font-bold transition-colors cursor-pointer bg-transparent border-0 outline-none"
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                    onClick={() => setOpenDropdown((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`text-xs transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown && (
                    <div
                      className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        background: "rgba(20,20,30,0.97)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={() => setOpenDropdown(true)}
                      onMouseLeave={() => setOpenDropdown(false)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-xl text-white hover:bg-(--primary-color)/10 transition-colors no-underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-xl font-bold text-white transition-colors no-underline"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
