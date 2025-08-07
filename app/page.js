'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
   
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </main>
  )
} 