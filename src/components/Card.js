import React from "react";
import classes from "./Cards.css";

const card = (props) => (
  <React.Fragment>
    <main className="content">
      <h1> {props.title}</h1>
      <p>
        {props.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.date} <br />
      </p>

      <p>Cost: {props.cost}$</p>

      <br />

      <button onClick={props.clicked}>Delete</button>

      <button onClick={props.edit}>Edit</button>
    </main>
    <div></div>
    <br />
  </React.Fragment>
);

export default card;
