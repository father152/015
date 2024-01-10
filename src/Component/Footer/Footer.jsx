import React from "react";
import "./footer.css";
import telegram from "../images/free-icon-telegram-2111646.png";
import facebook from "../images/free-icon-facebook-174848.png";
import twitter from "../images/free-icon-twitter-4494477.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h3>All Rigth Reserved &#169; 2023</h3>
      <div className="social">
        <ul>
          <li>
            <Link to="https://twitter.com" target="_blank">
              <img src={twitter} alt=""></img>
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/?locale=uk_UA" target="_blank">
              <img src={facebook} alt=""></img>
            </Link>
          </li>
          <li>
            <Link to="https://web.telegram.org/k/" target="_blank">
              <img src={telegram} alt=""></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Footer };
