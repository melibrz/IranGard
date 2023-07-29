import React from "react"
import "../Styles/landing.css"
import Cube from "../Components/cube/cube";
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
   open() {
      this.loginModal.open();
   }
   render() {
      return (
         <div className="landing-page">
            {/* <BG image="Landing Page-normal.png" /> */}
            <div className="navbar">
               <img src={require("../Components/Images/logo.png")} />
               <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "9%", margin: "1rem" }}>
                  <Link
                     to={{ pathname: `/login` }}
                     className="link"
                  >
                     <button className='login-btn' >ورود</button>
                  </Link>
                  <Link
                     to={{ pathname: `/signUp` }}
                     className="link"
                  >
                  <button className='signup-btn'>ثبت نام</button>
                  </Link>
               </div>
            </div>
            <div className="landing-content">
               <div className="text-content">
                  <p className="nav-topic">همراه ما با برنامه ایرانو بگردو بچرخ و تفریح کن!</p>
                  <p style={{ width: "80%" }}>
                     {description}
                  </p>
                  <b>با ایرانگرد، به دنبال یافتن بهترین‌های گردشگری در ایران باشید.</b>
               </div>
               <Cube />
            </div>
         </div>
      )
   }
}


const description = "سایت ایرانگرد که با هدف تبلیغ مکان‌های گردشگری ایران تاسیس شده است. ما با ارائه اطلاعات دقیق و کاربردی، به شما کمک می‌کنیم تا بهترین تجربه را در سفرهای خود داشته باشید. در ایرانگرد، می‌توانید از جمله خدمات  معرفی جاذبه‌های گردشگری: با مشاهده صفحات معرفی جاذبه‌های گردشگری مختلف، با جزئیات بیشتری درباره مکان‌های مختلف آشنا شوید و برنامه سفر خود را با دقت بیشتری تنظیم کنید. با جاذبه ها و غذاهاوادابورسوم استان ها و شهرهای مختلف ایران آشناشوید و با مطالعه مقالات راهنمای سفر، از نکات کاربردی و ضروری برای سفر به ایران آگاه شوید و بهترین تجربه را در سفر خود داشته باشید."