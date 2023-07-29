import React, { Component } from 'react';
import Header from "../Components/FixedElements/Header/index";
import Suggestions from '../Components/CustomSlider';
import Collections from '../Components/Complexes';
import Footer from '../Components/FixedElements/footer';
import "../Styles/main-home.css"
import TextExpand from '../Components/textContainer';
import Categories from '../Components/categories';
import PopularCities from '../Components/PopularCities';
import Residences from '../Components/Residences';

class MainHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          show={true}
        />
        <p style={{ fontWeight: "bold" }}>سفر دلچسب را با ایرانگرد تجربه کنید!!!</p>
        <PopularCities />
        <Categories Category={Categroy} topic={'دنبال چه نوع منطقه ای هستی؟'} />
        <Collections collectionsData={collectionsData} show={true} />
        <Residences topic="اجاره ویلا در شهرهای پرطرفدار" />
        <Suggestions Suggestions={Suggestion} topic={' نظرات و پیشنهادات کاربران:'} />
        <TextExpand text={Text} />
        <Footer />
      </div>
    );
  }
}
const Text = "اگر هنوز فکر می‌کنید که ایرانگردی در عصر دلار بالای ۳۰ هزار تومان، بی‌فایده است، باید تفکر خود را با واقعیت تطبیق دهید. میلیون‌ها سفر در طول سال در ایران صورت می‌گیرد. با ایرانگردی، پتانسیل‌ها را شناسایی کرده و برای کسب درآمد از میلیون‌ها مسافر داخلی و خارجی ایران، برنامه‌ریزی کنید. ایرانگردی، فرصت‌آفرین است و شما را با ظرفیت‌های فرهنگی، هنری، تاریخی و اکوسیستم طبیعی ایران پهناور آشنا می‌کند. ایرانگردی ارزان، امکان آشنایی با فرهنگ اقوام ایرانی را برای شما به ارمغان آورده و می‌توانید با پتانسیل‌های فرهنگی و تولیدی و خدماتی هزاران شهر ایران آشنا شده و از آن برای صادرات محصولات فرهنگی و هنری و تاریخی کشور بر اساس قوانین کشور، استفاده کنید. ایرانگردی، اقتصاد ملی به خصوص اقتصاد روستاها ومناطق ‌کم‌تر توسعه یافته را تقویت کرده و عاملی است که در مقابله با مهاجرت روستاها به شهرها، کمک شایانی دارد. در عصر پسا کرونا، رونق گردشگری ایران به عنوان ابزاری برای درآمدزایی ارزی کشور، یکی از اولویت‌های کشور است و این فرصت خوبی برای سرمایه‌گذاران در صنعت توریسم ایران در قرن بیست و یکم خواهد بود. غول‌های سرمایه‌گذاری گردشگری ایران که بعضا در بازار بورس و فرابورس ایران، سهام آن‌‌ها خرید و فروش می‌‌شود، انتخاب‌های خوبی برای علاقمندان به مشارکت در طرح‌های سرمایه‌گذاری پایین‌دستی و بالادستی صنعت توریسم در ۳۱ استان کشور است. بسیاری از افرادی که هم‌اکنون در بخش فرآوری و بسته‌بندی موادغذایی از جمله خشکبار و میوه‌های خشک شده و غیره فعال هستند، ایده‌هایی الهام‌بخش از برنامه‌های ایرانگردی خود داشتند که در نهایت، با شناخت ظرفیت‌های استان‌ها، برنامه‌های ثروت‌آفرینی را تدوین و عملیاتی کردند. گردشگری روستایی در ایران، گردشگری سلامت در ایران، گردشگری ورزشی در ایران و گردشگری سبز، بخشی از ظرفیت‌های فوق‌العاده ممتاز صنعت توریسم ایران است که در قرن بیست و یکم و در روزگار پسا کرونا و پسا تحریم، در کانون توجه توریست‌های بین‌المللی و سرمایه‌گذاران داخلی و خارجی قرار خواهد گرفت. لذا به این بخش‌ها به عنوان فرصت‌های سرمایه‌گذاری دقت کنید.اگر به دلیل بالا، قصد ایرانگردی داشتید، به منظور اقامتی راحت و ارزان، از خدمات رزرو آنلاین هتل سفرمارکت استفاده کنید تا با خیالی آسوده و ارزان سفر کنید."
const backgroundImagesData = [
  {
    id: 1,
    url:
      `${require('../Components/Images/sliderpic1.jpg')}`
  },
  {
    id: 2,
    url:
      `${require('../Components/Images/sliderpic2.jpg')}`
  },
  {
    id: 3,
    url:
      `${require('../Components/Images/silderpic3.jpg')}`
  },
  {
    id: 4,
    url:
      `${require('../Components/Images/sliderpic4.jpg')}`
  },
  {
    id: 5,
    url:
      `${require('../Components/Images/sliderpic5.jpg')}`
  }
];
const Suggestion = [
  { name: "محمداسدی", city: "آذربایجان‌غربی", description: 'از ارومیه تا سردشت و بازرگان، آذربایجان‌غربی یکی از مقصدهای ممتاز گردشگری شمال غرب کشور است.ما در سفر سه روزه مان به این استان کلکسیونی از اقوام و زبان‌ها را در این استان در کنار غذاها و نوشیدنی های خوشمزه و صنایع دستی کم‌نظیر شاهد بودیم', places: "آبگرم معدنی در شوط، آرامگاه شمس تبریزی درخوی، مسجد جامع درارومیه، کلیسای ننه مریم" },
  { name: "رضا نایب", city: "البرز", description: ' البرز، نزدیک تهران است به همین خاطر جای خوبی برای تفریح روزهای مابین هفته است. با مترو و اتوبوس و خودرو شخصی هم می‌توانیم به راحتی عازم این استان شده و از روستاها و شهرستان‌های آن دیدن کنیم. البرز، مقصد گردشگری ما تهرانی ها است', places: "جاده چالوس، طالقان، سد امیرکبیر، پیست دیزین، روستای برغانوستای ورده، کاروانسرای شاه‌عباسی" },
  { name: "فهیمه نوری", city: "زنجان", description: 'زنجان، جایی بود که ما را خوردن غذاهای سنتی خوش طعم و مزه دعوت کرد. شیرینی‌های محلی‌اش معروف است. صنایع دستی‌اش، از ملیله تا چاروق و چاقو، آوازه خاص و عام است. جایی است که زنبورداری و مرغداری و باغداری‌اش، بخشی از غذای پایتخت را تامین می‌کند. چشمه‌های آب‌گرم عالی داشته و رودخانه و آبشار و تالاب‌هایش، فضایی دوست داشتنی برای طبیعت‌گردهای مشکل‌پسند است', places: "گنبد سلطانیه، بازار زنجان، معبد داش کسن، عمارت دارایی، عمارت ذوالفقاری" },
  { name: "نقی معمولی", city: "قزوین", description: 'قزوین، مملو از خانه‌های قدیمی است.یعد از سفرمان قزوین مقصد محبوب ما شد و حمام قجر و حمام بلور خانه و آب انبارهایش، مشتریان زیادی دارد. اگر عازم این دیار کهن شدید، گلیم‌بافی، موج‌بافی و نگارگری‌هایش قزوینی‌ها را در نظر داشته باشید', places: " قلعه سمیران، المودت" },
  { name: "سیما حسینی", city: "قم", description: 'حرم حضرت فاطمه معصومه (س)، مقصد اصلی گردشگری ما بود.اگر عاشق روستاگردی هستید، روستای وشنوه، فردو، خاوه را در نظر داشته باشید', places: "مسجد مقدس جمکران، مسجد جامع قم، مقابر باغ گنبد سبز، تیمچه بزرگ قم" },
  { name: "لیلا فکوریان", city: "کردستان", description: 'کردستان، یکی از بهترین مقصدهای گردشگری ایران است. دشت‌های پراکنده و رشته کوه‌های زاگرس میانی، انتخاب خوبی این دیار زیبا را به مقصد طبیعت گردی تبدیل کرده و ۱۰ شهرستانش، از سنندج تا بیجار، ظرفیت‌های گردشگری فراوان در چهار فصل سال دارد', places: "پارک جنگلی آبیدز، منطقه اورامان، روستای پلکانی پالنگان، رودخانه سقز، آبشار و چشمه پل، سراب قروه، آبشار کویله" },
];
const Categroy = [
  { name: "مناطق ساحلی", svg: `${require('../Components/Images/beach.png')}` },
  { name: "مناطق کویری", svg: `${require('../Components/Images/desert.png')}` },
  { name: "مناطق جنگلی", svg: `${require('../Components/Images/forest.png')}` },
  { name: "مناطق کوهستانی", svg: `${require('../Components/Images/mountain.png')}` },
  { name: "مناطق زیارتی", svg: `${require('../Components/Images/holy.png')}` },
  { name: "مناطق بومگردی", svg: `${require('../Components/Images/boomgardi.png')}` },
]

