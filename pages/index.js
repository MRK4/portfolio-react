import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import Navbar from '@/components/Navbar'
import ProjectsContainer from '@/components/ProjectsContainer'
import SocialMedias from '@/components/SocialMedias'
import Head from 'next/head'
import { Fade } from 'react-reveal'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clément Poudrée | Développeur Web</title>
        <meta name="description" content="Développeur web front-end Rennais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='px-4 pt-24 pb-12 antialiased lg:px-12'>
        <Fade cascade>
          <HeroBanner/>
          <AboutMe />
          <ProjectsContainer />
        </Fade>
        <section className='text-center'>
          <i>More stuff coming soon!</i>
        </section>
        <SocialMedias />
        <Footer />
      </main>
    </>
  )
}
