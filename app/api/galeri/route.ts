import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const galeri = await prismadb.tb_galeri.findMany({
    where: { type: parseInt(type!) },
  });
  return NextResponse.json(galeri);
}
