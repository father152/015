import React from "react";
import picture from "../images/free-png.ru-45.png";
import "./header.css"
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={picture} alt=""></img></Link>
        </div>
        <div className="list-header">
        <ul>
       <li><Link to='/about'>About As</Link></li>
       <li><Link to='/history'>History</Link></li>
       <li><Link to='/portfolio'>Portfolio</Link></li>
       <li><Link to='/contact'>Contact</Link></li>
                </ul>
        </div>
      </div>
    </div>
  );
}
export { Header };
