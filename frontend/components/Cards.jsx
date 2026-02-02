import React from 'react'

const Cards = ({title, desc}) => {
  return (
   <div className="p-10 bg-accent/30 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl mx-5 my-10 flex  ">
      <h1 className="text-5xl font-extrabold text-muted mb-4 tracking-tight ">
        {title}
      </h1>
      <p className="text-muted/90 text-lg max-w-2xl mx-auto">
        {desc}
      </p>
    </div>
  )
}

export default Cards
