import { useState } from "react";

export default function PartnersCarousel({ partners }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const total = partners.length;

  const showCards = () => {
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;

    return [partners[left], partners[center], partners[right]];
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const [leftCard, centerCard, rightCard] = showCards();

  return (
    <div className="partners-carousel container text-center my-5">
      <h2 className="mb-4">Our Partners</h2>
      <div className="carousel-wrapper d-flex align-items-center justify-content-center">
        <button className="carousel-btn btn btn-outline-light me-3 pb-3" onClick={handlePrev}>
          ‹ 
        </button>

        <div className="carousel-cards d-flex align-items-center justify-content-center gap-3">
          {[leftCard, centerCard, rightCard].map((partner, idx) => (
            <div
              key={partner.name}
              className={`carousel-card ${idx === 1 ? "carousel-main" : "carousel-side"}`}
            >
              <div className="card partner-card h-100 text-start">
                <img
                  src={partner.logo}
                  className="card-img-top"
                  alt={`${partner.name} logo`}
                />
                <div className="card-body">
                  <h5 className="card-title">{partner.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{partner.solution}</h6>
                  <p className="card-text">{partner.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn btn btn-outline-light ms-3 pb-3" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
}
