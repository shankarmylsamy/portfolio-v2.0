import { expertise } from '../../data/portfolio'
import SectionHeading from '../SectionHeading/SectionHeading'
import './ExpertiseSection.css'

function ExpertiseSection() {
  return (
    <section className="expertise-section section-shell" id="expertise">
      <SectionHeading
        eyebrow="Tools I use to get things done"
        title="Expertise"
      />
      <div className="expertise-grid">
        {expertise.map((group) => (
          <article className="expertise-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
