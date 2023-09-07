import "../mailList/MailList.css";
import React from "react";

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className='mailDesc'>
        Sign up, and we'll send you the best deals.
      </span>

      <div className='mailInputContainer'>
        <input type='text' placeholder='example@gmail.com' />
        <button>Login</button>
      </div>
    </div>
  );
};

export default MailList;
