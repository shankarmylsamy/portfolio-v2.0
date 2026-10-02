import './SiteFooter.css'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <span>© {currentYear} Shankar M</span>
      <span>Full Stack Engineer · Healthcare &amp; SaaS</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default SiteFooter
