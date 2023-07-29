import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../Styles/background.css';

class ImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    const { backgroundImagesData } = this.props;
    return (
      <div className="slider-div">
        <Slider {...settings}>
          {backgroundImagesData.map((item, index) => {
            return (
              <BackgroundImageDiv key={item.id} id={item.id} url={item.url} />
            )
          })}
        </Slider>
      </div>
    );
  }
}

class BackgroundImageDiv extends Component {
  render() {
    const url = `url(${this.props.url})`
    return (
      <div
        className="background-image-container"
        style={{
          backgroundImage: url,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
    );
  }
}

export default ImageSlider;
