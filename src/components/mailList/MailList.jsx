import "./MailList.css";
import React from "react";

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Bespaar tijd, bespaar geld!</h1>
      <span className='mailDesc'>
        Meld je aan en we sturen je de beste deals
      </span>

      <div className='mailInputContainer'>
        <input type='text' placeholder='uw email adres' />
        <button>aanmelden</button>
      </div>
    </div>
  );
};

export default MailList;
