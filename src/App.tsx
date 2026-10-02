import { useState } from 'react'
import BackgroundSection from './components/BackgroundSection/BackgroundSection'
import ContactSection from './components/ContactSection/ContactSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import SiteFooter from './components/SiteFooter/SiteFooter'
import SiteHeader from './components/SiteHeader/SiteHeader'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <div className={`portfolio-app${isDarkTheme ? ' portfolio-app--dark' : ''}`}>
      <SiteHeader
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((currentTheme) => !currentTheme)}
      />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ProjectsSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
