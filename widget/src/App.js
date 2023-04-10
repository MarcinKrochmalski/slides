import { useState, useEffect } from "react";
import "./App.scss";
import { Slide } from "./components/slide/slide";
import { Thumbnails } from "./components/thumbnails/thumbnails";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function App(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [breakingPointSmall, setBreakingPointSmall] = useState(
    window.innerWidth <= 1000
  );
  const slides = JSON.parse(props.slides) || [];
  let timeout = null;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keyup", handleKeyUp);
      if (timeout) clearTimeout(timeout);
    };
  });

  const handleResize = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setBreakingPointSmall(window.innerWidth <= 1000);
      handleClickScroll(activeSlideIndex);
    }, 500);
  };

  const handleKeyUp = (e) => {
    if (e.code === "ArrowRight" || e.code === "ArrowDown") {
      handleActiveSlideIndex(activeSlideIndex + 1);
    } else if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
      handleActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const handleActiveSlideIndex = (index) => {
    // loop slides
    if (index < 0) index = slides.length - 1;
    if (index > slides.length - 1) index = 0;
    setActiveSlideIndex(index);
    handleClickScroll(index);
  };

  const handleClickScroll = (index) => {
    const slideElement = document.getElementById("slide-" + index);
    if (slideElement) {
      slideElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const getThumbnails = () =>
    slides
      ? slides.map((slide) => slide.photos.length && slide.photos[0])
      : null;

  return (
    <div className="app">
      {slides.length > 1 && (
        <div
          className="btn"
          onClick={() => handleActiveSlideIndex(activeSlideIndex - 1)}
        >
          <BsChevronLeft />
        </div>
      )}
      <div className="slides" id="slides">
        {slides.length > 0 &&
          slides.map(
            (slide, index) =>
              slide.photos.length > 0 && (
                <Slide
                  {...slide}
                  breakingPointSmall={breakingPointSmall}
                  key={index}
                  id={"slide-" + index}
                />
              )
          )}
      </div>
      {!breakingPointSmall && (
        <Thumbnails
          thumbnails={getThumbnails()}
          activeSlideIndex={activeSlideIndex}
          handleActiveSlideIndex={handleActiveSlideIndex}
        />
      )}
      {slides.length > 1 && (
        <div
          className="btn"
          onClick={() => handleActiveSlideIndex(activeSlideIndex + 1)}
        >
          <BsChevronRight />
        </div>
      )}
    </div>
  );
}

export default App;
