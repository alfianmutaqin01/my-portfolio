import { useState } from "react";
import { mcEvents } from "../data/profile";
import Lightbox from "./Lightbox";
import "./common.css";

// Drop photos into src/assets/mc/ using the file names listed in mcEvents.
const photos = import.meta.glob("../assets/mc/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const photoUrl = (fileName) => photos[`../assets/mc/${fileName}`];

function Equalizer() {
  return (
    <span className="equalizer" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
}

function Caption({ event }) {
  return (
    <div className="mc-caption">
      <span className={`mc-type ${event.type === "Casual" ? "is-casual" : ""}`}>
        {event.type}
      </span>
      <p className="mc-title">{event.title}</p>
      <p className="mc-meta">
        {event.venue}
        {event.date && ` · ${event.date}`}
      </p>
    </div>
  );
}

function McGallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="row g-4">
        {mcEvents.map((event, i) => {
          const src = photoUrl(event.photo);

          return (
            <div
              className="col-sm-6 col-lg-4"
              key={event.title}
              data-aos="zoom-in"
              data-aos-delay={(i % 3) * 100}
            >
              {src ? (
                <button
                  type="button"
                  className="mc-card"
                  onClick={() => setActive({ ...event, src })}
                  aria-label={`View photo: ${event.title}`}
                >
                  <img src={src} alt={event.title} loading="lazy" />
                  <Caption event={event} />
                </button>
              ) : (
                <div className="mc-card">
                  <div className="mc-placeholder">
                    <i className="bi bi-mic-fill"></i>
                    <Equalizer />
                  </div>
                  <Caption event={event} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {active && (
        <Lightbox
          src={active.src}
          title={active.title}
          subtitle={[active.venue, active.date].filter(Boolean).join(" · ")}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

export { Equalizer };
export default McGallery;
