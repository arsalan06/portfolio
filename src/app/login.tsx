"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/login.module.css";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const res= await axios.post("http://localhost:3000/api/auth",{
    //   email,
    //   password
    // })

    console.log(email)
    console.log(email)
    console.log(email)
    const status = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/",
    });
    console.log(status?.url)
    if (status?.url) router.push(status.url);
  };
  return (
    <div
      className={`h-screen w-full bg-custombgcolor flex justify-center items-center ${styles.login_main_container}`}
    >
      {/* <div className={`flex justify-center items-center w-1/2 bg-slate-900 h-max ${styles.login_box_shadow}`}>
      <div className={`${styles.login_inner_container} flex justify-center items-center`}>
        <p className='text-white text-3xl'>WELCOME BACK!</p>
      </div> */}
      <div
        className={`p-10 flex justify-start items-center flex-col ${styles.login_box_shadow} `}
      >
        <p className=" uppercase text-4xl font-sans text-linkcolor">login</p>
        <form
          className="mt-10 flex justify-start items-center flex-col w-full"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="font-sans text-linkcolor text-lg">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              className="w-full h-12 border-2 border-gray-500 rounded-md pl-2"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
          </div>
          <div className="w-full mt-4">
            <label className="font-sans text-linkcolor text-lg">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
              className="w-full h-12  border-2 border-gray-500 rounded-md pl-2"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
            />
          </div>
          <button
            className={` h-10 w-32 mt-6 font-sans rounded-md text-white bg-red-800 font-bold`}
          >
            Login
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Login;
// export { handler as GET, handler as POST }
