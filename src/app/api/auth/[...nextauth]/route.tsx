import { NextApiRequest } from "next";
import {UserModel} from "@/app/models/UserModel";
import { connect } from "@/util/mongoos";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import NextAuth,{ AuthOptions, DefaultSession, Session } from "next-auth";
import { getToken } from "next-auth/jwt";

interface PageArray {
  user: {
   _id:string,
   name:string,
   email:string,
   password:string,
   skill:[],
   about:string
  } 
}

const secret = process.env.NEXTAUTH_SECRET;
import CredentialsProvider from "next-auth/providers/credentials";
// import { CustomSession, CustomUser } from "../../../../../types/next-auth";
const signToken = (id: string) => {
  // console.log("signToken");
  // console.log("signToken");
  const setId = id.toString();
  // console.log(setId);
  return jwt.sign({ setId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
// export async function POST(request: Request) {
//   const body = await request.json();
//   await connect();

//   const { email, password } = body;
//   console.log(body);
//   try {
//     if (!email || !password) {
//       console.log("please provide email or password");
//     } else if (email && password) {
//       const user = await UserModel.findOne({ email }).select("+password");
//       // console.log(user);
//       const correct = await user.correctPassword(password, user.password);
//       if (user == null || user == undefined || !correct) {
//         console.log("please provide valid email or password");
//       } else {
//         const token = signToken(user._id);
//         delete user.password;
//         return NextResponse.json({
//           message: "Login successfully!",
//           token: token,
//           user,
//         });
//       }
//     }
//     // res.status(200).json(products);
//   } catch (e) {
//     console.log(e);
//     return NextResponse.json(
//       { message: "Server error, please try again!" },
//       { status: 500 }
//     );
//   }
//   //   const body = await request.json();
//   //   console.log(body);
//   //   connect();
//   //   const users = UserModel;

//   //   const allUsers = await users.create(body);

//   // new Response("skjcdsc")
// }
export const authOptions: AuthOptions  = {
  // Configure one or more authentication providers
  
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const token = await getToken({ req, secret })
        await connect();

        // const {  email, password } = credentials;

        try {
          console.log("bdhbcw");
          console.log(credentials);
          console.log(credentials?.password);

          if (!credentials?.email || !credentials?.password) {
            console.log("please provide email or password");
            return null;
          }

          const user = await UserModel.findOne({ email: credentials.email })
            .select("+password")
            .exec();

          if (!user) {
            return null;
          }

          const correct = await user.correctPassword(
            credentials?.password,
            user.password
          );
          if (!correct) {
            return null;
          }
          const token = signToken(user._id);
          return user;

        } catch (e) {
          console.log(e);
          return Promise.reject(e);
        }
      },
    }),
  
  ],
  callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, }: { session: Session; token: any, }) {
			return { ...session, user: token._doc };
		},
	},
	session: {
		strategy: "jwt",
	},

};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
