import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kategori = searchParams.get("kategori");
  const artikel = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: parseInt(kategori!) },
  });
  return NextResponse.json(artikel);
}
