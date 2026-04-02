/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import {
  ArrowUpRight,
  BankNote01,
  FaceId,
  FileAttachment04,
  MarkerPin06,
  Scan,
  UserLeft01,
  Users03,
} from "@untitledui/icons";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  keyBenefits?: string[];
  image?: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <FaceId />,
    title: "Sistem Absensi Cerdas",
    description:
      "Sistem absensi berbasis AI dengan pengenalan wajah dan geofencing untuk mencatat kehadiran secara akurat, mencegah kecurangan, dan memastikan check-in dan check-out hanya dari lokasi yang valid.",
    keyBenefits: [
      "Absensi Akurat & Bebas Kecurangan",
      "Kontrol Check-In Berbasis Lokasi (Geofencing)",
      "Monitoring Absensi Real-Time",
      "Check-In Cepat & Tanpa Kontak",
      "Data Absensi Akurat & Terpercaya",
    ],
    image: "/images/feature-image-1.png",
  },
  {
    id: 2,
    icon: <FileAttachment04 />,
    title: "Manajemen Permintaan & Persetujuan",
    description:
      "Kelola pengajuan karyawan seperti cuti, izin, reimburse, dan lembur dalam satu sistem dengan alur persetujuan terpusat dan status yang dapat dipantau secara real-time.",
    keyBenefits: [
      "Pengajuan & Persetujuan via Mobile",
      "Alur Persetujuan yang Mudah & Terintegrasi",
      "Riwayat Pengajuan & Persetujuan Lengkap",
      "Notifikasi Status Real-Time",
      "Mengurangi Beban Administrasi HR",
    ],
    image: "/images/feature-image-2.png",
  },
  {
    id: 3,
    icon: <MarkerPin06 />,
    title: "Manajemen Kunjungan Klien",
    description:
      "Pantau dan kelola kunjungan klien karyawan dengan pencatatan akurat dan data lokasi untuk meningkatkan akuntabilitas serta produktivitas tim lapangan.",
    keyBenefits: [
      "Pelacakan Kunjungan yang Akurat",
      "Kontrol Check-In Berbasis Lokasi",
      "Check-In Cepat & Tanpa Kontak",
      "Riwayat Aktivitas Kunjungan Lengkap",
    ],
    image: "/images/feature-image-3.png",
  },
  {
    id: 4,
    icon: <UserLeft01 />,
    title: "Rekrutmen & Perencanaan Tenaga Kerja (MPP)",
    description:
      "Rencanakan kebutuhan tenaga kerja dan optimalkan proses rekrutmen dengan manpower planning terstruktur serta manajemen kandidat dalam satu sistem terpadu.",
    keyBenefits: [
      "Manajemen Manpower Planning (MPP)",
      "Lowongan Pekerjaan Kustom",
      "Penjadwalan Interview Terstruktur",
      "Pembuatan Kontrak Kandidat",
      "Notifikasi Status Rekrutmen Real-Time",
    ],
    image: "/images/feature-image-4.png",
  },
  {
    id: 5,
    icon: <Users03 />,
    title: "Manajemen Karyawan",
    description:
      "Kelola kontrak, area kerja, dan data karyawan secara efisien dalam sistem HR terpusat yang aman dan terintegrasi.",
    keyBenefits: [
      "Manajemen Kontrak Karyawan",
      "Data Karyawan Terpusat",
      "Manajemen Status Karyawan",
      "Pengaturan Lokasi & Jadwal Kerja",
      "Riwayat Absensi Karyawan Lengkap",
    ],
    image: "/images/feature-image-5.png",
  },
  {
    id: 6,
    icon: <Scan />,
    title: "Onboarding Otomatis Berbasis OCR",
    description:
      "Percepat proses onboarding karyawan dengan teknologi OCR yang secara otomatis menangkap dan memverifikasi data dari dokumen, sehingga mengurangi input manual dan meminimalkan kesalahan.",
    keyBenefits: [
      "Onboarding Karyawan Lebih Cepat",
      "Ekstraksi Data Berbasis OCR",
      "Mengurangi Input Data Manual",
      "Akurasi Data Lebih Tinggi",
      "Proses Onboarding yang Skalabel",
    ],
    image: "/images/feature-image-6.png",
  },
  {
    id: 7,
    icon: <BankNote01 />,
    title: "Payroll & Slip Gaji Digital",
    description:
      "Otomatisasi perhitungan payroll dan distribusikan slip gaji digital secara aman untuk memastikan pembayaran karyawan akurat dan tepat waktu.",
    keyBenefits: [
      "Proses Payroll Otomatis",
      "Distribusi Slip Gaji Digital",
      "Payroll Sesuai Regulasi Indonesia",
      "Riwayat & Data Payroll Lengkap",
      "Pembayaran Gaji Tepat Waktu",
    ],
    image: "/images/feature-image-7.png",
  },
];

function RegularCard({
  feature,
  isOpen,
  onToggle,
}: {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="overflow-hidden transition-all duration-300 group hover:shadow-sm hover:scale-[101%] rounded-lg cursor-pointer select-none border-b border-b-[#E8E8E8]"
      onClick={onToggle}
    >
      <div className="px-5 py-5">
        <div className="flex items-start gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors duration-300 bg-(--primary-color)/20 text-(--primary-color)">
              {feature.icon}
            </div>

            <h3
              className={
                "font-semibold text-gray-900 text-lg m-0 leading-snug group-hover:text-(--primary-color) duration-300 transition-all"
              }
            >
              {feature.title}
            </h3>
          </div>

          <div
            className="shrink-0 mt-1 transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              color: "var(--primary-color)",
            }}
          >
            <ArrowUpRight style={{ fontSize: 18 }} />
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed mt-3 m-0">
          {feature.description}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="mx-5 mb-5 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full h-60 rounded-2xl overflow-hidden">
              <img
                src={feature.image || "/images/feature-image.png"}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 m-0">
                Key Benefits
              </p>
              <ul className="list-none m-0 p-0 space-y-3">
                {feature.keyBenefits?.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center text-sm gap-2.5 text-gray-700"
                  >
                    <CheckOutlined
                      style={{
                        color: "green",
                        fontSize: 14,
                      }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set([1]));

  const handleToggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section
      className="relative flex items-center"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="col-span-5 lg:col-span-2 lg:sticky top-24 lg:self-start text-center lg:text-start">
            <p className="mb-4 text-gray-500 text-sm m-0">
              Semua yang Anda Butuhkan untuk Manajemen HR
            </p>
            <p className="text-[28px] lg:text-[38px] font-semibold leading-tight m-0">
              Software HRIS{" "}
              <span style={{ color: "var(--primary-color)" }}>all-in-one</span>{" "}
              dengan 7 modul terintegrasi untuk menyederhanakan operasional HR
              dan meningkatkan produktivitas karyawan.
            </p>
          </div>

          <div className="col-span-5 lg:col-span-3 flex flex-col gap-4">
            {features.map((item) => (
              <RegularCard
                key={item.id}
                feature={item}
                isOpen={openIds.has(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
