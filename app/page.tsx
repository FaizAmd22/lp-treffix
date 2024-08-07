import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/ui/h2";
import { P } from "@/components/ui/p";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ServiceDetailProps = {
  image: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  isReverse?: boolean;
};

export default function Home() {
  const services = [
    {
      icon: "icons/user.svg",
      title: "Pemantauan Keryawan",
      description: (
        <p className="text-center">
          Memantau dengan kecerdasan buatan dengan{" "}
          <span className="italic">deep learning</span>
          untuk dashcam atau CCTV
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
      image: "/images/service_1.png",
      icon: "icons/user.svg",
      title: "Tingkatkan Produktivitas dan Keamaanan Karyawan",
      description:
        "Mengamankan Lingkungan Kerja dan Meningkatkan Efisiensi dengan pemantauaan karyawan berbasis kecerdasan buatan (AI).",
      features: [
        "Pelacakan & Penghitungan Orang",
        "Pengenal Wajah (Face Detection)",
        "Deteksi dan Pelacakan Objek",
        "Deteksi APD (Safety Wear Detection)",
      ],
    },
    {
      image: "/images/service_2.png",
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
    },
    {
      image: "/images/service_3.png",
      icon: "icons/car.svg",
      title: "Nikmati Pengelolaan Armada yang Lebih Efisien",
      description:
        "Dapatkan visibilitas dan kontrol penuh atas armada Anda dengan sistem pelacakan GPS kami yang canggih. ",
      features: [
        "Menganalisa Perilaku Pengemudi",
        "Dapatkan Peringatan dan Notifikasi Instan",
        "Mengelola Armada Anda Secara Efisien",
      ],
    },
  ];

  return (
    <div>
      <div id="hero" className="flex min-h-[calc(100vh_-_64px)] flex-row">
        <div className="flex w-1/2 flex-col justify-center gap-5">
          <h1 className="text-5xl font-bold text-slate-950">
            Optimalkan Bisnis Anda dengan Aset Monitoring Berbasis AI
          </h1>
          <P className="text-lg text-muted-foreground">
            Mengoptimalkan kinerja bisnis Anda dengan pemamntauan yang akurat
            dan efisien
          </P>
          <div className="flex flex-row gap-2">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Demo</Button>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <Image
            src="/hero.svg"
            alt="hero"
            width={800}
            height={800}
            className="ml-16"
          />
        </div>
      </div>
      <div id="service" className="flex h-[60vh] items-start">
        <div className="flex flex-col">
          <H2 className="mb-5 text-center">Layanan Kami</H2>
          <P className="text-center">
            Kami menyediakan layanan pemantauan yang inovatif untuk memantau
            orang, kendaraan, dan gudang dengan menggunakan teknologi IoT.
            Dengan solusi kami, Anda dapat mengoptimalkan operasional dan
            meningkatkan keamanan.
          </P>
          <div className="mt-10 flex flex-row gap-5">
            {services.map((service, index) => (
              <div key={index} className="flex w-1/3 flex-col items-center">
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
        <div className="mt-10 flex flex-row items-center">
          <div className="flex w-2/3 flex-col gap-2">
            <p>stars</p>
            <H2>
              Treffix sudah membantu kami untuk membuat sistem yang dapat
              meningkatkan produktifitas
            </H2>
            <div className="mt-3">
              <P className="font-bold">— Gina F.</P>
              <P className="text-muted-foreground">
                Improvement Analyst, PT Trimitra Trans Persada
              </P>
            </div>
          </div>
          <div className="w-1/3">
            <AspectRatio ratio={16 / 13}>
              <Image
                src="/images/review_1.png"
                alt="review"
                fill
                className="rounded-r-xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceDetail = (props: ServiceDetailProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-20",
        props.isReverse && "flex-row-reverse",
      )}
    >
      <div className="flex w-1/2 flex-col items-start gap-3">
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
        <Button variant="outline" className="mt-3">
          Pelajari Lebih Lanjut
        </Button>
      </div>
      <div className="flex w-1/2 items-center justify-center">
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
