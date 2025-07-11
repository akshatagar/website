import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function PartnerCarousel({ partners }) {
  const router = useRouter();
  const { id } = router.query;
  const [centerSlideIndex, setCenterSlideIndex] = useState(id || 0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    afterChange: (current) => setCenterSlideIndex(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        }
      }
    ]
  };

  const renderCard = (partner, isCenter) => {
    const cardContent = (
      <div className="card partner-card h-100 text-start">
        <img
          src={partner.logoUrl}
          className="card-img-top"
          alt={`${partner.name} logo`}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{partner.name}</h5>
          <h6 className="card-subtitle mb-3 mt-2 text-muted text-center">{partner.solution}</h6>
          <p className="card-text">{partner.summary}</p>
        </div>
      </div>
    );

    return isCenter ? (
      <Link href={`/partners/${partner.name}`} className="text-decoration-none">
        {cardContent}
      </Link>
    ) : (
      cardContent
    );
  };

  return (
    <div className="partners-carousel container text-center my-5">
      <h2 className="mb-4">Our Partners</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {partners.map((partner, idx) => (
            <div
              key={partner.name}
              className={`carousel-card ${
                idx === centerSlideIndex ? "carousel-main" : "carousel-side"
              }`}
            >
              {renderCard(partner, idx === centerSlideIndex)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
