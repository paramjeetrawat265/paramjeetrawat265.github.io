import React from 'react'
import About from './About'
import Contact from './Contact'
import GitCalender from './GitCalender'
import Navbar from './Navbar'
import Project from './Project'
import Skill from './Skill'
import Skills from './Skills'
const Home = () => {
  return (
    <div id="/">

      <Navbar />
      <About />
      <Skills />
      <Skill/>
      <Project />
      <Contact />
    </div>
  )
}

export default Home