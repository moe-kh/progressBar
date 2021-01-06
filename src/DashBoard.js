import React, { useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Session from "./Session";
import "./Dashboard.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//import { ProgressBar, Step } from "react-step-progress-bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { render } from "@testing-library/react";

// const deleteCard = () => {
//   alert("here");
//   setEnteredDate = "";
//   setEnteredName = "";
//   setEnteredTitle = "";
// };

function Dashboard() {
  //   let [enteredTitle, setEnteredTitle] = useState("");
  //   let [enteredDate, setEnteredDate] = useState("");
  let [enteredName, setEnteredName] = useState("");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handlSubmit = (event) => {
    event.preventDefault();
    onCloseModal(true);
    info.enteredName = event.target.value;
    let newInfo = [...info];
    newInfo.enteredName = enteredName;

    setEnteredInfo(newInfo);
    console.log(newInfo.enteredName);
    console.log(enteredName);

    // setEnteredInfo(enteredName);
  };
  function handlChange(event) {
    setEnteredName(event.target.value);
  }
  let [info, setEnteredInfo] = useState([
    {
      enteredDate: "2020-12-27",
      enteredName: "Cody",
      enteredTitle: "MyTitle",
    },
    {
      enteredDate: "2020-12-28",
      enteredName: "Abdull",
      enteredTitle: "MyTitle",
    },
    {
      enteredDate: "2020-12-29",
      enteredName: "Sheng",
      enteredTitle: "MyTitle",
    },
  ]);
  let [counter, setCounter] = useState(0);

  return (
    <div className="dashboard-grid-container">
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <ul>
          <li className="ProgBar">Step1</li>
          <li className="Bar"></li>
          <li className="ProgBar">Step2</li>
          <li className="Bar"></li>
          <li className="ProgBar">Step3</li>
        </ul>
      </div>

      <div>
        <Modal open={open} center>
          <form onSubmit={handlSubmit}>
            Name :
            <input type="text" value={enteredName} onChange={handlChange} />
            <button type="submit">Save</button>
          </form>
        </Modal>
        <h3>Upcoming Sessions</h3>
        {info.map((member, index) => (
          <Card
            date={member.enteredDate}
            name={member.enteredName}
            title={member.enteredTitle}
            key={index}
            clicked={() => {
              //   alert("here");
              setCounter(counter + 1);
              console.log(counter);
              console.log(index);
              console.log(info);
              delete info[index];

              //  setEnteredInfo(newInfo);
              setEnteredInfo(info);
              console.log(info);
              //   setEnteredInfo(info);
            }}
            edit={() => {
              setOpen(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
