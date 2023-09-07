import "../featured/Featured.css";
import React from "react";

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/600x600/972602.jpg?k=3c33b4dfcf76b7f7059b6c292d484a266e2ea1109eb4cd50cc7b1f16d1037628&o='
          alt='brussel'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Brussel</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o='
          alt='Parijs'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Parijs</h1>
          <h2>521 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/600x600/968210.jpg?k=cfa9bb22d18a0a3c717f72cb0b6b3d1b22d28610cf83246aad1050ca6c541efb&o='
          alt='Antwerpen'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Antwerpen</h1>
          <h2>69 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
