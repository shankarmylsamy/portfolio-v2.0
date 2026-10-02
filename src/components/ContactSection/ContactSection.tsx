import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact">
      <p className="eyebrow">Open to new opportunities</p>
      <div className="contact-content">
        <h2>
          Let&apos;s build
          <br />
          something useful.
        </h2>
        <a className="contact-link" href="mailto:shankar.fsd@gmail.com">
          shankar.fsd@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-socials">
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

export default ContactSection
