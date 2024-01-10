import React from "react";
import "./footer.css";
import telegram from "../images/free-icon-telegram-2111646.png"
import facebook from "../images/free-icon-facebook-174848.png"
import twitter from "../images/free-icon-twitter-4494477.png"


function Footer() {
  return (
    <div className="footer">
      <h3>All Rigth Reserved &#169; 2023</h3>
      <div className="social">
      <ul>
      <li><img src= {twitter} alt=""></img></li>
      <li><img src= {facebook} alt=""></img></li>
      <li><img src= {telegram} alt=""></img></li>
      </ul>
      </div>
    </div>
  );
}
export { Footer };
