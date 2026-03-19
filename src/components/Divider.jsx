export default function Divider({ text = "Ogni evento è unico — ogni dettaglio racconta la tua storia" }) {
  return (
    <div className="divider">
      <div className="div-line" />
      <div className="div-icon">✦</div>
      <div className="div-text">{text}</div>
      <div className="div-icon">✦</div>
      <div className="div-line" />
    </div>
  )
}
