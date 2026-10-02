import BackgroundSection from './components/BackgroundSection/BackgroundSection'
import ContactSection from './components/ContactSection/ContactSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import SiteFooter from './components/SiteFooter/SiteFooter'
import SiteHeader from './components/SiteHeader/SiteHeader'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ProjectsSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
