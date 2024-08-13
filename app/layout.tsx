import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Treffix",
  description: "Your next AI-powered tracking system",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const getScrollbarWidth = (cssVariableName = '--twcb-scrollbar-width') => {
                const prevWidth = window
                  .getComputedStyle(document.documentElement)
                  .getPropertyValue(cssVariableName);
                const newWidth = \`\${window.innerWidth - document.body.clientWidth}px\`;

                if (newWidth !== prevWidth) {
                  document.documentElement.style.setProperty(cssVariableName, newWidth);
                }
              };

              const setScrollbarWidth = () => {
                window.addEventListener('load', getScrollbarWidth);
                window.addEventListener('resize', getScrollbarWidth);
                getScrollbarWidth();
              };

              setScrollbarWidth();
            `,
          }}
        />
      </body>
    </html>
  );
}
