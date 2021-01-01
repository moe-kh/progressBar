import React from "react";
import classes from "./Cards.css";

const card = (props) => (
  <React.Fragment>
    <main className="content">
      <div className="box">
        {" "}
        <p className="bottom_right">
          {props.date} <br />
        </p>
      </div>
      <div className="box">
        <p className="bottom_left">
          {" "}
          {props.name}
          <br />
        </p>
      </div>
      <div className="box">
        {" "}
        <p className="top_bold "> {props.title}</p>
      </div>
    </main>
    <br />
  </React.Fragment>
);

export default card;
