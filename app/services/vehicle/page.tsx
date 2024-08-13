import { AspectRatio } from "@/components/ui/aspect-ratio";
import { H1 } from "@/components/ui/h1";
import { H2 } from "@/components/ui/h2";
import { H4 } from "@/components/ui/h4";
import { P } from "@/components/ui/p";
import Image from "next/image";
import React from "react";

import service_3 from "@/public/images/service_3.png";
import service_9 from "@/public/images/service_9.png";
import service_10 from "@/public/images/service_10.png";
import service_11 from "@/public/images/service_11.png";
import service_12 from "@/public/images/service_12.png";
import { cn } from "@/lib/utils";

const Vehicle = () => {
  const values = [
    {
      title: "Lacak Kendaraan secara Real-time",
      desc: "Mudah mengontrol sebaran armada secara real-time dengan solusi telematik yang terhubung dengan dasbor digital. Tingkatkan visibilitas untuk memacu pengambilan keputusan dalam bisnis.",
      img: service_3,
    },
    {
      title: "Geofence(batas wilayah) untuk Operasional Armada",
      desc: "Tentukan pagar virtual dan kendalikan pergerakan armada. Solusi pembatasan wilayah yang dapat disesuaikan memungkinkan menerima peringatan instan dan meningkatkan keamanan dengan memastikan kendaraan mematuhi area yang ditentukan.",
      img: service_9,
    },
    {
      title: "Maksimalkan Efesensi dengan Ritase",
      desc: "Dengan adanya ritase, Anda dapat memantau sudah berapa tempat Armada anda yang sudah di kunjungi dan sudah berapa kali dia beroperasi",
      img: service_10,
    },
    {
      title: "Dashboard (Analytics dan Report)",
      desc: "Dapatkan wawasan  mengenai kinerja armada dengan alat analisis dan pelaporan yang komprehensif. Dari analisis perilaku pengemudi hingga laporan konsumsi bahan bakar. Dengan pendekatan berbasis data kami memungkinkan mengidentifikasi penghematan biaya.",
      img: service_11,
    },
    {
      title: "Pemantauan Perilaku Pengemudi",
      desc: "Meningkatkan keselamatan dan efisiensi dengan layanan pemantauan perilaku pengemudi. Terima peringatan real-time untuk perilaku mengemudi berisiko, membantu menciptakan lingkungan yang lebih aman, mengurangi kecelakaan, dan menurunkan biaya asuransi.",
      img: service_12,
    },
  ];

  return (
    <div>
      <div
        id="hero"
        className="mx-break-out px-break-out mb-40 flex h-96 items-center justify-center bg-[#F6F9FF]"
      >
        <div className="flex w-full flex-col gap-3 px-5 text-center md:w-1/2">
          <P className="font-bold text-primary">Service</P>
          <H1>Pemantauan Kendaraan</H1>
          <P>
            Tingkatkan pengawasan aset kendaraan Anda dengan mudah dalam
            genggaman. Dapatkan informasi penting tentang kendaraan Anda secara
            langsung dan cepat.
          </P>
        </div>
      </div>

      {values.map((value, index) => (
        <div key={index} className="mb-40 flex flex-col">
          <div
            className={cn(
              "flex items-center gap-3 md:gap-60",
              index % 2 === 0
                ? "flex-col-reverse md:flex-row"
                : "flex-col-reverse md:flex-row-reverse",
            )}
          >
            <div className="w-full md:w-3/5">
              <H2>{value.title}</H2>
              <P>{value.desc}</P>
            </div>
            <div className="w-full md:w-2/5">
              <AspectRatio ratio={1}>
                <Image
                  src={value.img}
                  alt={"service"}
                  fill
                  className="rounded-xl object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehicle;
