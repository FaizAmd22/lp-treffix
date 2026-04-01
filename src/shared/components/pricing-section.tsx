/* eslint-disable @next/next/no-img-element */
"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button, Tag } from "antd";
import { CheckOutlined, StarFilled } from "@ant-design/icons";
import DemoRequestModal from "./demo-request-modal";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  normalPrice?: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  recomendation?: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: "lite",
    name: "Lite",
    badge: "50% Off",
    normalPrice: "Rp. 23.000",
    price: "Rp 11.500",
    period: "(per karyawan/bulan)",
    description: "Cocok untuk tim dengan skala kecil & startup",
    cta: "Mulai Sekarang",
    recomendation: true,
    features: [
      "Sistem Absensi Cerdas",
      "Manajemen SDM (Payroll)",
      "Cuti & Izin",
      "Shift",
      "Onboarding",
      "Offboarding Karyawan",
      "Employee Self Service",
      "Notifikasi email/chat customer service",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    badge: "35% Off",
    normalPrice: "Rp. 30.000",
    price: "Rp 19.500",
    period: "(per karyawan/bulan)",
    description: "Cocok untuk perusahaan yang sedang berkembang",
    cta: "Mulai Sekarang",
    features: [
      "Semua Fitur Paket Lite",
      "MPP Karyawan",
      "Multi Level Approval",
      "Man Power Planning (MPP)",
      "Pelaporan Praktis",
      "Multi Branch",
      "Integrasi Data",
      "Learning Management System",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Rp 60.000",
    period: "(per karyawan/bulan)",
    description: "Cocok untuk perusahaan dengan skala besar",
    cta: "Mulai Sekarang",
    features: [
      "Semua Fitur Paket Professional",
      "Manajemen Laporan",
      "Custom Laporan HR",
      "Persetujuan Personal",
      "Radius",
      "Whitelabeling HR",
      "Tunjangan Medis & Asuransi",
    ],
  },
];

function PricingCard({
  plan,
  setModalOpened,
}: {
  plan: PricingPlan;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}) {
  const isRec = plan.recomendation;

  return (
    <div className="flex flex-col h-full w-full justify-center">
      {/* Recommended badge — outside card */}
      {isRec && (
        <div className="flex justify-center -mb-3 relative z-10">
          <Tag
            className="rounded-full! px-4! py-1! text-xs font-bold border-0!"
            style={{ background: "#FCD34D", color: "#3D4155" }}
          >
            <StarFilled className="mr-1.5" />
            Direkomendasikan
          </Tag>
        </div>
      )}

      {/* Card body — flex-1 so all cards stretch to same height */}
      <div
        className={`relative flex flex-col rounded-3xl py-9 px-7 transition-all duration-300 overflow-hidden ${
          isRec ? "shadow-2xl h-full lg:h-160" : "h-full lg:h-148 mt-0 lg:mt-2"
        }`}
        style={{
          background: isRec
            ? "linear-gradient(135deg, #2563eb, #1e3a8a)"
            : "white",
        }}
      >
        {/* Corner badge */}
        {plan.badge && (
          <div
            className={`absolute top-0 right-0 rounded-bl-xl font-bold text-sm px-5 py-2 ${
              isRec
                ? "bg-white text-(--primary-color)"
                : "bg-(--primary-color) text-white"
            }`}
          >
            {plan.badge}
          </div>
        )}

        {/* Name + desc */}
        <div className="mb-4">
          <h3
            className={`font-bold text-lg m-0 ${
              isRec ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`text-sm mt-1 m-0 ${
              isRec ? "text-[#DBDBDB]" : "text-[#77787D]"
            }`}
          >
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          {plan.normalPrice && (
            <p
              className={`line-through text-sm m-0 ${
                isRec ? "text-[#DBDBDB]" : "text-[#77787D]"
              }`}
            >
              {plan.normalPrice}
            </p>
          )}
          <div className="flex items-end gap-1.5 mt-1">
            <p
              className={`text-3xl font-extrabold m-0 ${
                isRec ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.price}
            </p>
            <p
              className={`text-xs mb-1 m-0 ${
                isRec ? "text-[#DBDBDB]" : "text-[#77787D]"
              }`}
            >
              {plan.period}
            </p>
          </div>
        </div>

        {/* CTA */}
        <Button
          block
          size="large"
          className="rounded-full! font-semibold! mb-6 h-14! border-0!"
          onClick={() => setModalOpened(true)}
          style={
            isRec
              ? { background: "white", color: "var(--primary-color)" }
              : { background: "var(--primary-color)", color: "white" }
          }
        >
          {plan.cta}
        </Button>

        {/* Divider */}
        <div
          className="mb-5"
          style={{
            height: 1,
            background: isRec ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
          }}
        />

        {/* Features */}
        <ul className="list-none m-0 p-0 space-y-3 flex-1">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: isRec
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(69,107,242,0.08)",
                }}
              >
                <CheckOutlined
                  style={{
                    color: isRec ? "white" : "var(--primary-color)",
                    fontSize: 10,
                  }}
                />
              </div>
              <span
                className={`text-sm leading-snug ${
                  isRec ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-pricing.svg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[38px] sm:text-4xl font-semibold text-white m-0 mb-3 leading-tight">
            Pilih{" "}
            <span style={{ color: "var(--primary-color)" }}>Paket Terbaik</span>{" "}
            untuk Bisnis Anda
          </h2>
          <p className="text-gray-400 m-0 max-w-lg lg:max-w-full mx-auto">
            Nikmati pilihan harga fleksibel yang disesuaikan dengan kebutuhan
            dan skala bisnis Anda. Semua paket dilengkapi uji coba gratis 14
            hari.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              setModalOpened={setModalOpened}
            />
          ))}
        </div>

        <div className="lg:hidden relative">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-5 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="shrink-0 flex flex-col"
                style={{
                  scrollSnapAlign: "center",
                  width: "calc(85vw - 2rem)",
                  paddingTop: plan.recomendation ? 0 : "15px",
                }}
              >
                <PricingCard plan={plan} setModalOpened={setModalOpened} />
              </div>
            ))}
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
