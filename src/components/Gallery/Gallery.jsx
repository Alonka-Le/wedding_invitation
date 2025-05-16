import css from "./Gallery.module.css";
const images = [
  "src/img/gallery5.jpg",
  "src/img/gallery2.jpg",
  "src/img/gallery4.jpg",

  "src/img/gallery1.jpg",
  // "src/img/gallery3.jpg",
  ,
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
