import UserModel from '@/app/models/UserModel';
import { connect } from '@/util/mongoos';
import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        console.log('connecting mongodb');
        await connect();

        const { username: email, password } = credentials;

        try {
          if (!email || !password) {
            console.log('please provide email or password');
            return null;
          }

          const user = await UserModel.findOne({ email })
            .select('+password')
            .exec();

          if (!user) {
            return null;
          }

          const correct = await user.correctPassword(password, user.password);
          if (!correct) {
            return null;
          }

          delete user.password;
          return user;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
