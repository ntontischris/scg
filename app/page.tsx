'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Contact />
    </motion.div>
  )
}

