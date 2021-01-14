import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Session from "./Pages/Session";
import Dashboard from "./Pages/DashBoard";

//import { ProgressBar, Step } from "react-step-progress-bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

// const info = [
//   { date: "2020-12-27", name: "Moe", title: "MyTitle" },
//   { date: "2020-12-28", name: "Abdull", title: "MyTitle" },
//   { date: "2020-12-29", name: "Sheng", title: "MyTitle" },
// ];

function App() {
  return (
    <Router>
      <div className="grid-container">
        <NavBar />
        <Route path="/session" exact component={Session} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
