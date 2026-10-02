import './SiteHeader.css'

type SiteHeaderProps = {
  isDarkTheme: boolean
  onToggleTheme: () => void
}

function SiteHeader({ isDarkTheme, onToggleTheme }: SiteHeaderProps) {
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
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
          aria-pressed={isDarkTheme}
          title={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
        >
          <span aria-hidden="true">{isDarkTheme ? '☀' : '☾'}</span>
        </button>
      </nav>
    </header>
  )
}

export default SiteHeader
