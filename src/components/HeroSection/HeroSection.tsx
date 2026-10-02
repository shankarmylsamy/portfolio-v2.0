import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero section-shell" id="home">
      <p className="eyebrow">
        <span className="status-dot" /> Full Stack Engineer
      </p>
      <h1>
        I build products
        <br />
        that make work <span className="highlight">better.</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-intro">
          I&apos;m Shankar, a Full Stack Engineer with 4+ years building scalable
          products across healthcare and SaaS. I specialize in React,
          TypeScript, and Node.js, with a focus on frontend architecture,
          performance, reusable components, and REST API integrations.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#experience">
            Explore experience <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--quiet" href="mailto:shankar.fsd@gmail.com">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-decoration" aria-hidden="true">
        <span>SM</span>
        <span className="decoration-star">✳</span>
      </div>
      <div className="profile-links" aria-label="Professional links">
        <a href="https://linkedin.com/in/shankar-mylesamy" target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href="https://github.com/shankar-mylesamy" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
