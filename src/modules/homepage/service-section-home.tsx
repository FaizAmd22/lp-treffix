/* eslint-disable @next/next/no-img-element */
"use client";

export default function ServiceSectionHome() {
  const featureList = [
    {
      title: "Konsultasi & Transformasi Digital",
      desc: "Tim ahli kami membantu bisnis Anda mengadopsi teknologi modern, menyederhanakan proses, dan bertransformasi menuju ekosistem digital yang efisien.",
    },
    {
      title: "Implementasi & Instalasi IoT",
      desc: "Layanan end-to-end mulai dari instalasi perangkat, konfigurasi jaringan, kalibrasi, hingga integrasi sistem untuk memastikan operasional yang lancar dan andal.",
    },
    {
      title: "Analitik Data & Pelaporan",
      desc: "Ubah data menjadi insight dengan analitik canggih dan laporan kustom untuk mendukung keputusan lebih tepat, visibilitas real-time, dan kinerja operasional yang lebih optimal.",
    },
  ];

  return (
    <section
      className="relative h-auto flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src="/images/home-bg-service.svg"
          alt="bg"
          className="w-full h-full object-cover lg:object-fill"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-5 lg:col-span-2">
            <p className="text-gray-400 text-sm mb-4">
              Layanan Inovatif untuk Transformasi Digital
            </p>

            <p className="text-white text-3xl font-semibold">
              Kami menyediakan{" "}
              <span className="text-(--primary-color)">layanan IoT</span>{" "}
              scalable untuk meningkatkan akurasi dan efisiensi operasional.
            </p>

            <div className="relative lg:-mt-14 w-110 -rotate-12 -z-10 m-auto lg:m-0">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-130 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(29,78,216,0.3) 45%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />

              <img
                src="/images/particle-sphere.png"
                alt="particle"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>

          <div className="col-span-5 lg:col-span-3 space-y-14">
            {featureList.map((item, index) => (
              <div key={index}>
                <p className="text-white text-2xl">{item.title}</p>

                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
