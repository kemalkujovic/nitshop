import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";

const Carousel = ({ data }) => {
  console.log(data);
  return (
    <SliderCarousel>
      {data.map((d) => (
        <div key={d.id}>
          <img src={d.imgSrc} />
          <p className="legend">{d.imgText}</p>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
