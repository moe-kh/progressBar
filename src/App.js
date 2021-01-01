import "./App.css";
import NavBar from "./NavBar";
import Card from "./Card";
import Session from "./Session";
//import { ProgressBar, Step } from "react-step-progress-bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const info = [
  { date: "2020-12-27", name: "Moe", title: "MyTitle" },
  { date: "2020-12-28", name: "Abdull", title: "MyTitle" },
  { date: "2020-12-29", name: "Sheng", title: "MyTitle" },
];

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header>
          <NavBar />
        </header>
        <div>
          <ui>
            <li className="ProgBar">Step1</li>
            <li className="ProgBar">Step2</li>
            <li className="ProgBar">Step3</li>
          </ui>
        </div>

        <div>
          {info.map((member) => (
            <Card date={member.date} name={member.name} title={member.title} />
          ))}
        </div>
      </div>
      <Route path="/session" component={Session} />
    </Router>
  );
}

export default App;
