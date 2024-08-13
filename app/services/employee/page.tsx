import { AspectRatio } from "@/components/ui/aspect-ratio";
import { H1 } from "@/components/ui/h1";
import { H2 } from "@/components/ui/h2";
import { H4 } from "@/components/ui/h4";
import { P } from "@/components/ui/p";
import Image from "next/image";
import React from "react";

import service_1 from "@/public/images/service_1.png";
import service_4 from "@/public/images/service_4.png";
import service_5 from "@/public/images/service_5.png";
import arrow from "@/public/others/Hand-drawn arrow.svg";

const Employee = () => {
  const optimalValue = [
    {
      title: "People Tracking & Counting",
      desc: "Dapat mengetahui jumlah dan berapa lama orang dalam suatu ruangan",
    },
    {
      title: "Deteksi APD",
      desc: "Deteksi karyawan saat mengunakan Alat pelindung diri seperti helm, jaket, rompi dan lain lain",
    },
    {
      title: "Object Detection and Tracking",
      desc: "Mendeteksi objek dan juga jumlah barang pada suatu ruangan atau tempat",
    },
    {
      title: "People Gathering Detection",
      desc: "Mendekteksi ketika terdapat perkumpulan orang pada suatu tempat. Dapat mendeteksi Apel/Briefing dan juga kejadian darurat",
    },
  ];

  const transformasiValue = [
    {
      title: "Absensi",
      desc: "Sebagai absensi karyawan saat memasuki rungan dan dapat digunakan sebagai pengelompokan shift",
    },
    {
      title: "Pelacakan",
      desc: "Historical Sesorang saat memasuki ruangan sehingga tercatat",
    },
    {
      title: "Akses Pintu",
      desc: "Sebagai akses saat keluar masuk pintu dan hanya karyawan yang mempunyai akses untuk mengakses ruangan tertentu",
    },
  ];

  const driverValue = [
    {
      title: "Deteksi ketika kelelahan",
      desc: "Dapat mendetektsi ketika driver kecapean seperti nguap atau tertidur",
    },
    {
      title: "Deteksi Merokok",
      desc: "Dapat mendeteksi ketika driver merokok saat berkendara",
    },
    {
      title: "Deteksi Penggunan Sabuk Pengaman",
      desc: "Dapat mendeteksi ketika driver menggunakan sabuk pengaman atau tidak ketika berkendara",
    },
    {
      title: "Deteksi Distraksi",
      desc: "Dapat mendeteksi ketika driver tidak melihat ke jalan dan terdistraksi ke hal lain",
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
          <H1>Pemantauan Karyawan</H1>
          <P>
            Tingkatkan keamanan dan produktifitas dengan mengunakan kamera
            dengan kecerdasan mesin(AI)
          </P>
        </div>
      </div>

      <div id="optimal" className="mb-40 flex flex-col">
        <div className="flex flex-row">
          <div className="w-full md:w-3/5">
            <H2>
              Optimalkan Produktifitas dan Keamaanan Karyawan dalam untuk Bisnis
              Anda
            </H2>
            <P>
              Gunakan kamera dengan kecerdasan mesin untuk meningkatkan
              produktifitas dan memonitor keselamatan karyawan.{" "}
            </P>
          </div>
          <div className="hidden h-[200px] w-2/5 pl-32 md:flex">
            <AspectRatio ratio={1}>
              <Image src={arrow} alt={"arrow"} height={200} />
            </AspectRatio>
          </div>
        </div>
        <div className="mt-5 flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="grid w-full grid-cols-2 gap-10 md:w-3/5">
            {optimalValue.map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5">
            <AspectRatio ratio={16 / 13}>
              <Image
                src={service_1}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div id="transformasi" className="mb-40 flex flex-col">
        <div className="mb-10 flex flex-row">
          <div className="w-full md:w-3/5">
            <H2>
              Transformasi Keamanan dengan Teknologi Pengenal Wajah <br /> (
              <span className="italic">Face Detection</span>)
            </H2>
          </div>
        </div>
        <div className="mt-5 flex flex-col-reverse items-center gap-10 md:flex-row-reverse">
          <div className="grid w-full grid-cols-2 gap-10 md:w-3/5">
            {transformasiValue.map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5">
            <AspectRatio ratio={16 / 13}>
              <Image
                src={service_4}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div id="driver" className="mb-40 flex flex-col">
        <div className="mb-10 flex justify-center text-center">
          <div className="w-full md:w-3/5">
            <H2>
              Tingkatkan Keselamatan Berkendara dengan Pemantauan Orang pada
              Armada Anda
            </H2>
            <P>
              Memantau pengemudi untuk meningkatkan keselamatan pengendara dan
              mengoptimalkan kinerja pengendara.
            </P>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center gap-10 md:flex-row">
          <div className="flex w-full md:hidden">
            <AspectRatio ratio={16 / 13}>
              <Image
                src={service_5}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 md:w-1/3">
            {driverValue.slice(0, 2).map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
          <div className="hidden w-1/3 md:flex">
            <AspectRatio ratio={16 / 13}>
              <Image
                src={service_5}
                alt={"service"}
                fill
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 md:w-1/3">
            {driverValue.slice(2, 4).map((o, i) => (
              <div key={i}>
                <H4>{o.title}</H4>
                <P>{o.desc}</P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
