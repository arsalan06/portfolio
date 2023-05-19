import React from 'react'
import styles from "./styles/login.module.css"
function Login() {
  return (
    <div className={`h-screen w-full bg-custombgcolor flex justify-center items-center ${styles.login_main_container}`}>
      {/* <div className={`flex justify-center items-center w-1/2 bg-slate-900 h-max ${styles.login_box_shadow}`}>
      <div className={`${styles.login_inner_container} flex justify-center items-center`}>
        <p className='text-white text-3xl'>WELCOME BACK!</p>
      </div> */}
      <div className={`p-10 flex justify-start items-center flex-col ${styles.login_box_shadow} `}>
      <p className=" uppercase text-4xl font-sans text-linkcolor">login</p>
      <form className='mt-10 flex justify-start items-center flex-col w-full'>
        <div className='w-full'>
        <label className='font-sans text-linkcolor text-lg'>Email:</label>
        <input type='text' placeholder='Enter Email...' className='w-full h-12 border-2 border-gray-500 rounded-md pl-2'/>
        </div>
        <div className='w-full mt-4'>
        <label className='font-sans text-linkcolor text-lg'>Password:</label>
        <input type='password' placeholder='Enter Password...' className='w-full h-12  border-2 border-gray-500 rounded-md pl-2'/>
        </div>
        <button className={` h-10 w-32 mt-6 font-sans rounded-md text-white bg-red-800 font-bold`}>Login</button>
      </form>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Login