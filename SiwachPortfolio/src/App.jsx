import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Info/Home'
import About from './Info/About'
import Experience from './Info/Experience'
import Skills from './Info/Skill'
import Certificate from './Info/Certificate'
import Project from './Info/Project'
import Education from './Info/Education'
import Contact from './Info/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
      </Routes>
    </div>
  )
}

export default App
