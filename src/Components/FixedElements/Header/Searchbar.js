import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const options = [
  { value: 'shiraz', label: 'shiraz' },
  { value: 'بوشهر', label: 'بوشهر' },
  { value: 'مشهد', label: 'مشهد' },
  { value: 'رشت', label: 'رشت' },
  { value: 'تهران', label: 'تهران' },
  { value: 'ساری', label: 'ساری' },
  { value: 'تبریز', label: 'تبریز' },
  { value: 'یزد', label: 'یزد' },
  { value: 'سیستان و بلوچستان', label: 'سیستان و بلوچستان' },
  { value: 'ارومیه', label: 'ارومیه' },
  { value: 'بندرعباس', label: 'بندرعباس' },
  { value: 'لرستان', label: 'لرستان' },
  { value: 'کردستان', label: 'کردستان' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
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
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="شهر موردنطرتان را انتخاب کنید."
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-input" />
        <Link
            to={{ pathname: `/cities/shiraz` }}
            className="link"
          >
        <button id="search">جستجو</button>
        </Link>
      </div>
    );
  }
}

export default Searchbar;
