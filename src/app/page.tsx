import Image from 'next/image'
import Dashboard from './dashboard'
import MainBanner from '@/components/MainBanner'
import Login from './login'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* @ts-ignore */}
      {/* <MainBanner/>
      <Dashboard/> */}
      <Login/>
    </main>
  )
}
