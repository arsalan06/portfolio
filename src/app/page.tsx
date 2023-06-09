// "use client"
import Image from "next/image";
import Dashboard from "./dashboard";
import Header from "./header";
import Login from "./login";
import { getServerSession } from 'next-auth/next'
// import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  // const { data: session, status } = useSession()
  console.log("session object", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {session ? (
        <>
          {/* @ts-ignore */}
          <Header />
          <Dashboard />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
