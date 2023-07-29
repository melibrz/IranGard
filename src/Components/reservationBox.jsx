

import React from "react";
import "../Styles/reservationBox.css"
import "../Styles/popular-cities.css"
import Modal from "./Modal/modal";

export default class ReservationBox extends React.Component {
    state = {
        person: 0,
        day: 0
    };

    Add = (type) => {
        if (type == "day")
            this.setState({ day: this.state.day + 1 })
        else
            this.setState({ person: this.state.person + 1 })
    }

    Decrease = (type) => {
        if (type == "day")
            this.setState({ day: this.state.day - 1 })

        else
            this.setState({ person: this.state.person - 1 })

        if (this.state.day < 1)
            this.setState({ day: 0 })
        if (this.state.person < 1)
            this.setState({ person: 0 })


    }
    render() {

        const { cost, discountedCost } = this.props;
        return (
            <div className="reservation-box">
                <div className="reservation-cost">
                    <p style={{ color: "gray" }}>قیمت هر شب از</p>
                    <p >
                        <span style={{ textDecorationLine: "line-through", color: "gray" }}>{cost}</span>
                        <span >{discountedCost}</span>
                        <span>تومان</span>
                    </p>
                </div>
                <div className="reservation-cost">
                    <p>تعداد نفرات</p>
                    <p className="add-minus-section">
                        <img src={require("../Components/Images/add.png")} onClick={() => this.Add("person")} width="20px" height="20px" />
                        {this.state.person}
                        <img src={require("../Components/Images/minus.png")} onClick={() => this.Decrease("person")} width="20px" height="20px" />
                    </p>
                </div>
                <div className="reservation-cost">
                    <p>تعداد روز استقرار</p>
                    <p className="add-minus-section">
                        <img src={require("../Components/Images/add.png")} onClick={() => this.Add("day")} width="20px" height="20px" />
                        {this.state.day}
                        <img src={require("../Components/Images/minus.png")} onClick={() => this.Decrease("day")} width="20px" height="20px" />
                    </p>
                </div>
                <div className="reservation-cost" >
                    <p style={{ color: "gray" }}> قیمت نهایی با تخفیف</p>
                    <p>
                        <span >{discountedCost * this.state.day}</span>
                        <span style={{ textDecorationLine: "line-through", color: "gray" }}>{cost * this.state.day}</span>
                        <span>تومان</span>
                    </p>
                </div>
                <button className='reserve-btn' onClick={() => this.props.onReserve()}>رزرو کن</button>

            </div>
        )
    }
}