import SectionHeading from '../SectionHeading/SectionHeading'
import './ProjectsSection.css'

function ProjectsSection() {
  return (
    <section className="projects-section section-shell" id="projects">
      <SectionHeading eyebrow="More to come" title="Selected projects" />
      <div className="projects-placeholder">
        <span className="placeholder-mark" aria-hidden="true">✳</span>
        <div>
          <h3>Project case studies are on the way.</h3>
          <p>
            I&apos;m preparing a closer look at the products and features
            I&apos;ve helped build. Check back soon.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
