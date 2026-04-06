import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/shared/layout/navbar";
import Footer from "@/shared/layout/footer";
import { ConfigProvider } from "antd";
import "animate.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Treffix",
  description: "Profile Company Treffix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "var(--font-sans)",
              },
            }}
          >
            <Navbar />
            {children}
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
