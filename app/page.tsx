import Hero from '@/components/Home/Hero'
import Image from 'next/image'
import Projects from './projects/page'
import TechHabilities from '@/components/Home/TechHabilities'
import Footer from '@/components/Footer'
import HeroSimple from '@/components/Home/HeroSimple'
import LastProject from '@/components/Home/LastProjects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSimple/>
    </main>
  )
}
