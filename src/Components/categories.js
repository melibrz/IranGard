import React, { Component } from 'react';
import Slider from 'react-slick';
import ExperienceCard from './Card';
import { Left } from './Arrows.js';
import { Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/headout-picks.css';
import '../Styles/topic.css';

class Categories extends Component {
    render() {
        const { Category } = this.props;
        return (
            <div style={{ width: "95%", margin: "0 2.5%", }}>
                <p className='topic'>{this.props.topic}</p>
                <PickedSlider Category={Category} />
            </div>
        );
    }
}

class PickedSlider extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <Right />,
            prevArrow: <Left />
        };
        const { Category } = this.props;
        return (
            <Slider {...settings} >
                {Category.map(({ name, svg }) => (
                    <div className='category'>
                        <img src={svg} width="15%" />{name}
                    </div>
                )
                )}
            </Slider>
        );
    }
}

export default Categories;
