import React, { Component } from 'react';
import Header from '../Components/FixedElements/Header';
import Footer from '../Components/FixedElements/footer';
import "../Styles/shiraz.css";
import Table from './table';
import '../Styles/popular-cities.css';
import ReservationBox from '../Components/reservationBox';
import Modal from '../Components/Modal/modal';

const Style = {
    position: "sticky",
    top: "12%",
    background: "#ffffff8f",
    zIndex: "5",
}
export default class ResidencePage extends Component {
    state = {

        tableItems: [

            { topic: "متراژ بنا", status: "300 متر", icon: require("../Components/Images/house.png") },
            { topic: "ظرفیت", status: "2 طبقه", icon: require("../Components/Images/capacity.png") },
            { topic: "طبقه این واحد", status: "1 , 2", icon: require("../Components/Images/icons8-floor-64.png") },
            { topic: "تعداد پله ها", status: "15", icon: require("../Components/Images/icons8-stairs-50.png") },
            { topic: "حداقل مدت اقامت", status: "1 شب", icon: require("../Components/Images/icons8-time-64.png") },
            { topic: "آدرس دقیق", status: "شیراز، معالی آباد، خیابان سرو، کوچه یاس، پلاک 23", icon: require("../Components/Images/icons8-address-100.png") },
        ]
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (

            <>
                <Header
                    selectedCity={'shiraz'}
                    show={false}
                />
                <div style={{ width: "95%", margin: "auto 2.5%" }}>

                    <div className="siraz-wrapper">
                        <p className='topic' style={Style}>واحد مبله دو خوابه در شیراز</p>
                        <div style={{ display: "inline-flex", flexDirection: "row", width: "100%" }}>
                            <img src={require("../Components/Images/residences/vila1.jpg")} width="100%" height="550px" />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={require("../Components/Images/residences/vila11.webp")} width="100%" height="275px" />
                                <img src={require("../Components/Images/residences/vila12.png")} width="100%" height="275px" />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={require("../Components/Images/residences/vila13.jpg")} width="100%" height="183px" />
                                <img src={require("../Components/Images/residences/vila14.jpg")} width="100%" height="183px" />
                                <img src={require("../Components/Images/residences/vila15.jpg")} width="100%" height="183px" />
                            </div>
                        </div>
                    </div>
                    <p className='topic'>میزبان این اقامتگاه</p>
                    <div style={{ display: "inline-flex", flexDirection: "row", width: "100%", margin: "1rem auto", fontWeight: "bolder" }}>
                        <img src={require("../Components/Images/man.webp")} width="5%" style={{ borderRadius: "50%", marginLeft: "1rem" }} />
                        <p>حسین صادقی</p>
                    </div>
                    <div className='soon-reserve'>
                        رزروآنی
                        <img src={require("../Components/Images/thunder.png")} width="20px" />
                    </div>
                    <div className='good-host'>
                        میزبان مهمان نواز
                        <img src={require("../Components/Images/star.png")} width="20px" />
                    </div>
                    <Table tableItems={this.state.tableItems} />
                    <ReservationBox cost={300000} discountedCost={210000} onReserve={() => this.reservationModal.open()} />
                </div>
                <Footer />
                <Modal title="رزرو اقامتگاه" children="fff" ref={e => this.reservationModal = e}>
                    شما این اقامتگاه را رزرو کردید.
                </Modal>
            </>
        );
    }
}
