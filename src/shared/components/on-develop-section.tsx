/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import AnimatedButton from "./animated-button";

const OnDevelopSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={"/images/error-bg.png"}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col items-center justify-center text-white text-center gap-5">
          <div className="w-75 h-auto">
            <img
              src={"/images/error-image.png"}
              alt="bg"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-3xl font-bold">Halaman Sedang Dikembangkan</p>

          <div className="w-[50%] mb-10">
            <p className="text-gray-400">
              Halaman ini masih dalam tahap pengembangan. Kami sedang menyiapkan
              fitur terbaik untuk Anda—silakan kembali lagi nanti ya!
            </p>
          </div>

          <AnimatedButton onClick={() => router.replace("/")}>
            Kembali ke Halaman Utama
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default OnDevelopSection;
