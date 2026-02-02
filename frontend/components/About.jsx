import React from 'react'

const About = () => {
  return (
   <div className="p-8 bg-primary space-y-12">
      {/* Company Story */}
      <section className="max-w-2xl">
        <h2 className="text-muted text-sm uppercase tracking-widest mb-2">Our Story</h2>
        <h3 className="text-3xl text-muted mb-4">Built on the Forest Floor</h3>
        <p className="text-surface leading-relaxed">
          We started in 2024 with a simple goal: stop the bloat. We saw the web getting slower, so we moved back to the basics—clean code, deep greens, and lightning-fast performance.
        </p>
      </section>

      {/* Trust Focused Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-accent/30 pt-8">
        <div>
          <p className="text-2xl text-muted">99.9%</p>
          <p className="text-surface text-xs uppercase">Uptime</p>
        </div>
        <div>
          <p className="text-2xl text-muted">50+</p>
          <p className="text-surface text-xs uppercase">Projects</p>
        </div>
        <div>
          <p className="text-2xl text-muted">Zero</p>
          <p className="text-surface text-xs uppercase">Bloat</p>
        </div>
        <div>
          <p className="text-2xl text-muted">24/7</p>
          <p className="text-surface text-xs uppercase">Support</p>
        </div>
      </section>
    </div>
  )
}

export default About
