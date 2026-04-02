/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import AnimatedButton from "../../shared/components/animated-button";
import { useState } from "react";
import DemoRequestModal from "../../shared/components/demo-request-modal";

export default function HeroSection() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <section
      className="relative h-auto lg:h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={"/images/bg-hero.svg"}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="flex flex-col gap-6 col-span-5 lg:col-span-3 text-center lg:text-start items-center lg:items-start">
            <div className="inline-flex items-center gap-2 self-center lg:self-start">
              <Image
                src="/logo/fixwork.svg"
                alt="Fixwork Logo"
                width={152}
                height={42}
              />
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-tight m-0">
                Solusi Absensi Karyawan{" "}
                <span
                  className="block"
                  style={{ color: "var(--primary-color)" }}
                >
                  Modern & Otomatis
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-lg m-0">
              Optimalkan manajemen SDM dengan HRMS berbasis AI yang dilengkapi
              face recognition, geofencing, dan dashboard terintegrasi. Kelola
              absensi, cuti, payroll, dan karyawan secara otomatis, akurat, dan
              real-time dalam satu platform.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <AnimatedButton onClick={() => setModalOpened(true)}>
                Hubungi Kami
              </AnimatedButton>
            </div>
          </div>

          <div className="relative col-span-5 lg:col-span-2 flex justify-center items-center lg:justify-end">
            <img
              src="/images/phone-hero.png"
              alt="Fixwork App Preview"
              className="w-full h-auto object-contain lg:animate-(--animate-float) will-change-transform"
            />
          </div>
        </div>
      </div>

      <DemoRequestModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </section>
  );
}
