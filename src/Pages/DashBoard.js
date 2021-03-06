import React, { useState } from "react";
import Card from "../components/Card";
import "./Dashboard.css";
import Profile from "../../src/me.jpg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Styled, { ThemeProvider } from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";

// import Moda from "styled-react-modal";

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
  let [cost, setEnteredCost] = useState(0);

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

  // const ModalStyle = Modal.Styled`
  // background-color: turquoise;`;

  const Title = Styled.p`
  color: rgb(12, 10, 10);
  font-size: 10px;
  margin-top: 0px;`;

  const ProgressBarLi = Styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 70px;
    height: 70px;
    font-size: 12px;
    background-color:${(props) => props.theme.main};
    border-radius: 50%;
    float: left;
    margin-top: 11%;
  `;
  const BarLi = Styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 150px;
    height: 10px;
    background-color: ${(props) => props.theme.main};
    float: left;
    margin-top: 16.5%;
  `;

  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const addSession = () => {
    var LiStyle = {
      color: "blue",
      backgroundColor: "green",
    };

    setCardIndex(-1);
    setOpen(true);
  };
  let [theme, setTheme] = useState({ main: " rgba(211, 211, 211, 0.8);" });
  let [search, setSearch] = useState("");
  const handlSubmit = (index) => (e) => {
    e.preventDefault();
    onCloseModal(true);
    if (
      enteredName != "" &&
      enteredTitle != "" &&
      enteredDate != "" &&
      index != -1
    ) {
      info[index].enteredName = enteredName;
      info[index].enteredDate = enteredDate;
      info[index].enteredTitle = enteredTitle;
      info[index].cost = cost * 1;
      setEnteredInfo(info);
    } else {
      let newInfo = {
        enteredDate: enteredDate,
        enteredName: enteredName,
        enteredTitle: enteredTitle,
        cost: cost * 1,
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

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  let [info, setEnteredInfo] = useState([
    {
      enteredDate: "2020-12-21",
      enteredName: "Cody",
      enteredTitle: "First Title",
      cost: 10,
    },
    {
      enteredDate: "2020-12-28",
      enteredName: "Abdull",
      enteredTitle: "Second Title",
      cost: 20,
    },
    {
      enteredDate: "2020-12-29",
      enteredName: "Sheng",
      enteredTitle: "Third Title",
      cost: 60,
    },
  ]);

  const total = info.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore.cost,
    0
  );
  let [counter, setCounter] = useState(0);
  return (
    <div className="dashboard-grid-container">
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <p>Today's date: {date}</p>
        <ul>
          <ProgressBarLi theme={theme}>Step1</ProgressBarLi>
          <BarLi theme={theme}></BarLi>
          <ProgressBarLi theme={theme}>Step2</ProgressBarLi>
          <BarLi theme={theme}></BarLi>
          <ProgressBarLi theme={theme}>Step3</ProgressBarLi>
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
        <Modal open={open} onClose={onCloseModal} center>
          <div className="Modal">
            <h4>Enter Session Information</h4>
            <form onSubmit={handlSubmit(cardIndex)}>
              <label className="Label"> Name :</label>
              <input
                id="myInput"
                className="In"
                type="text"
                value={enteredName}
                onChange={handlChangeName}
              />
              <br />
              <label className="Label">Date :</label>
              <input
                id="myInput"
                className="In"
                style={{ margin: "10px 10px 10px 10px" }}
                type="date"
                value={enteredDate}
                onChange={handlChangeDate}
              />
              <br />
              <label className="Label"> Title :</label>
              <input
                id="myInput"
                className="In"
                style={{ margin: "10px 10px 10px 10px" }}
                type="text"
                value={enteredTitle}
                onChange={handlChangeTitle}
              />
              <br />
              <label className="Label"> Cost :</label>
              <input
                id="myInput"
                className="In"
                style={{ margin: "10px 10px 10px 10px" }}
                type="number"
                value={cost}
                onChange={(event) => {
                  setEnteredCost(event.target.value);
                }}
              />
              <br />
              <button className="buttonSaveModal" type="submit">
                Save
              </button>
            </form>
          </div>
        </Modal>
        <h3>Upcoming Sessions</h3>
        <button className="buttonAddSession" onClick={addSession}>
          Add Session
        </button>

        <SearchBar handleInput={handleInput} />

        {info
          .filter((card) => {
            return (
              card.enteredName.toLowerCase().includes(search.toLowerCase()) ||
              card.enteredTitle.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((member, index) => (
            <Card
              date={member.enteredDate}
              name={member.enteredName}
              title={member.enteredTitle}
              cost={member.cost}
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
                setTheme({ main: "green" });
                console.log(theme);
                setCardIndex(index);
                setOpen(true);
              }}
            />
          ))}
        <p> Total: {total}$ </p>
      </div>
    </div>
  );
}

export default Dashboard;
