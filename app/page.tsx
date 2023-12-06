import Hero from '@/pages/Home/Hero'
import Image from 'next/image'
import Projects from './projects/page'
import TechHabilities from '@/pages/Home/TechHabilities'
import Footer from '@/components/Footer'
import HeroSimple from '@/pages/Home/HeroSimple'
import LastProject from '@/pages/Home/LastProjects'
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <LastProject/>
      <TechHabilities/>
    </main>
  )
}
