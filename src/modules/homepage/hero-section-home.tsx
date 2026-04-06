/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedButton from "../../shared/components/animated-button";
import { RotatingCube } from "@/shared/components/rotating-cube";

export default function HeroSectionHome() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={"/images/home-bg-hero.png"}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-5xl lg:text-[72px] text-white font-bold">
            <span className="text-(--primary-color)">Transformasi Digital</span>{" "}
            untuk Operasional yang Lebih Efisien
          </p>

          <p className="text-[#BABABA] lg:text-lg px-24 mt-10 lg:mt-5">
            Tingkatkan kinerja bisnis dengan solusi digital modern berbasis AI
            (Artificial Intelligence) yang menghadirkan kemudahan, kontrol, dan
            efisiensi dalam satu ekosistem terintegrasi.
          </p>

          <div className="mt-28 lg:mt-16">
            <AnimatedButton
              onClick={() => {
                document.getElementById("product-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Lihat Produk Kami
            </AnimatedButton>
          </div>
        </div>
      </div>

      <div
        className="absolute top-16 w-130 h-130 rounded-full lg:animate-(--animate-breath) will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(29,78,216,0.3) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute bottom-16 right-20 w-80 h-80 rounded-full lg:animate-(--animate-breath) will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(29,78,216,0.3) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="hidden lg:flex absolute top-68 right-[26%] col-span-5 lg:col-span-2 justify-center items-center lg:justify-end">
        <img
          src="/images/home-cube-hero-1.svg"
          alt="cube01"
          className="w-full h-auto object-contain lg:animate-(--animate-float) will-change-transform"
        />
      </div>

      <div className="hidden lg:flex absolute bottom-74 left-[28%] col-span-5 lg:col-span-2 justify-center items-center lg:justify-end">
        <img
          src="/images/home-cube-hero-2.svg"
          alt="cube02"
          className="w-full h-auto object-contain lg:animate-(--animate-float) will-change-transform"
        />
      </div>

      <div className="w-full h-[120vh] flex items-end justify-center absolute bottom-5">
        <RotatingCube size={600} rotationDuration={7000} />
      </div>
    </section>
  );
}
