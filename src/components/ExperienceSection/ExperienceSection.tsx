import { experience } from '../../data/portfolio'
import SectionHeading from '../SectionHeading/SectionHeading'
import './ExperienceSection.css'

function ExperienceSection() {
  return (
    <section className="experience-section section-shell" id="experience">
      <SectionHeading
        eyebrow="Where I've made an impact"
        title="Experience"
        count="2022 — Present"
      />
      <div className="experience-list">
        {experience.map((job, index) => (
          <article className="experience-item" key={job.company}>
            <div className="experience-index" aria-hidden="true">
              0{index + 1}
            </div>
            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <p className="experience-role">{job.role}</p>
                  <h3>{job.company}</h3>
                </div>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="experience-domain">{job.domain}</p>
              <ul className="highlight-list">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
