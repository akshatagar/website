import { useState, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PartnerCarousel({ partners }) {
  const router = useRouter();
  const { id } = router.query;
  const [centerSlideIndex, setCenterSlideIndex] = useState(parseInt(id) || 0);

  // 1) Create a ref to the Slider instance
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    arrows: false,               // ← turn off default arrows
    initialSlide: centerSlideIndex,
    beforeChange: (_, newIndex) => setCenterSlideIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const renderCard = (partner, isCenter) => {
    if (!isCenter) {
      return (
        <div className="card partner-card logo-only">
          <img
            src={partner.carouselLogo}
            alt={`${partner.name} logo`}
            className="side-logo"
          />
        </div>
      );
    }

    return (
      <Link href={`/partners/${partner.name}`} className="text-decoration-none">
        <div className="card partner-card center-content fold-open">
          <img
            src={partner.carouselLogo}
            alt={`${partner.name} logo`}
            className="center-logo"
          />
          <div className="card-body">
            <p className="card-text fw-bold">{partner.summary}</p>
            <p className="card-text">{partner.carouselSubtext}</p>
            <img
              className="card-img mt-4"
              src={partner.carouselGraphic}
              alt="carousel-graphic"
            />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="partners-carousel container text-center my-5">
      <h2 className="mb-4">Our Partners</h2>

      {/* 2) Wrap the Slider with the ref */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {partners.map((p, idx) => (
            <div
              key={p.name}
              className={idx === centerSlideIndex ? "carousel-main" : "carousel-side"}
            >
              {renderCard(p, idx === centerSlideIndex)}
            </div>
          ))}
        </Slider>
      </div>

      {/* 3) Prev / Next buttons below */}
      <div className="carousel-controls mt-4">
        <button
          className="btn btn-outline-light me-3"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          &larr;
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => sliderRef.current?.slickNext()}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
