"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/ui/h2";
import { P } from "@/components/ui/p";
import PageDot from "@/components/ui/page-dot";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import service_1 from "@/public/images/service_1.png";
import service_2 from "@/public/images/service_2.png";
import service_3 from "@/public/images/service_3.png";

import review_1 from "@/public/images/review_1.png";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type ServiceDetailProps = {
  image: StaticImageData;
  icon: string;
  title: string;
  description: string;
  features: string[];
  isReverse?: boolean;
  link?: string;
};

export default function Home() {
  const services = [
    {
      icon: "icons/user.svg",
      title: "Pemantauan Karyawan",
      description: (
        <p className="text-center">
          Memantau dengan kecerdasan buatan dengan{" "}
          <span className="italic">deep learning</span> untuk dashcam atau CCTV
        </p>
      ),
    },
    {
      icon: "icons/box.svg",
      title: "Pemantauan Penyimpanan Dingin",
      description: (
        <p className="text-center">
          Monitor kondisi dan keamanan Penyimpanan dingin, pada gengaman anda.
        </p>
      ),
    },
    {
      icon: "icons/car.svg",
      title: "Pemantauan Kendaraan",
      description: (
        <p className="text-center">
          Lacak pergerakan kendaraan Anda secara real-time.
        </p>
      ),
    },
  ];

  const servicesDetails: ServiceDetailProps[] = [
    {
      image: service_1,
      icon: "icons/user.svg",
      title: "Tingkatkan Produktivitas dan Keamanan Karyawan",
      description:
        "Mengamankan Lingkungan Kerja dan Meningkatkan Efisiensi dengan pemantauan karyawan berbasis kecerdasan buatan (AI).",
      features: [
        "Pelacakan & Penghitungan Orang",
        "Pengenal Wajah (Face Detection)",
        "Deteksi dan Pelacakan Objek",
        "Deteksi APD (Safety Wear Detection)",
      ],
      link: "/services/employee",
    },
    {
      image: service_2,
      icon: "icons/box.svg",
      title: "Optimalkan Efisiensi dan Kurangi Biaya Operasional",
      description:
        "Pengawasan Penyimpanan dingin yang Terintegrasi untuk Memastikan Efisiensi Maksimal dan Mengurasi biaya operasional. ",
      features: [
        "Mematau suhu secara Realtime",
        "Melihat status pintu ",
        "Mengurangi biaya operasional (listrik)",
      ],
      isReverse: true,
      link: "/services/cold-storage",
    },
    {
      image: service_3,
      icon: "icons/car.svg",
      title: "Nikmati Pengelolaan Armada yang Lebih Efisien",
      description:
        "Dapatkan visibilitas dan kontrol penuh atas armada Anda dengan sistem pelacakan GPS kami yang canggih. ",
      features: [
        "Menganalisa Perilaku Pengemudi",
        "Dapatkan Peringatan dan Notifikasi Instan",
        "Mengelola Armada Anda Secara Efisien",
      ],
      link: "/services/vehicle",
    },
  ];

  const reviews = [
    {
      image: review_1,
      stars: 5,
      review:
        "Treffix sudah membantu kami untuk membuat sistem yang dapat meningkatkan produktifitas",
      name: "Gina F.",
      position: "Improvement Analyst",
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  const faqs = [
    {
      question: "Apakah tersedia uji coba gratis?",
      answer:
        "Ya, Anda bisa mencoba produk kami secara gratis selama 30 hari. Jika Anda mau, kami akan memberi Anda panggilan onboarding gratis selama 30 menit yang dipersonalisasi agar Anda dapat segera beroperasi.",
    },
    {
      question: "Berapa lama garansi yang diberikan?",
      answer:
        "Ya, Anda bisa mencoba produk kami secara gratis selama 30 hari. Jika Anda mau, kami akan memberi Anda panggilan onboarding gratis selama 30 menit yang dipersonalisasi agar Anda dapat segera beroperasi.",
    },
    {
      question: "Bagaimana cara penagihan bekerja?",
      answer:
        "Ya, Anda bisa mencoba produk kami secara gratis selama 30 hari. Jika Anda mau, kami akan memberi Anda panggilan onboarding gratis selama 30 menit yang dipersonalisasi agar Anda dapat segera beroperasi.",
    },
    {
      question: "Dapatkah saya mengubah paket saya nanti?",
      answer:
        "Ya, Anda bisa mencoba produk kami secara gratis selama 30 hari. Jika Anda mau, kami akan memberi Anda panggilan onboarding gratis selama 30 menit yang dipersonalisasi agar Anda dapat segera beroperasi.",
    },
    {
      question: "Dapatkah saya membeli kamera saja tanpa sistem?",
      answer:
        "Ya, Anda bisa mencoba produk kami secara gratis selama 30 hari. Jika Anda mau, kami akan memberi Anda panggilan onboarding gratis selama 30 menit yang dipersonalisasi agar Anda dapat segera beroperasi.",
    },
  ];

  return (
    <div>
      <div
        id="hero"
        className="mx-break-out px-break-out flex min-h-[calc(100vh_-_64px)] flex-row"
      >
        <div className="flex w-full flex-col justify-center gap-5 md:w-1/2">
          <h1 className="text-5xl font-bold text-slate-950">
            Optimalkan Bisnis Anda dengan Aset Monitoring Berbasis AI
          </h1>
          <P className="text-lg text-muted-foreground">
            Mengoptimalkan kinerja bisnis Anda dengan pemantauan yang akurat dan
            efisien
          </P>
          <div className="flex flex-row gap-2">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Demo</Button>
          </div>
        </div>
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <Image
            src="/hero.svg"
            alt="hero"
            width={800}
            height={800}
            className="ml-16"
          />
        </div>
      </div>
      <div id="service" className="mb-40 flex items-start">
        <div className="flex flex-col">
          <H2 className="mb-5 text-center">Layanan Kami</H2>
          <P className="text-center">
            Kami menyediakan layanan pemantauan yang inovatif untuk memantau
            orang, kendaraan, dan gudang dengan menggunakan teknologi IoT.
            Dengan solusi kami, Anda dapat mengoptimalkan operasional dan
            meningkatkan keamanan.
          </P>
          <div className="mt-10 flex flex-col gap-5 md:flex-row">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center md:w-1/3"
              >
                <Card className="p-1">
                  <Image src={service.icon} alt="icon" width={25} height={25} />
                </Card>
                <P className="font-bold">{service.title}</P>
                {service.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="services-details" className="mb-40 flex flex-col gap-20">
        {servicesDetails.map((service, index) => (
          <ServiceDetail key={index} {...service} />
        ))}
      </div>
      <div id="reviews" className="mb-40">
        <hr />
        <div className="mt-10 flex flex-row items-center rounded-xl bg-[#F9FAFB]">
          <div className="flex w-full flex-col gap-2 p-5 md:w-2/3">
            <div className="flex flex-row">
              <Rating
                initialValue={reviews[activeReview].stars}
                size={20}
                readonly
                SVGstyle={{
                  display: "inline",
                }}
              />
            </div>
            <H2>{reviews[activeReview].review}</H2>
            <div className="mt-3">
              <P className="font-bold">— {reviews[activeReview].name}</P>
              <P className="!mt-0 text-muted-foreground">
                {reviews[activeReview].position}
              </P>
            </div>
            <div className="mt-5 flex flex-row gap-4">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setActiveReview(index)}
                >
                  <PageDot active={index === activeReview} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden w-1/3 md:flex">
            <AspectRatio ratio={16 / 13}>
              {/* <Image
                src={reviews[activeReview].image}
                alt="review"
                fill
                className="rounded-r-xl object-cover"
              /> */}
            </AspectRatio>
          </div>
        </div>
      </div>
      <div
        id="faq"
        className="flex flex-col items-center justify-center text-center"
      >
        <H2>Pertanyaan yang sering diajukan</H2>
        <div className="mb-40 mt-5 w-full md:w-1/2">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-start">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-start">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div
        id="area"
        className="flex flex-col items-center justify-center text-center"
      >
        <H2>Area Operasi Kami</H2>
        <div className="mb-40 mt-5 w-full md:w-4/5">
          <Image
            src="/images/indonesia.svg"
            alt="map"
            width={1100}
            height={800}
            // className="ml-16"
          />
        </div>
      </div>
    </div>
  );
}

const ServiceDetail = (props: ServiceDetailProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-20 md:flex-row",
        props.isReverse && "flex-col md:flex-row-reverse",
      )}
    >
      <div className="flex w-full flex-col items-start gap-3 md:w-1/2">
        <Card className="p-1">
          <Image src={props.icon} alt="icon" width={25} height={25} />
        </Card>
        <H2 className="">{props.title}</H2>
        <P>{props.description}</P>
        <div className="ml-3 flex flex-col">
          {props.features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <Image
                src="/icons/check.svg"
                className="mt-3"
                alt="icon"
                width={15}
                height={15}
              />
              <P className="text-muted-foreground">{feature}</P>
            </div>
          ))}
        </div>
        <Link href={props.link as Url} passHref>
          <Button variant="outline" className="mt-3">
            Pelajari Lebih Lanjut
          </Button>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <AspectRatio ratio={16 / 14}>
          <Image
            src={props.image}
            alt="hero"
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};
