import React, { Component } from 'react';
import Header from "../Components/FixedElements/Header/index";
import Collections from '../Components/Complexes';
import Footer from '../Components/FixedElements/footer';
import "../Styles/shiraz.css";
import TextExpand from '../Components/textContainer';

const Style = {
  position: "sticky",
  top: "10%",
  background: "#ffffff8f",
  zIndex: "5",
}
class Shiraz extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (

      <>
        <Header
          history={this.props.history}
          selectedCity={'shiraz'}
          show={false}
        />
        <div className="shiraz-wrapper">
          <p className='topic' style={Style}>شیراز شهر راز</p>
          <p style={{ textAlign: "right" }}>شیراز در بخش مرکزی استان فارس، در ارتفاع ۱۴۸۶ متر از سطح دریا و در منطقهٔ کوهستانی زاگرس واقع شده و آب و هوای معتدلی دارد. این شهر از سمت غرب به کوه دراک، از سمت شمال به کوه‌های بمو، سبزپوشان، چهل‌مقام و باباکوهی (از رشته‌کوه‌های زاگرس) محدود شده‌است.طبق تاریخ ایران، چاپ دانشگاه کمبریج، «سکونت دایمی در محل شهر شیراز شاید به دوران ساسانی و حتی پیش از آن برسد. اما اولین اشاره‌های معتبر در مورد این شهر به اوایل دوران اسلامی بر می‌گردد.»   به نوشته دانشنامهٔ اسلامی نیز شیراز شهری است بناشده در دوران اسلامی در محلی که از زمان ساسانی یا احتمالاً پیش از آن سکونت‌گاه دایمی انسان بوده‌است.</p>
          <Collections collectionsData={collectionsData} show={false} />
          <img className='hotel-reservation' src={require("../Components/Images/hotel.png")} />
          <TextExpand text={Text} />
        </div>
        <Footer />
      </>
    );
  }
}

Text = "شیراز یکی از پنج شهر بزرگ ایران و مرکز استان فارس است.شیراز با زیبایی های فراوان و اماکن تاریخی و گردشگری بسیار همیشه یکی از مقاصد اصلی گردشگری در بین گردشگران ایرانی و خارجی بوده است.در این مطلب قصد داریم به بررسی به جنبه های مختلف شهر شیراز و تاریخچه ای از آن پبردازیمشواهد به دست آمده از کاوش هایی که با مجوز میراث فرهنگی و گردشگری در تپه پوستچی واقع در جنوب بلوار رحمت انجام شده حاکی از آن است که قدمت شهر شیراز به 6500 سال پیش می رسد. شیراز در طول تاریخ ایران زمین بارها به عنوان پایتخت انتخاب شده و نام آن در لوح های به دست آمده از تخت جمشید نیز وجود دارد. به همین دلیل این شهر بسیاری از آثار تاریخی کشورمان را در خود جای داده و هر ساله میزبان گردشگرانی از کشورمان و سایر نقاط جهان است.انواع صنایع دستی ،آبلیمو ،آبغوره ،مسقطی ،خاتم ، قالی ،نمد ،خراطی ،چرم ،گلیم ، گبه ،ترشی ،انار ،انجیر، حصیر، حنا ،زعفران ،منبت ،معرق ،جاجیم، سفال، قلم زنی ،سفیدآب ، کیسه حمام ،آویشن شیرازی ، گیوه شیرازی ،عرقیاتاز مهمترین این تولیدات که مناسب برای گردشگران می باشد عبارتند از :خاتم ،گبه ، گلیم ،گیوه ،آویشن ،عرقیات ،آبلیمو و آبغوره .  به علت تقلب در کسب و کار برخی از تولید کنندگان غیر بهداشتی توصیه می شود هنگام خرید آبلیمو و آبغوره و عرقیات از نوع سر بسته و پلمب شده و دارای تاریخ مصرف و در حد امکان از فروشندگان معتبر استفاده نمایند."


const collectionsData = [
  {
    id: 2,
    description: 'مکانهای تاریخی',
    url:require("../Components/Images/shiraz/Shiraz.jpg"),
    route: "shirazPlace",
  },
  {
    id: 3,
    description: 'غذاهای محلی ',
    url:require("../Components/Images/shiraz/shirazFood.jpg"),
    route: "shirazFood",
  },
  {
    id: 4,
    description: 'لباس های محلی',
    url:require("../Components/Images/shiraz/لباس.jpg"),
    route: "shirazDress",
  },
  {
    id: 5,
    description: 'بازی های محلی',
    url:require("../Components/Images/shiraz/بازی.jpg"),
    route: "shirazGame",
  },
  {
    id: 6,
    description: 'اقامتگاه ها',
    url:require("../Components/Images/shiraz/اقامتگاه.webp"),
    route: "shirazHotel",
  },
  {
    id: 7,
    description: 'مشاهیر',
    url:require("../Components/Images/shiraz/مشاهیر.jpg"),
    route: "shirazCelebrities",
  },
  {
    id: 8,
    description: 'زیارتگاه ها',
    url:require("../Components/Images/shiraz/شاهچراغ.jpg"),
    route: "shirazShrine",
  },
  {
    id: 10,
    description: 'آداب و رسوم',
    url:require("../Components/Images/shiraz/رسوم.jpg"),
    route: "shirazFee",
  },
];

export default Shiraz;
