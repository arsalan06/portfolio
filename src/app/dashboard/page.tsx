"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { data } from 'autoprefixer'
function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/about')
    }
  })
  console.log("data")
  console.log("data")
  console.log("data")
  console.log(session)
  return (
    <div>  <h2 className='mt-4 font-medium'>You are logged in as:</h2>
    <p className='mt-4'>{session?.user?.name}</p></div>
  )
}

export default Dashboard