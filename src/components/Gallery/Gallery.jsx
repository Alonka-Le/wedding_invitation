import css from "./Gallery.module.css";
const images = [
  "/img/gallery5.jpg",
  "/img/gallery2.jpg",
  "/img/gallery4.jpg",
  "/img/gallery1.jpg",
];

function Gallery() {
  return (
    <div className={css.container}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Фото ${index + 1}`}
          className={css.img}
        />
      ))}
    </div>
  );
}

export default Gallery;
