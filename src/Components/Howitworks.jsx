import React from "react";
import "../app.css";
import hic11 from '../images/material-symbols_no-meals-rounded.svg'
import hic12 from '../images/mdi_cursor-pointer.svg';
import hic13 from '../images/mdi_truck-delivery.svg';

export default function Howitworks() {
  return (
    <div>
      <div className="hiw">
        <div className="hi1">
          <h1>How it works?</h1>
        </div>
        <div className="hi2">
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="hi3">
            <div className="hic1">
                <img width="140px" height="140px" src={hic11} alt="" />
                <h2>Pick Meals</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Vel quod, unde repellendus ipsum i
                    usto saepe nulla soluta hic iste. Repellat eveniet mod
                    i ipsam deleniti q
                    uo adipisci recusandae ipsum dolores optio.</p>
            </div>

            <div className="hic1">
                <img width="140px" height="140px" src={hic12} alt="" />
                <h2>Pick Meals</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Vel quod, unde repellendus ipsum i
                    usto saepe nulla soluta hic iste. Repellat eveniet mod
                    i ipsam deleniti q
                    uo adipisci recusandae ipsum dolores optio.</p>
            </div><div className="hic1">
                <img width="140px" height="140px" src={hic13} alt="" />
                <h2>Pick Meals</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Vel quod, unde repellendus ipsum i
                    usto saepe nulla soluta hic iste. Repellat eveniet mod
                    i ipsam deleniti q
                    uo adipisci recusandae ipsum dolores optio.</p>
            </div>

        </div>
      </div>
    </div>
  );
}
