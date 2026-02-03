import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Contact = () => {
const [status, setStatus] = useState('idle')
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('business-website-h3ns.vercel.app/contact-us', {name, email, phone});
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      console.log('success', name, email, phone);
     
    } catch (error) {
      setStatus('Something went wrong :(')
      console.error('Error submitting form', error.message, name , email , phone);
    }
   
  }

  return (
   <>
   <div className='flex justify-center'>
   <form 
   onSubmit={handleSubmit}
   method="POST"
   className='bg-secondary flex gap-2 flex-col align-middle m-20 rounded-2xl w-150 h-90 p-10'>

    <h1 className='text-4xl m-auto text-green-500'>Contact us</h1>

    <input 
    type="text" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    placeholder='Enter your Name'
    className=' outline-0 border-2 rounded-2xl bg-white pl-3 h-12 text-xl'
    required />

    <input 
    type="email" 
    value={email}
    placeholder='Enter your Email'
    onChange={(e)=> setEmail(e.target.value)}
    className=' outline-0 border-2 rounded-2xl bg-white pl-3 h-12 text-xl'
    required/>
    
    <input 
    type="tel"
    value={phone}
    placeholder='Enter your Phone no.'
    className='outline-0 border-2 rounded-2xl bg-white pl-3 h-12 text-xl'
    onChange={(e)=>setPhone(e.target.value)}
    required />

   <button 
   disabled={status ==='loading'}
   
   className='bg-green-500 w-50 rounded-2xl hover:bg-green-300 p-2 text-2xl m-auto'>{status === 'loading' ? 'sending' : "Submit"}</button>
    {status === "success" && <p className="text-muted">Thank you for contacting us...We'll get back to you as soon as possible</p>}
   </form>
   </div>
   
   
   
   
   </>
  )
}

export default Contact
