import React from "react";
import "./contact.css"


function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    
    <div className="contact">
      <h2>Contact</h2>

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




    </div>
  );
}
export { Contact };
