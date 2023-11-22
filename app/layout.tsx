import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      <body className={cn(roboto.className, "grainy")}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
