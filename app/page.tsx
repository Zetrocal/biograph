import Hero from '@/components/Home/Hero'
import Image from 'next/image'
import Projects from './projects/page'
import TechHabilities from '@/components/Home/TechHabilities'
import Footer from '@/components/Footer'
import HeroSimple from '@/components/Home/HeroSimple'
import LastProject from '@/components/Home/LastProjects'
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSimple/>
      <LastProject/>
    </main>
  )
}
