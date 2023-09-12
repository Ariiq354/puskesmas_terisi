import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
<<<<<<< HEAD
import { NavbarProvider } from "@/components/navbarProvider";
=======
import Banner from "@/components/template/Banner";
>>>>>>> bc52eeb103b30de218007466bf37aefa156f8367

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puskesmas Terisi",
  description: "Puskesmas Terisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <NavbarProvider />
        {children}
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
