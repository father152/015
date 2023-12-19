import React from "react";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

function Leftpart() {
  return (
    <div className="leftpart">
      <div className="list">
        <span>REGION</span>
      <ul className='list-leftpart'>
          <li>
            <Link to="/kiyv"> <FaHouse /> KIYV</Link>
          </li>
          <li>
            <Link to="/kharkiv"><FaHouse /> KHARKIV </Link>
          </li>
          <li>
            <Link to="/poltava"><FaHouse /> POLTAVA</Link>
          </li>
          <li>
            <Link to="/sumy"><FaHouse /> SUMY</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Leftpart };
