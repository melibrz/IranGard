import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/popular-cities.css';
import '../Styles/topic.css';
import "../Components/Images/shiraz/shiraz-eram-garden.jpg"
class Residences extends Component {
    render() {
        return (
            <>
                <div className="residence-wrapper">
                    <p className='topic'>{this.props.topic}</p>
                    <div className="residences-carousel-wrap">
                        <ResidenceSlider />
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

class ResidenceSlider extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <Right />,
            prevArrow: <Left />
        };
        return (
            <Slider {...settings}>
                {ResidenceData &&
                    ResidenceData.map(({ id, city, url, location, route, soonReserve, goodHost, cost,discountedCost }) => (
                        <Link
                            to={{ pathname: `/cities/${route}` }}
                            key={id}
                            className="link"
                        >
                            <ResidenceCard city={city} url={url} location={location} discountedCost={discountedCost} soonReserve={soonReserve} goodHost={goodHost} cost={cost} />
                        </Link>
                    ))}
            </Slider>
        );
    }
}

class ResidenceCard extends Component {
    render() {
        const url = `url(${this.props.url})`;
        return (
            <div className="city-card-wrapper">
                <div className="residence-card">
                    <div className="residence-card-img" style={{ backgroundImage: url }}></div>
                    <div className="residence-details">
                        <p style={{ fontWeight: "bold" }}>{this.props.city}</p>
                        <div className='residence-location'>
                            <img src={require("../Components/Images/loc.png")} />
                            {this.props.location}
                        </div>
                        {this.props.soonReserve &&
                            <div className='soon-reserve'>
                                <img src={require("../Components/Images/thunder.png")} />
                                رزروآنی</div>
                        }
                        {this.props.goodHost &&
                            <div className='good-host'>
                                <img src={require("../Components/Images/star.png")} />
                                میزبان مهمان نواز
                            </div>
                        }
                        <div className='residence-cost'>
                            <p>:از شبی</p>
                            <p style={{display:"inline-flex"}}>
                                <span>تومان</span>
                                <span>{this.props.cost}</span>
                                <span style={{textDecorationLine:"line-through",color:"gray"}}>{this.props.discountedCost}</span>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ResidenceData = [
    {
        id: 1,
        city: 'واحد مبله دو خوابه در شیراز',
        route: 'residence',
        location: "شیراز، قصردشت، اقاقیها",
        url: require("../Components/Images/residences/vila1.jpg"),
        cost: 300000,
        discountedCost:250000,
        soonReserve: false,
        goodHost: true
    },
    {
        id: 2,
        city: 'ویلای سه خواب با استخر در اصفهان',
        route: 'ghom',
        location: 'اصفهان، میدان سی وسه پل',
        url: require("../Components/Images/residences/vila10.jpg"),
        cost: 300000,
        discountedCost:200000,
        soonReserve: true,
        goodHost: false
    },
    {
        id: 3,
        city: 'واحد مبله با استخر نزدیک حرم امام رضا',
        route: 'shahrood',
        location: 'خراسان رضوی، مشهد، طبرسی',
        url: require("../Components/Images/residences/vila3.jpg"),
        cost: 300000,
        discountedCost:110000,
        soonReserve: true,
        goodHost: true
    },
    {
        id: 4,
        city: 'واحد دوبلکس رو به دریا در رامسر',
        route: 'hormozgan',
        location: "مازندران، رامسر، سجیکلا",
        url: require("../Components/Images/residences/vila4.jpg"),
        cost: 300000,
        discountedCost:250000,
        soonReserve: false,
        goodHost: true
    },
    {
        id: 5,
        city: 'واحد یک خوابه با سرایه دار',
        route: 'hormoz',
        location: 'گیلان، رشت، لولمان',
        url: require("../Components/Images/residences/vila5.jpg"),
        cost: 300000,
        discountedCost:250000,
        soonReserve: false,
        goodHost: true
    },
    {
        id: 6,
        city: 'سوییت 80 متری یک خوابه در یزد',
        route: 'yazd',
        location: 'یزد، ابرکوه، سرو 1400 ساله ابرکوه',
        url: require("../Components/Images/residences/vila6.jpg"),
        cost: 300000,
        discountedCost:20000,
        soonReserve: false,
        goodHost: false
    },
    {
        id: 7,
        city: 'ویلا با جکوزی در فیروزکوه',
        route: 'tehran',
        location: 'تهران، تهران، فیروزکوه',
        url: require("../Components/Images/residences/vila7.jpg"),
        cost: 300000,
        discountedCost:250000,
        soonReserve: true,
        goodHost: true
    },
    {
        id: 8,
        city: 'واحد مدرن و مبله در شهرکرد',
        route: 'mazandran',
        location: 'شهرکرد، چارکارخانه',
        url: require("../Components/Images/residences/vila8.jpg"),
        cost: 300000,
        discountedCost:250000,
        soonReserve: false,
        goodHost: true
    },
    {
        id: 8,
        city: 'آپارتمان دوخواب در بندرعباس',
        route: 'mazandran',
        location: 'بندرعباس، نخل ناخدا',
        url: require("../Components/Images/residences/vila9.jpg"),
        cost: 300000,
        discountedCost:290000,
        soonReserve: false,
        goodHost: true
    },
    {
        id: 8,
        city: 'آپارتمان لوکس در چهارباغ',
        route: 'mazandran',
        location: 'کرج، چهارباغ',
        url: require("../Components/Images/residences/vila10.jpg"),
        cost: 300000,
        discountedCost:150000,
        soonReserve: true,
        goodHost: true
    }
];

export default Residences;





