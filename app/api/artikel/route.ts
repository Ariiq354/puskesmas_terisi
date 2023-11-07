import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kategori = searchParams.get("kategori");
  const artikel = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: parseInt(kategori!) },
  });
  return NextResponse.json(artikel);
}

export async function POST(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }

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
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
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
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  console.log(body);
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
