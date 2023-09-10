import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: { id_berita: parseInt(id) },
  });
  return NextResponse.json(dataBerita);
}
