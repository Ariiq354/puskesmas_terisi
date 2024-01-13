import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }

  const body = await req.json();
  const { nama, path_image, message } = body;

  const video = await prismadb.tb_testimoni.create({
    data: {
      nama,
      path_image,
      message,
    },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }

  const body = await req.json();
  const { id_testimoni } = body;

  const video = await prismadb.tb_testimoni.delete({
    where: {
      id_testimoni,
    },
  });

  return NextResponse.json(video);
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { id_testimoni, nama, path_image, message } = body;

  const video = await prismadb.tb_testimoni.update({
    where: {
      id_testimoni,
    },
    data: {
      nama,
      path_image,
      message,
    },
  });

  return NextResponse.json(video);
}

export async function GET(req: NextRequest) {
  const data = await prismadb.tb_testimoni.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 10,
  });

  return NextResponse.json(data);
}
