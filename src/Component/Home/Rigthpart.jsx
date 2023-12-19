import React from 'react';
import { Link } from "react-router-dom";
import { SiOpenstreetmap } from "react-icons/si";



function Rigthpart(props) {
    return (
        <div className="rigthpart">
      <div className="list">
        <span>TERRAIN</span>
      <ul className='list-rigthpart'>
          <li>
            <Link to="/obolon"><SiOpenstreetmap /> OBOLON</Link>
          </li>
          <li>
            <Link to="/gora"><SiOpenstreetmap /> GORA </Link>
          </li>
          <li>
            <Link to="/podil"><SiOpenstreetmap /> PODIL</Link>
          </li>
          <li>
            <Link to="/factory"><SiOpenstreetmap /> FACTORY</Link>
          </li>
        </ul>
      </div>
    </div>
    );
}

export  {Rigthpart};