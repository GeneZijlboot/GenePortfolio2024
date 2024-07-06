import '../styling/techstack.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Techstack() {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 5000,
    slidesToShow: 4,
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
      {/* <div className="slider-wrapper"></div> */}
            <Slider {...settings}>
              <div>
                <h3>FIRST SLIDE</h3>
              </div>
              <div>
                <h3>SECOND SLIDE</h3>
              </div>
              <div>
                <h3>THIRD SLIDE</h3>
              </div>
              <div>
                <h3>FOURTH SLIDE</h3>
              </div>
            </Slider>
    </div>
  );
}

export default Techstack;
