import './SiteHeader.css'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Shankar M home">
        SM<span>.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#experience">Experience</a>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
