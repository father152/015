import React from "react";
import { Link } from "react-router-dom";
import "./header.css"


function Header() {
  return (
    <div className="header">
      
        <div className="list-header">
          <ul>
           <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT AS</Link>
            </li>
            <li>
              <Link to="/history">HISTORY</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      
    </div>
  );
}

export { Header };
