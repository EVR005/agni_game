import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import Dummy from "./Components/dummy";
import Navbar from "./Components/navbar";
import Items from "./Components/items";
import Comp1 from "./Components/comp1";
import Comp2 from "./Components/Comp2";
import Collections from "./Components/collections";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Collections />}></Route>
          <Route path="/comp1" element={<Comp1 />}></Route>
          <Route path="/comp2" element={<Comp2 />}></Route>
          <Route path="/items" element={<Items />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
