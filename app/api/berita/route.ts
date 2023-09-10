import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: { kategori: 0 },
  });
  return NextResponse.json(dataBerita);
}
