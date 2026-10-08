import { useEffect } from "react";
import "./common.css";

// Full-screen image preview. Closes on Escape, the close button, or a click outside the image.
function Lightbox({ src, title, subtitle, action, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <img src={src} alt={title} onClick={(e) => e.stopPropagation()} />
      <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        <p className="fw-bold mb-0">{title}</p>
        {subtitle && <p className="small mb-0 text-white-50">{subtitle}</p>}
        {action && (
          <a
            href={action.href}
            className="lightbox-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi ${action.icon} me-2`}></i>
            {action.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
