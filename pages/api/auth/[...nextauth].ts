import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDatabase } from '@/common/lib/db';

export default NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/',
  },
  callbacks: {
    // async session({ session, user }: any) {
    //   session.user.role = user.role;

    //   return session;
    // },
    async signIn({ ...rest }) {
      // console.log(rest);
      if (rest.account.provider === 'google') {
        // console.log(account);
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
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});