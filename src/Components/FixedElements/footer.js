import React from 'react';
import '../../Styles/footer.css';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={Logo} />
        <div className="footer-row" style={{ fontWeight: "bold" }} >سفر دلچسب را با ایرانگرد تجربه کنید!!!</div>
      </div>
      <div className="column-two">
        <h3>شهرهای ایرانگرد</h3>
        <ul>
          <li>اصفهان، نصف جهان</li>
          <li>گیلان سرسیز</li>
          <li>مشهد مقدس</li>
          <Link
            to={{ pathname: `/cities/shiraz` }}
            className="link"
          >
            <li>شیرازخوش آب وهوا</li>
          </Link>
          <li>تهران بزرگ</li>
          <li>تبریزمتمدن</li>
          <li>+ده ها شهردیگر</li>

        </ul>
      </div>
      <div className="column-three">
        <h3>سوالات متداول</h3>
        <ul>
          <li>قوانین و مقررات </li>
          <li>قوانین و راهنمای تورها</li>
          <li>خط مشی کیفیت ایرانگرد</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>همین الان اپلیکیشن ایرانگرد را دانلود کنید.</h3>
        <div className="social-media-contact">
          <img
            src={require("../Images/twitter.png")}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={require("../Images/google-play.png")}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={require("../Images/bazaar-logo.png")}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={require("../Images/instagram.png")}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={require("../Images/phone.png")}
            className="social-connect"
            alt="Connect with us"
            style={{ width: '25px', paddingBottom: '2px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
