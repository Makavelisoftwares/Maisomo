import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { Prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";


export const AuthOptions = {
  adapter: PrismaAdapter(Prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("missing credentials");
          }

          const User = await Prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!User) {
            throw new Error("email not found");
          }

          const comparepassword = await bcrypt.compare(
            credentials.password,
            User?.password
          );
          if (!comparepassword) {
            throw new Error("incorrect password");
          }
          return User;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    error: "/auth/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
