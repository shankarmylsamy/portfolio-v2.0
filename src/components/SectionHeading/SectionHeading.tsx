import './SectionHeading.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  count?: string
}

function SectionHeading({ eyebrow, title, count }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {count && <span className="section-count">{count}</span>}
    </div>
  )
}

export default SectionHeading
