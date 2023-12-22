import React from "react";
import picture from "../images/free-png.ru-45.png";
import "./header.css"
import { Link } from "react-router-dom";



function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open)};
  
    return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={picture} alt=""></img></Link>
        </div>
        <div className="list-header">
        
      

      <div className="dropdown">
        <button onClick={handleOpen}>ABOUT AS</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              Past
            </li>
            <li className="menu-item">
              History
            </li>
            <li className="menu-item">
              Future
            </li>
          </ul>
        ) : null}
          </div>
          <div className="dropdown2">
          <button onClick={handleOpen}>ABOUT AS</button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                Past
              </li>
              <li className="menu-item">
                History
              </li>
              <li className="menu-item">
                Future
              </li>
            </ul>
          ) : null}
            </div>
            <div className="dropdown3">
            <button onClick={handleOpen}>ABOUT AS</button>
            {open ? (
              <ul className="menu">
                <li className="menu-item">
                  Past
                </li>
                <li className="menu-item">
                  History
                </li>
                <li className="menu-item">
                  Future
                </li>
              </ul>
            ) : null}
              </div>
              <div className="dropdown4">
              <button onClick={handleOpen}>ABOUT AS</button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    Past
                  </li>
                  <li className="menu-item">
                    History
                  </li>
                  <li className="menu-item">
                    Future
                  </li>
                </ul>
              ) : null}
                </div>





        
        </div>
      </div>
    </div>
  );
}

export {Header}
