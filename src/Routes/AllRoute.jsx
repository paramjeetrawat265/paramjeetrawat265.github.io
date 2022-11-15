import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Project from '../Components/Project'
import Skills from '../Components/Skills'
const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
    </Routes>
  )
}

export default AllRoute