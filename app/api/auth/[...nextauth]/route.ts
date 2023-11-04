import NextAuth, { NextAuthOptions } from "next-auth";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

interface userType {
  username: string;
  email: string;
  password: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prismadb.user.findUnique({
          where: {
            username: credentials?.username,
          },
          select: {
            username: true,
            password: true,
          },
        });

        if (!user) {
          throw new Error("No User Found");
        }

        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Wrong Password");
        }

        return user as any;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
