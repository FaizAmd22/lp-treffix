/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import AnimatedButton from "./animated-button";
import DemoRequestModal from "./demo-request-modal";

export default function CtaSection() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <section
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-24 pb-16 flex flex-col items-center text-center">
        <p className="text-3xl lg:text-[38px] font-semibold leading-snug m-0">
          Siap <span className="text-(--primary-color)">Digitalisasi</span>{" "}
          Sistem HR Perusahaan Anda?
        </p>

        <div className="w-full lg:w-[60%] mt-5">
          <p className="text-sm lg:text-base text-gray-500 m-0">
            Mulai gunakan Fixwork sekarang dan rasakan kemudahan mengelola
            absensi, cuti, payroll, hingga karyawan dalam satu platform
            terintegrasi. Daftar hari ini dan tingkatkan efisiensi operasional
            HR perusahaan Anda!
          </p>
        </div>

        <div className="flex items-center w-full mt-12">
          <div className={`lg:w-full h-70 sm:h-96 lg:h-150 flex-1`}>
            <img
              src={"/images/phone-contact.png"}
              alt={"phone"}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 lg:mt-10">
          <AnimatedButton onClick={() => setModalOpened(true)}>
            Hubungi Kami
          </AnimatedButton>
        </div>
      </div>

      <DemoRequestModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </section>
  );
}
