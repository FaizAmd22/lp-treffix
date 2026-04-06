/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedButton from "@/shared/components/animated-button";
import { ArrowNarrowRight } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ProductSectionHome() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const productList = [
    {
      title: "Manajemen Karyawan (HRMS)",
      link: "/employee-management",
      image: "/images/home-product-01.png",
      logo: "/logo/fixwork.svg",
    },
    {
      title: "Tracker Kendaraan",
      link: "#",
      coming_soon: true,
      image: "/images/home-product-02.png",
    },
    {
      title: "Warehouse Monitoring",
      link: "#",
      coming_soon: true,
      image: "/images/home-product-03.png",
    },
  ];

  return (
    <section
      id="product-section"
      className="relative lg:min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={"/images/bg-contact.svg"}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-24 pb-16">
        <p className="text-gray-500 mb-5">
          Produk Inovatif untuk Operasional Bisnis Modern
        </p>
        <p className="text-3xl lg:text-[38px] font-semibold leading-snug m-0">
          Produk kami menggabungkan{" "}
          <span className="text-(--primary-color)">
            AI, otomatisasi, analitik, dan IoT
          </span>{" "}
          untuk meningkatkan kinerja dan efisiensi operasional bisnis.
        </p>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 mt-14">
          {productList.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="lg:hidden mt-14 relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {productList.map((item, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{
                  scrollSnapAlign: "center",
                  width: "calc(90vw - 2rem)",
                }}
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <ScrollDots total={productList.length} scrollRef={scrollRef} />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  item,
}: {
  item: {
    title: string;
    link: string;
    coming_soon?: boolean;
    image: string;
    logo?: string;
  };
}) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-auto flex flex-col items-center overflow-hidden rounded-2xl">
        {/* Wrapper yang kena efek zoom + blur */}
        <div
          className="relative w-full transition-all duration-500"
          style={{
            filter: hovered ? "blur(2px) brightness(0.6)" : "none",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-contain transition-all duration-500"
            style={{
              transform: hovered ? "scale(1.07)" : "scale(1)",
            }}
          />

          {item.logo && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <img
                src={item.logo}
                alt={item.title}
                className="w-37.5 object-contain"
              />
            </div>
          )}
        </div>

        {/* Hover button overlay — di luar wrapper, tidak kena blur */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {item.coming_soon ? (
            <div
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(6px)",
              }}
            >
              Segera Hadir
            </div>
          ) : (
            <AnimatedButton onClick={() => router.push(item.link)}>
              Eksplorasi Produk Kami
            </AnimatedButton>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mt-5">
        <span
          className="transition-all duration-300 overflow-hidden"
          style={{
            maxWidth: hovered ? "20px" : "0px",
            opacity: hovered ? 1 : 0,
            color: "var(--primary-color)",
          }}
        >
          <ArrowNarrowRight />
        </span>
        <p
          className="text-[22px] font-bold text-[#3D4155] m-0 transition-colors duration-300"
          style={{ color: hovered ? "var(--primary-color)" : "#3D4155" }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}

function ScrollDots({
  total,
  scrollRef,
}: {
  total: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            scrollRef.current?.scrollTo({
              left: i * scrollRef.current.offsetWidth,
              behavior: "smooth",
            });
          }}
          className="rounded-full transition-all duration-300 border-0 p-0 cursor-pointer"
          style={{
            width: i === activeIndex ? 50 : 8,
            height: 8,
            background: i === activeIndex ? "var(--primary-color)" : "#D1D5DB",
          }}
        />
      ))}
    </div>
  );
}
