import "./FeaturedProperties.css";
import React from "react";

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
          alt='Aparthotel Stare Miasto'
          className='fpImg'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Oude Stad,Polen, Krakow</span>
        <span className='fpPrice'>Starting from $108</span>
        <div className='fpRating'>
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o='
          alt='Aparthotel Stare Miasto'
          className='fpImg'
        />
        <span className='fpName'>7Seasoons Apartments Budapest</span>
        <span className='fpCity'>06. Terezvaros, Hongarije, Budapest</span>
        <span className='fpPrice'>Starting from $131</span>
        <div className='fpRating'>
          <button>9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o='
          alt='Aparthotel Stare Miasto'
          className='fpImg'
        />
        <span className='fpName'>Numa | Vita Apartments</span>
        <span className='fpCity'>Fortezza da Basso, Italie, Florence</span>
        <span className='fpPrice'>Starting from $306</span>
        <div className='fpRating'>
          <button>9.4</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
