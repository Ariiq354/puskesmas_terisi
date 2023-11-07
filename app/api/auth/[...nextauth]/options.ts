import { NextAuthOptions } from "next-auth";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
            role: true,
          },
        });

        if (!user) {
          throw new Error("No User Found");
        }

        if (user.role != "1") {
          throw new Error("User is not approved");
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
