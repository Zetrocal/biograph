import Hero from '@/mainPages/Home/Hero'
import Image from 'next/image'
import Projects from './projects/page'
import TechHabilities from '@/mainPages/Home/TechHabilities'
import Footer from '@/components/Footer'
import HeroSimple from '@/mainPages/Home/HeroSimple'
import LastProject from '@/mainPages/Home/LastProjects'
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
