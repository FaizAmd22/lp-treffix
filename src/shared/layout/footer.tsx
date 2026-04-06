import Link from "next/link";
import { InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Mail01, MarkerPin01, Phone } from "@untitledui/icons";

const socmedList = [
  {
    icon: InstagramOutlined,
    label: "instagram",
    link: "https://www.instagram.com/treffix.id/",
  },
  {
    icon: LinkedinOutlined,
    label: "linkedin",
    link: "https://www.linkedin.com/company/treffix-id/",
  },
];

const footerLinks = {
  Products: [
    { label: "Manajemen Karyawan (HRMS)", href: "/employee-management" },
  ],
  Company: [
    { label: "Tentang", href: "/about" },
    { label: "Karir", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
};

const contactInfo = [
  {
    icon: MarkerPin01,
    text: "PT. Lalu Lintas Lancar Permata Regency D/37, Jl H Kelik, Srengseng, Kembangan, Jakarta Barat.",
  },
  { icon: Phone, text: "(+62) 81120253182" },
  { icon: Mail01, text: "marketing@treffix.id" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/treffix.svg"
                alt="Treffix Logo"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base lg:text-sm leading-relaxed mb-5 m-0">
              Smarter Productivity Tracking,
              <br />
              powered by AI
            </p>
            <div className="hidden lg:flex items-center gap-3">
              {socmedList.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="group w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-(--primary-color)"
                    aria-label={item.label}
                  >
                    <Icon className="text-[20px] text-(--primary-color)! transition-colors duration-300 group-hover:text-white!" />
                  </Link>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-base lg:text-sm tracking-widest mb-5 m-0">
                {section}
              </h4>
              <ul className="list-none m-0 p-0 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-base lg:text-sm hover:text-(--primary-color) transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold text-base lg:text-sm tracking-widest mb-5 m-0">
              Contact Us
            </h4>
            <ul className="list-none m-0 p-0 space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;

                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex gap-2">
                      <div>
                        <Icon
                          style={{
                            fontSize: 16,
                            color: "var(--primary-color)",
                          }}
                        />
                      </div>

                      <p className="text-gray-400 text-base lg:text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-gray-400 text-base lg:text-sm m-0">
            © 2025 Treffix All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
