import { AspectRatio } from "@/components/ui/aspect-ratio";
import { H1 } from "@/components/ui/h1";
import { H2 } from "@/components/ui/h2";
import { H4 } from "@/components/ui/h4";
import { P } from "@/components/ui/p";
import Image from "next/image";
import React from "react";

import service_6 from "@/public/images/service_6.png";
import service_7 from "@/public/images/service_7.png";
import service_8 from "@/public/images/service_8.png";

const ColdStorage = () => {
  const komprehensifValue = [
    {
      title: "Kontrol Suhu yang Akurat:",
      desc: "Memastikan bahwa suhu tetap berada dalam rentang yang aman untuk berbagai jenis barang.",
    },
    {
      title: "Efisiensi Energi",
      desc: "Monitor penggunaan energi dari sistem pendingin dan peralatan lainnya untuk mengidentifikasi dan mengurangi pemborosan energi",
    },
    {
      title: "Monitor Buka/Tutup Pintu",
      desc: "Merekam berama lama pintu terbuka yang dapat menyebabkan suhu turun secara drastis",
    },
    {
      title: "Keamanan dan Perlindungan",
      desc: "Dengan pemantauan yang ketat, kurangi risiko pencurian dan kehilangan aset berharga di gudang",
    },
    {
      title: "Laporan dan Analitik",
      desc: "Dapatkan laporan terperinci tentang kondisi gudang, performa sistem pendingin,membantu Anda dalam analisis kinerja dan pengambilan keputusan",
    },
    {
      title: "Peningkatan Respons terhadap Keadaan Darurat",
      desc: "Dapatkan notifikasi segera mengenai keadaan darurat seperti kebocoran, kebakaran, atau perubahan suhu drastis, memungkinkan Anda untuk merespons dengan cepat",
    },
    {
      title: "Dokumentasi dan Laporan",
      desc: "Simpan catatan dan laporan tentang kondisi suhu dan lingkungan, memudahkan Anda untuk memenuhi standar industri dan regulasi yang ketat",
    },
  ];

  const pemeliharaanValue = [
    {
      title: "Perawatan Prediktif",
      desc: "Platform kami mampu memprediksi kapan peralatan Anda membutuhkan perawatan. Hindari kerusakan tak terduga dan perpanjang usia perangkat Anda.",
    },
    {
      title: "Perawatan Preventif",
      desc: "Lakukan tindakan preventif sebelum masalah terjadi. Jadwalkan perawatan rutin berdasarkan data historis dan rekomendasi sistem, memastikan operasional Anda selalu optimal.",
    },
    {
      title: "Peringatan Kerusakan",
      desc: "Dapatkan peringatan tentang potensi masalah teknis sebelum menjadi masalah besar, memungkinkan tindakan perbaikan yang lebih cepat.",
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
          <H1>Pemantauan Penyimpanan dingin </H1>
          <P>
            Solusi pemantauan kami memastikan pengelolaan gudang cold storage
            yang efisien dengan menjaga kualitas dan keamanan barang suhu
            terjaga.
          </P>
        </div>
      </div>

      <div id="komprehensif" className="mb-40 flex flex-col">
        <div className="flex flex-row">
          <div className="w-full md:w-3/5">
            <H2>Solusi Komprehensif untuk Manajemen yang Efisien dan Aman</H2>
            <P>
              Gunakan kamera dengan kecerdasan mesin untuk kebutuhan anda dalam
              memonitor karyawan dalam ruangan
            </P>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center gap-10 md:flex-row-reverse">
          <div className="grid w-full grid-cols-2 gap-10 md:w-3/5">
            {komprehensifValue.slice(0, 4).map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={service_6}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="grid w-full grid-cols-2 gap-10 md:w-3/5">
            {komprehensifValue.slice(4, 7).map((o, i) => (
              <div key={i} className={i === 2 ? "col-span-2" : "col-span-1"}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={service_7}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div id="pemeliharaaan" className="mb-40 flex flex-col">
        <div className="mb-10 flex flex-row">
          <div className="w-full">
            <H2>Sistem Pemeliharaan Penyimpanan dingin</H2>
            <P>
              Mengelola infrastruktur cold storage kini menjadi lebih mudah dan
              efisien dengan platform kami. Hadirkan perawatan prediktif dan
              preventif untuk memastikan operasi selalu berjalan lancar.
            </P>
          </div>
        </div>
        <div className="mt-5 flex flex-col-reverse items-center gap-10 md:flex-row-reverse">
          <div className="grid w-full grid-cols-1 gap-10 md:w-1/2">
            {pemeliharaanValue.map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={1}>
              <Image
                src={service_8}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdStorage;
