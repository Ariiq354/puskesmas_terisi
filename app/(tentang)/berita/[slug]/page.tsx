import prisma from "@/lib/prisma";
import Image from "next/image";
import NewsContent from "@/components/newsContent";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await prisma.tb_berita_artikel.findMany({
    where: { id_berita: parseInt(params.slug) },
  });

  function formatDateToDDMMYYYY(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id_berita} className="container">
          <div className="overflow-hidden lg:px-40 py-10">
            {/* Title */}
            <h2 className="text-3xl lg:text-5xl text-start font-semibold py-4">
              {item.nama}
            </h2>

            {/* Author and Date */}
            <div className="text-gray-600 text-sm py-4">
              {item.penulis} - {formatDateToDDMMYYYY(item.created_at)}
            </div>

            {/* Image */}
            <Image
              width={2000}
              height={2000  }
              src={item.path_image}
              alt="News"
              className="w-full object-cover"
            />

            {/* Content */}
            <div className="text-gray-600 py-2 text-justify pt-10">
              <NewsContent data={item.konten} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
