import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const dataArtikel = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: 1 },
  });
  return NextResponse.json(dataArtikel);
}
