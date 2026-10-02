import SectionHeading from '../SectionHeading/SectionHeading'
import './BackgroundSection.css'

function BackgroundSection() {
  return (
    <section className="background-section section-shell" id="background">
      <SectionHeading
        eyebrow="Learning and foundations"
        title="Education & course"
      />
      <div className="background-grid">
        <article className="background-card">
          <p className="background-label">
            Professional course · Sep 2021 — Mar 2022
          </p>
          <h3>Full Stack Developer</h3>
          <p className="background-place">
            Guvi Geek Networks · IITM Research Park, Chennai
          </p>
          <p className="background-detail">
            Covered HTML, CSS, JavaScript, React, Node.js, MongoDB, and MySQL.
          </p>
          <a
            className="text-link"
            href="https://www.guvi.in/share-certificate/7y3qsj0d9bC9826B14"
            target="_blank"
            rel="noreferrer"
          >
            View certificate <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className="background-card">
          <p className="background-label">Sep 2010 — Sep 2014</p>
          <h3>Bachelor of Engineering</h3>
          <p className="background-place">Marine Engineering</p>
          <p className="background-detail">
            Sams College of Engineering and Technology
          </p>
          <span className="education-score">CGPA 7 / 10</span>
        </article>
      </div>
    </section>
  )
}

export default BackgroundSection
