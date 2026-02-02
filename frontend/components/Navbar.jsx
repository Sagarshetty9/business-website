import React from 'react'
import { Link } from 'react-router-dom'
import reactImg from '../src/assets/react.svg'

const Navbar = () => {
  return (
    <>
 <nav className="bg-secondary px-7 h-20 flex items-center">
  <img src={reactImg} className="h-10 w-10 mr-auto" alt="logo" />
  <Link to="/" className="px-4 text-green-500 hover:text-green-300">Home</Link>
  <Link to="/about" className="px-4 text-green-500 hover:text-green-300">About</Link>
  <Link to="/services" className="px-4 text-green-500 hover:text-green-300">Services</Link>
  <Link to="/contact-us" className="px-4 text-green-500 hover:text-green-300">Contact</Link>
</nav>
    </>
  )
}

export default Navbar
