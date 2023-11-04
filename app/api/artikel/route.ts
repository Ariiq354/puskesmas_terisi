import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nama, path_image, penulis, deskripsi, konten, kategori } = body;

  const video = await prismadb.tb_berita_artikel.create({
    data: {
      nama: nama,
      path_image: path_image,
      penulis: penulis,
      deskripsi: deskripsi,
      konten: konten,
      kategori: kategori,
    },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  const video = await prismadb.tb_berita_artikel.delete({
    where: {
      id_berita: id,
    },
  });

  return NextResponse.json(video);
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id_berita, nama, path_image, penulis, deskripsi, konten, kategori } =
    body;

  const video = await prismadb.tb_berita_artikel.update({
    where: {
      id_berita: id_berita,
    },
    data: {
      nama: nama,
      path_image: path_image,
      penulis: penulis,
      deskripsi: deskripsi,
      konten: konten,
      kategori: kategori,
    },
  });

  return NextResponse.json(video);
}
