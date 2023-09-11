import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const dataBerita = await prismadb.tb_berita_artikel.findMany({
    where: { id_berita: parseInt(params.id) },
  });
  return NextResponse.json(dataBerita);
}
