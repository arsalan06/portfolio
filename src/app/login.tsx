import React from 'react'

function Login() {
  return (
    <div className='h-screen w-full bg-custombgcolor flex justify-center items-center '>
      <div className='bg-blend-hard-light p-10 flex justify-center items-center flex-col'>
      <p className=" uppercase text-4xl font-sans text-linkcolor">login</p>
      <form>
        <input type='text' placeholder='Enter Email...' className='w-full h-12 mt-4 border-2 border-gray-500 rounded-md'/>
        <input type='password' placeholder='Enter Password...' className='w-full h-12 mt-4 border-2 border-gray-500 rounded-md'/>
        <button className=' h-12 mt-4'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login