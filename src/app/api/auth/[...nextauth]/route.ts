import prisma from "@/utils/connectdb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthProvider = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });

        if (credentials.password === user.password) {

          if (user) {
            console.log("User authenticated:", user);
            return user;
          }
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(AuthProvider);
export { handler as GET, handler as POST };
