import React from "react";

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
              <button>Past</button>
            </li>
            <li className="menu-item">
              <button>History</button>
            </li>
            <li className="menu-item">
              <button>Future</button>
            </li>
          </ul>
        ) : null}
      </div>



      
    </div>
  );
}
export { Contact };
