import React from 'react'

const Services = () => {
  return (
   <div className="p-8 bg-primary space-y-8">
      {/* Short Intro */}
      <section className="p-10 bg-accent/20 rounded-3xl border border-accent">
        <h1 className="text-4xl text-muted mb-2">Modern Web Lab</h1>
        <p className="text-surface">We build fast, clean, and reliable digital products.</p>
      </section>

      {/* What We Do - Hard Coded Services */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-secondary rounded-xl">
          <h3 className="text-muted">Development</h3>
          <p className="text-surface text-sm">React and Next.js applications.</p>
        </div>
        
        <div className="p-6 bg-secondary rounded-xl">
          <h3 className="text-muted">Design</h3>
          <p className="text-surface text-sm">Clean layouts and UI systems.</p>
        </div>

        <div className="p-6 bg-secondary rounded-xl">
          <h3 className="text-muted">Performance</h3>
          <p className="text-surface text-sm">Speed and SEO optimization.</p>
        </div>
      </section>
    </div>
  )
}

export default Services