const collectionsData = [
  {
    id: 1,
    description: 'مشهد',
    url: require("../Components/Images/travel-to-mashhad.jpg")
  },
  {
    id: 2,
    description: 'شیراز',
    url: require("../Components/Images/shiraz/pasargad.jpg"),
    route: "cities/shiraz"
  },
  {
    id: 3,
    description: 'تهران',
    url: require("../Components/Images/تهران.webp")
  },
  {
    id: 4,
    description: 'یزد',
    url: require("../Components/Images/یزد.webp")
  },
  {
    id: 5,
    description: 'کاشان',
    url: require("../Components/Images/کاشان.jpg")
  },
  {
    id: 6,
    description: 'اصفهان',
    url: require("../Components/Images/Si-o-se-Pol.jpg")
  },
  {
    id: 7,
    description: 'گیلان',
    url: require("../Components/Images/گیلان.jpg")
  },
  {
    id: 8,
    description: 'کیش',
    url: require("../Components/Images/کیش.jpg")
  },
  {
    id: 9,
    description: 'شهرکرد',
    url: require("../Components/Images/شهرکرد.jpg")
  },
  {
    id: 10,
    description: 'همدان',
    url: require("../Components/Images/آرامگاه+بوعلی+سینا.jpg")
  },
  {
    id: 11,
    description: 'مازندران',
    url: require("../Components/Images/مازندران.jpg")
  },
  {
    id: 12,
    description: 'بوشهر',
    url: require("../Components/Images/بوشهر.jpg")
  },
];

export default MainHome;
