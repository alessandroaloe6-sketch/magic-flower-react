import { STEPS } from '../data/siteData'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-intro reveal">
          <p className="sec-label">Il nostro metodo</p>
          <h2 className="sec-title">Come <em>lavoriamo</em></h2>
          <p className="sec-text">
            Dalla prima idea al grande giorno, ti accompagniamo in ogni passo con
            cura, professionalità e passione per i dettagli.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`step reveal${i > 0 ? ` rd${i}` : ''}`}
            >
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
