import React from 'react'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import {createBrowserRouter} from 'react-router-dom'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Contact from '../components/Contact.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact-us' element={<Contact />}/>
      </Routes>
     
    </>
  )
}

export default App
