/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function CtaSection() {
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
          Digitalisasi HR Lebih Mudah – Fixwork{" "}
          <span className="text-(--primary-color)">
            Tersedia di App Store & Play Store
          </span>
        </p>

        <div className="w-full mt-5">
          <p className="text-sm lg:text-base text-gray-500 m-0">
            Siap digitalisasi sistem HR perusahaan Anda? Gunakan Fixwork untuk
            mengelola absensi, cuti, payroll, dan data karyawan dalam satu
            platform terintegrasi yang praktis dan efisien. Kini tersedia di App
            Store dan Play Store, memudahkan akses kapan saja dan di mana saja.
            Daftar sekarang dan optimalkan operasional HR perusahaan Anda dengan
            solusi modern yang cepat, aman, dan scalable.
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
        <div className="mt-6 lg:mt-14 flex gap-10">
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.treffix.qerja&pcampaignid=web_share"
            }
            target="_blank"
          >
            <img
              src={"/images/playstore.png"}
              alt="/playstore"
              className="w-full h-full object-cover"
            />
          </Link>

          <Link
            href={"https://apps.apple.com/us/app/fixwork/id6759553307"}
            target="_blank"
          >
            <img
              src={"/images/appstore.png"}
              alt="/appstore"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
