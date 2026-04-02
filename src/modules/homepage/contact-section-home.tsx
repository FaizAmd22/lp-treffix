/* eslint-disable @next/next/no-img-element */
"use client";

import DemoRequestForm from "@/shared/components/demo-request-form";

export default function ContactSectionHome() {
  return (
    <section
      className="relative lg:min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={"/images/home-bg-contact.svg"}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-24 pb-16 ">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-5 font-semibold">
              Wujudkan{" "}
              <span className="text-(--primary-color)">Visi Bisnis</span> Anda
              dengan Teknologi
            </p>

            <p className="text-gray-400">
              Hubungi kami dan temukan berbagai kemungkinan dengan solusi
              teknologi yang tepat untuk mendorong pertumbuhan dan transformasi
              digital bisnis Anda.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg w-full lg:w-[45%] mt-14">
            <DemoRequestForm type="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
