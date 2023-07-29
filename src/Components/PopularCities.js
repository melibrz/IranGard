import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/popular-cities.css';
import '../Styles/topic.css';
import "../Components/Images/shiraz/shiraz-eram-garden.jpg"
class PopularCities extends Component {
  render() {
    return (
      <>
        <div className="popular-cities-wrapper">
          <p className='topic'>شهرهای پرطرفدار:</p>
          <div className="popular-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
      </>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {popularCities &&
          popularCities.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          ></div>
          <div className="city-details">
            <p style={{color:"black",fontWeight:"bold"}}>{this.props.city}</p>
              <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const popularCities = [
  {
    id: 1,
    city: 'شیراز',
    route: 'shiraz',
    description: "باغ ارم",
    url: require("../Components/Images/shiraz/shiraz-eram-garden.jpg")
  },
  {
    id: 2,
    city: 'قم',
    route: 'ghom',
    description: '(حرم حضرت معصومه (س',
    url:require("../Components/Images/قم.jpg")
  },
  {
    id: 3,
    city: 'شاهرود',
    route: 'shahrood',
    description: 'جنگل ابرها',
    url:require("../Components/Images/شاهرود.jpg")
  },
  {
    id: 4,
    city: 'هرمزگان',
    route: 'hormozgan',
    description: "تنگه بوچیر",
    url:require("../Components/Images/تنگه+بوچیر.jpg")

  },
  {
    id: 5,
    city: 'جزیره هرمز',
    route: 'hormoz',
    description: 'کوه های رنگی',
    url:require("../Components/Images/هرمز.jpg")

  },
  {
    id: 6,
    city: 'یزد',
    route: 'yazd',
    description: 'سرو 1400 ساله ابرکوه',
    url:require("../Components/Images/سرو.jpg")

  },
  {
    id: 7,
    city: 'تهران',
    route: 'tehran',
    description: 'دریاچه لزور فیروزکوه',
    url:require("../Components/Images/دریاچه-لزور.jpg")
  },
  {
    id: 8,
    city: 'مازندران',
    route: 'mazandran',
    description: 'تله کابین رامسر',
    url:require("../Components/Images/ramsar-telecabine-facilities.jpg")

  }
];

export default PopularCities;





