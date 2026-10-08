import "./common.css";

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="text-center mb-5" data-aos="fade-up">
      <p className="section-eyebrow mb-2">{eyebrow}</p>
      <h2 className="fw-bold mb-3">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

export default SectionHeading;
