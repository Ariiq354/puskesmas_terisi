import Banner from "@/components/Banner";
import Footer from "@/components/template/Footer";
import Navbar from "@/components/template/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Banner />
      <Footer />
    </div>
  );
}
