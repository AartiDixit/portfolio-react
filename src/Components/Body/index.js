import React from 'react'
import About from './About'
import './body.css'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body
