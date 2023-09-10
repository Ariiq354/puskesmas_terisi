import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const galeri = await prismadb.tb_galeri.findMany();
  return NextResponse.json(galeri);
}
