import React from "react";
import "./Card.css";
import Ccard from "./Ccard";

function Card() {
  return (
    // < className="rightside">
    <div className="card">
      <div className="card-body">
        <div className="leftimage">
          <img
            src="https://drive.google.com/uc?id=1RcLbdolvX_MjCt8utSCwXM0V1IcvQr5w"
            alt=""
          />
        </div>
        <div className="right5">
          <h4>Any Any Doubts </h4>
          <ul>
            <li> Talk to our mentors </li>
            <li>Get expert Guidance</li>
            <li>Talk to our mentors</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <button className="btn btn-white">
          Book your free Mentorship session now
        </button>
      </div>
  </div>


  );
}
export default Card;