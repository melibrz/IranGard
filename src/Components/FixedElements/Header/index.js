import React, { Component } from 'react';
import Select from 'react-select';
import '../../../Styles/Header.css';
import Modal from "../../Modal/modal"
import { Link } from 'react-router-dom';
import ImageSlider from "./Slider"

class Header extends Component {
  state = {
    experience: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeExperience = event => this.setState({ experience: event.target.value });

  render() {
    const {
      backgroundImagesData,
      navigationData,
      selectedCity,
      history,
      show
    } = this.props;
    return (
      <React.Fragment>
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
          history={history}
          selectedCity={selectedCity}
          navigationData={navigationData}
        />
        {show &&
          <>
            <ImageSlider backgroundImagesData={backgroundImagesData} />
            <div className="search-bar-div">
              <div className="select-city">
                <i className="fas fa-map-marker" />
                <Searchbar
                  style={customStyles}
                  history={this.props.history}
                  selectedCity={this.props.selectedCity}
                />
              </div>
              <div className="search-input">
                <input
                  type="text"
                  placeholder="کجامیخوای بری؟"
                  onChange={this.changeExperience}
                  value={this.state.experience}
                />
                <img src={require("../../Images/magnifier.png")} width="15px" />
              </div>
              <Link
                to={{ pathname: `/cities/shiraz` }}
                className="link"
              >
                <button id="search">جستجو</button>
              </Link>
            </div>
          </>
        }
      </React.Fragment>
    );
  }
}

export class HeaderNav extends Component {
  state = {
    show: false,
  }
  open() {
    this.setState({ show: !this.state.show })
    this.loginModal.open();
  }
  close() {
    this.setState({ show: !this.state.show })
    this.loginModal.close();
  }
  render() {
    return (
      <div className="top-navbar">
        <div className="top-navbar--logo">
          <img src={require("../../Images/logo.png")} />
        </div>
        <div className="top-navbar--options">
          <div className="top-navbar--option">
            <img src={require("../../Images/heart.png")} width="20px" />
            <span>مورد علاقه ها</span>
          </div>
          <div className="top-navbar--option">
            <img src={require("../../Images/phone.png")} width="22px" />
            <span>دانلود اپلیکیشن</span>
          </div>
          <div className="top-navbar--option" onClick={() => this.setState({ show: !this.state.show })} >
            <img src={require("../../Images/person.png")} width="20px" />
            <span>ملیکابرزگر</span>
          </div>
        </div>
        {this.state.show &&
          <div className="menu" >
            <img src={require("../../Images/logout.png")} width="15px" />
            <span onClick={() => this.open()}>خروج</span>
          </div>
        }
        <Modal title="خروج از حساب کاربری" children="fff" ref={e => this.loginModal = e}>
          آیا میخواهید از حساب کربری خود خارج شوید؟
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "50%", margin: "1rem auto" }}>
            <button className='negative-btn' onClick={() => this.close()}>انصراف</button>
            <Link
              to={{ pathname: `/` }}
              className="link"
            >
              <button className='positive-btn' >خروج</button>
            </Link>
          </div>
        </Modal>
      </div>

    );
  }
}


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #80808021',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'right',
    width: "100%",
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    this.changeUrl(selectedOption.value);
  };

  changeUrl = url => {
    this.props.history.push(`/cities/${url}`);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedCity } = this.props;
    if (selectedCity) {
      return (
        <Select
          styles={this.props.style}
          placeholder={selectedCity}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="dropdown-select"
        />
      );
    } else {
      return (
        <Select
          styles={this.props.style}
          placeholder="شهر موردنظرتان را انتخاب کنید."
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="dropdown-select"
        />
      );
    }
  }
}

export default Header;
const options = [
  { value: 'shiraz', label: 'شیراز' },
  { value: 'booshehr', label: 'بوشهر' },
  { value: 'mashahd', label: 'مشهد' },
  { value: 'rasht', label: 'رشت' },
  { value: 'tehran', label: 'تهران' },
  { value: 'sari', label: 'ساری' },
  { value: 'tabriz', label: 'تبریز' },
  { value: 'yazd', label: 'یزد' },
  { value: 'sistan-baloochestan', label: 'سیستان و بلوچستان' },
  { value: 'orumieh', label: 'ارومیه' },
  { value: 'bandar-abbas', label: 'بندرعباس' },
  { value: 'lorestan', label: 'لرستان' },
  { value: 'kordestan', label: 'کردستان' }
];
