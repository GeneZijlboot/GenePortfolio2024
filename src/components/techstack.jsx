import '../styling/techstack.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Techstack() {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 4000,
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
      <div className="container">
        <div className="mx-auto">
          <div className="slider-wrapper">
            <Slider {...settings}>
              <div className="slide-content">
                <div className="image-wrapper">
                  <div className="image html"></div>
                </div>
                <div className="title-wrapper">HTML</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <div className="image css"></div>
                </div>
                <div className="title-wrapper">CSS</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <div className="image javascript"></div>
                </div>
                <div className="title-wrapper">Javascript</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <div className="image tailwind"></div>
                </div>
                <div className="title-wrapper">Tailwind</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image react"></div>
                </div>
                <div className="title-wrapper">React</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image nodejs"></div>
                </div>
                <div className="title-wrapper">NodeJs</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image mongodb"></div>
                </div>
                <div className="title-wrapper">MongoDB</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image mongoose"></div>
                </div>
                <div className="title-wrapper">Mongoose</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image express"></div>
                </div>
                <div className="title-wrapper">Express</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image Webpack"></div>
                </div>
                <div className="title-wrapper">Wepack</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image npm"></div>
                </div>
                <div className="title-wrapper">Npm</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image git"></div>
                </div>
                <div className="title-wrapper">Git</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image vscode"></div>
                </div>
                <div className="title-wrapper">VsCode</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image vim"></div>
                </div>
                <div className="title-wrapper">Vim</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image terminal"></div>
                </div>
                <div className="title-wrapper">Terminal</div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                <div className="image linux"></div>
                </div>
                <div className="title-wrapper">Linux</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;