import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { username, role, email, password } = body;

  const exist = await prismadb.user.findUnique({
    where: {
      username: username,
    },
  });

  if (exist) {
    return new NextResponse("Username already exist", { status: 500 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prismadb.user.create({
    data: {
      username: username,
      email: email,
      password: hashedPassword,
      role: role,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { id } = body;

  const user = await prismadb.user.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(user);
}

export async function PATCH(req: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const body = await req.json();
  const { id, username, email, role, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prismadb.user.update({
    where: {
      id: id,
    },
    data: {
      username: username,
      email: email,
      role: role,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
