'use client';
import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <div>
        <NavBar />
        <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default Portfolio