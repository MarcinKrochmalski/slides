import "./thumbnails.scss";

export function Thumbnails({
  thumbnails,
  activeSlideIndex,
  handleActiveSlideIndex,
}) {
  const isActive = (index) => index === activeSlideIndex;

  return (
    <div className="thumbnails">
      {thumbnails &&
        thumbnails.map((thumbnail, index) => (
          <div
            className="container"
            key={index}
            onClick={() => handleActiveSlideIndex(index)}
          >
            <img
              className={isActive(index) ? "active" : ""}
              src={thumbnail.src}
              alt={thumbnail.alt}
              title={thumbnail.title}
              key={index}
            />
          </div>
        ))}
    </div>
  );
}
