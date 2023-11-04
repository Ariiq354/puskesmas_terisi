import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { code, name, type } = body;

  const video = await prismadb.tb_galeri.create({
    data: {
      code: code,
      name: name,
      type: type,
    },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  const video = await prismadb.tb_galeri.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(video);
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, code, name, type } = body;

  const video = await prismadb.tb_galeri.update({
    where: {
      id: id,
    },
    data: {
      code: code,
      name: name,
      type: type,
    },
  });

  return NextResponse.json(video);
}
