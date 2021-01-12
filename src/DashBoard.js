import React, { useState } from "react";
import Card from "./Card";
import "./Dashboard.css";
import Profile from "./me.jpg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Styled from "styled-components";

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
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  let [enteredName, setEnteredName] = useState("");
  let [cardIndex, setCardIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const CardStyle = Styled.div`
  height: 200px;
  margin-left: 20px;
  max-width: 300px;

  flex-direction: column;
  position: relative;

  border-radius: 19px 0px 0px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-image: url("https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg");
  background-size: 100% 65px;
  background-repeat: no-repeat;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
  
  `;

  const Title = Styled.p`
  color: rgb(12, 10, 10);
  font-size: 10px;
  margin-top: 0px;`;
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const addSession = () => {
    setCardIndex(-1);
    setOpen(true);
  };

  const handlSubmit = (index) => (e) => {
    e.preventDefault();
    onCloseModal(true);
    if (
      enteredName != "" &&
      enteredTitle != "" &&
      setEnteredDate != "" &&
      index != -1
    ) {
      info[index].enteredName = enteredName;
      info[index].enteredDate = enteredDate;
      info[index].enteredTitle = enteredTitle;

      setEnteredInfo(info);
    } else {
      console.log(info);

      console.log(enteredName);

      let newInfo = {
        enteredDate: enteredDate,
        enteredName: enteredName,
        enteredTitle: enteredTitle,
      };
      info.push(newInfo);
      setEnteredInfo(info);
    }
  };
  function handlChangeName(event) {
    setEnteredName(event.target.value);
  }
  function handlChangeDate(event) {
    setEnteredDate(event.target.value);
  }
  function handlChangeTitle(event) {
    setEnteredTitle(event.target.value);
  }

  let [info, setEnteredInfo] = useState([
    {
      enteredDate: "2020-12-21",
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
      <div style={{ marginLeft: "60px", marginRight: "auto" }}>
        <button className="buttonAddSession" onClick={addSession}>
          Add Session
        </button>
        <ul>
          <li className="ProgBar">Step1</li>
          <li className="Bar"></li>
          <li className="ProgBar">Step2</li>
          <li className="Bar"></li>
          <li className="ProgBar">Step3</li>
        </ul>

        <br />
        <div className="dashboard-grid-profiles">
          <CardStyle>
            <img className="property-image" src={Profile} alt="Profile" />
            <h1>Mohamad Khaled</h1>
            <Title>CEO & Founder, Example</Title>
            <p>SAIT</p>
          </CardStyle>

          <CardStyle>
            <img className="property-image" src={Profile} alt="Profile" />
            <h1>John Doe</h1>
            <Title>CEO & Founder, Example</Title>
            <p>SAIT</p>
          </CardStyle>
          <CardStyle>
            <img className="property-image" src={Profile} alt="Profile" />
            <h1>John Doe</h1>
            <Title>CEO & Founder, Example</Title>
            <p>SAIT</p>
          </CardStyle>
          <CardStyle>
            <img className="property-image" src={Profile} alt="Profile" />
            <h1>Omar Dalli</h1>
            <Title>CEO & Founder, Example</Title>
            <p>SAIT</p>
          </CardStyle>
        </div>
      </div>
      <div>
        <Modal
          style={{ backgroundColor: "red" }}
          open={open}
          onClose={onCloseModal}
          center
        >
          <form onSubmit={handlSubmit(cardIndex)}>
            Name :
            <input
              style={{ margin: "10px 10px 10px 10px" }}
              type="text"
              value={enteredName}
              onChange={handlChangeName}
            />
            <br />
            Date :
            <input
              style={{ margin: "10px 10px 10px 10px" }}
              type="date"
              value={enteredDate}
              onChange={handlChangeDate}
            />
            <br />
            Title :
            <input
              style={{ margin: "10px 10px 10px 10px" }}
              type="text"
              value={enteredTitle}
              onChange={handlChangeTitle}
            />
            <br />
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
              setCardIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
