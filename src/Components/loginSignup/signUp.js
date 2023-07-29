import React from "react";
import "../../Styles/login.css"
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {

    render() {

        return (

            <div className="landing-page">
                {/* <BG image="Landing Page-normal.png" /> */}
                <div className="navbar">
                    <img src={require("../Images/logo.png")} />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "9%", margin: "1rem" }}>
                        <Link
                            to={{ pathname: `/login` }}
                            className="link"
                        >
                            <button className='login-btn'>ورود</button>
                        </Link>
                        <Link
                            to={{ pathname: `/signUp` }}
                            className="link"
                        >
                            <button className='signup-btn'>ثبت نام</button>
                        </Link>
                    </div>
                </div>
                <div className="login-page">
                    <p className="topic" style={{ margin: "auto", marginBottom: "1rem" }}>ثبت نام</p>
                    <input className="input" type="text" label="نام کاربری" placeholder="ایمیل یا تلفن همراه" />
                    <input className="input" type="text" label="نام کاربری" placeholder="نام کاربری" />
                    <input className="input" type="password" label="رمزعبور" placeholder="رمز عبور" />
                    <input className="input" type="password" label="رمزعبور" placeholder="تکراررمز عبور" />
                    <div style={{ textAlign: "right", color: "gray", fontSize: "13px", fontWeight: "bold", display: "inline-flex", margin: "1rem 0" }}>
                        <input type="checkbox" />
                        <span>
                            اینجانب تمامی شرایط و ضوابط ایرانگرد را مطالعه کرده و میپذیرم.
                        </span>
                    </div>
                    <div className="btn-container">
                        <Link
                            to={{ pathname: `/` }}
                            className="link"
                        >
                            <button className="negative-btn">انصراف</button>
                        </Link>
                        <Link
                            to={{ pathname: `/home` }}
                            className="link"
                        >
                            <button className="positive-btn">ورود</button>
                        </Link>
                    </div>

                </div>
            </div>



        )
    }
}