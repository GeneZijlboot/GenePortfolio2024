import '../styling/techstack.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function techstack() {
    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
      <div className="techstack">
        <div className="title-wrapper">
            <div className="number">01.</div>
            <div className="title">techstack</div>
        </div>
        <div className='carousel'>
            <h2>Carousel Component</h2>
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
      </div>
    )
  }
  
  export default techstack
  