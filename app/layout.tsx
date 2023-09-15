import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
import Banner from "@/components/Banner";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puskesmas Terisi",
  description: "Puskesmas Terisi",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
