import React from "react";
import "../app.css";
import leftimg from "../images/About Page Banner Image Background Removed 1.svg";
import leftbg from "../images/About Section Background.svg";
import playbtn from "../images/material-symbols_play-circle-rounded.svg"

export default function About() {
  return (
    <div>
        <img src={leftbg} className="leftbg" alt="" />
      <div className="About">
        <div className="aleft">
          <img src={leftimg} alt="" />
        </div>
        <div className="aright">
          <h2>Food Is An Important Part Of A Balanced Diet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p>
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="arb">
            <button className="arb1">Learn More</button>
            <a href="" style="text-decoration:none;align-text:center;"><img src={playbtn} alt="" />Watch</a>
          </div>
        </div>
      </div>
    </div>
  );
}
