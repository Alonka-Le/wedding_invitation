import { useMediaQuery } from "react-responsive";
import css from "./Gallery.module.css";
import Slider from "react-slick";

const images = [
  "/img/gallery5.jpg",
  "/img/gallery2.jpg",
  "/img/gallery4.jpg",
  "/img/gallery1.jpg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export default function Gallery() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={css.container}>
      {isDesktop ? (
        <div className={css.grid}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Фото ${index + 1}`}
              className={css.image}
            />
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className={css.slide}>
              <img src={src} alt={`Фото ${index + 1}`} className={css.image} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
