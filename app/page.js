'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { googleSheets } from '../lib/googleSheets.js/googleSheets'

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        // Jika Anda ingin menggunakan Google Sheets, uncomment baris di bawah
        const data = await googleSheets();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 