import { AuthOptions } from "@/utils/AuthOptions";
import NextAuth from "next-auth";

export const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
