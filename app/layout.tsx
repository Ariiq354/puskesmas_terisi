"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
import Transition from "@/components/transition";

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import path from "path";

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
  const pathname = usePathname();

  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={pathname} className="h-full">
            <Transition />
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
