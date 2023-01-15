import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDatabase } from '@/common/lib/db';

export const authOptions: NextAuthOptions =
  // your configs
  {
    pages: {
      signIn: '/auth',
      signOut: '/',
      error: '/auth',
    },
    callbacks: {
      // async session({ session, user }: any) {
      //   session.user.role = user.role;

      //   return session;
      // },
      async signIn({ ...rest }): Promise<boolean> {
        if (rest.account.provider === 'google') {
          // let client;

          // // Checking if the user already has credentials account
          // try {
          //   client = await connectToDatabase();
          // } catch (error) {
          //   throw new Error("Couldn't connect to database!");
          // }
          // const db = client.db();
          // const userCollection = db.collection('users');
          // let user;

          // try {
          //   user = await userCollection.findOne({
          //     email: profile.email,
          //   });
          // } catch (error) {
          //   client.close();
          //   throw new Error(
          //     "Couldn't do find operation ! Please try again later.",
          //   );
          // }
          // if (user && user.provider === 'credentials') {
          //   client.close();
          //   throw new Error("Couldn't login. Use credentials to login instead !");
          // }
          // if (!user) {
          //   try {
          //     await db.collection('users').insertOne({
          //       id: profile.sub,
          //       name: profile.name,
          //       email: profile.email,
          //       image: profile.image,
          //       provider: 'google',
          //     });
          //   } catch (error) {
          //     client.close();
          //     throw new Error('Storing user failed.');
          //   }
          // }
          // client.close();

          return true;
        }
      },
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
    providers: [
      // OAuth authentication providers...
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
  };

export default NextAuth(authOptions);
