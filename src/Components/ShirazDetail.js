import React from "react"
import Header from "../Components/FixedElements/Header/index"
import Footer from "./FixedElements/footer";
import "../Styles/shiraz.css"
export default class ShirazDetail extends React.Component {
    render() {
        const { options } = this.props;
        return (
            <>
                <Header
                    selectedCity={'shiraz'}
                    show={false}
                />
                <div className="detail-options">
                    {options.map((option, indx) => {
                        return (
                            <div className="detail-option">
                                <p className="topic">{option.topic}</p>
                                <img src={option.img} width="50%" style={{maxHeight:"450px"}}/>
                                <p className="description">{option.description}</p>
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </>
        )
    }
}