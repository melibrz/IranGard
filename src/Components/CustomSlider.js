import React, { Component } from 'react';
import Slider from 'react-slick';
import ExperienceCard from './Card';
import { Left } from './Arrows.js';
import { Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/headout-picks.css';
import "../Styles/topic.css";

class Suggestions extends Component {
  render() {
    const { Suggestions } = this.props;
    return (
      <div style={{ width: "95%", margin: "0 2.5%", }}>
        <p className='topic'>{this.props.topic}</p>
        <SuggestionsSlider Suggestions={Suggestions} />
      </div>
    );
  }
}

class SuggestionsSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    const { Suggestions } = this.props;
    return (
      <Slider {...settings} >
        {Suggestions &&
          Suggestions.map(
            ({
              places,
              description,
              city,
              name
            }) => (
              <ExperienceCard
                name={name}
                city={city}
                places={places}
                description={description}
              />
            )
          )}
      </Slider>
    );
  }
}

export default Suggestions;
