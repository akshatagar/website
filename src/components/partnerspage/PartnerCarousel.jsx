import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function PartnerCarousel({ partners }) {
  const router = useRouter();
  const { id } = router.query;
  const [centerSlideIndex, setCenterSlideIndex] = useState(parseInt(id) || 0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    initialSlide: centerSlideIndex,
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
      <div className="card partner-card text-start">
        <img
          src={partner.carouselLogo}
          alt={`${partner.name} logo`}
          style={{ maxHeight: "60px", maxWidth: "200px", margin: "0 auto"}}
        />
        <div className="card-body">
          <p className="card-text" style={{ fontWeight: "bold" }}>{partner.summary}</p>
          <p className="card-text">{partner.carouselSubtext}</p>
          <img className="card-img mt-4" src={partner.carouselGraphic} alt="carousel-graphic" style={{ maxHeight: "300px", maxWidth: "600px" }} />
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
