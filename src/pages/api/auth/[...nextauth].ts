import { checkUserExists } from "@/utils/checkUserExists";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../../prisma/primsa";

//setting up Google Provider
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  //Callbacks enable further control of user. This is used to ensure when a user is singed in with Google, they are registered on the database
  callbacks: {
    async session({ session }: any) {
      //Checking if user is on DB
      const isUserRegistered = await checkUserExists(session.user.email);
      if (isUserRegistered === false) {
        await prisma.users.create({
          data: {
            user_email: session.user.email,
          },
        });
        return session;
      } else {
        return session;
      }
    },
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
