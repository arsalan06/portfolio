"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/about')
    }
  })
  return (
    <div>  <h2 className='mt-4 font-medium'>You are logged in as:</h2>
    <p className='mt-4'>{session?.user?.name}</p></div>
  )
}

export default Dashboard