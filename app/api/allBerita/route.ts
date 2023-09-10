import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const dataBerita = await prismadb.tb_berita_artikel.findMany();
  return NextResponse.json(dataBerita);
}
