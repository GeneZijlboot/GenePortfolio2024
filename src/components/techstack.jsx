import '../styling/techstack.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Techstack() {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    swipeToSlide: false,
    touchMove: false,
  };

  return (
    <div className="techstack">
      <div className="title-wrapper">
        <div className="number">01.</div>
        <div className="title">techstack</div>
      </div>
      <div className="text-box">Skills & <span style={{ color: '#377747' }}>Tools</span></div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="slide-content">
            <div className="image-wrapper">
              <div className="image"></div>
            </div>
            <div className="title-wrapper">HTML</div>
          </div>
          <div className="slide-content">
            <div className="image-wrapper">
              <div className="image"></div>
            </div>
            <div className="title-wrapper">CSS</div>
          </div>
          <div className="slide-content">
            <div className="image-wrapper">
              <div className="image"></div>
            </div>
            <div className="title-wrapper">Javascript</div>
          </div>
          <div className="slide-content">
            <div className="image-wrapper">
              <div className="image"></div>
            </div>
            <div className="title-wrapper">React</div>
          </div>
          <div className="slide-content">
            <div className="image-wrapper">
            <div className="image"></div>
            </div>
            <div className="title-wrapper">Bootstrap</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Techstack;