import { User } from 'next-auth'
import { Session } from 'next-auth'

interface CustomUser extends User {
  // Add custom properties to the user object
  _id:string,
   name:string,
   email:string,
   password:string,
   skill:[],
   about:string
}
interface CustomSession extends Session {
  // Update the user property to use the extended User type
  user: CustomUser
}

// export  {CustomSession, CustomUser}

// import NextAuth from "next-auth"

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       address: string
//     }
//   }
// }

// import NextAuth, { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       _id: string;
//       skill: [];
//       about: string;
//     } & DefaultSession["user"];
//   }
// }
