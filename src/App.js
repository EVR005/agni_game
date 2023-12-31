import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from "./Components/dummy";
import Navbar from "./Components/navbar";
import Items from "./Components/items";
import About1 from "./Components/comp1";
import Comp2 from "./Components/Comp2";
import Collections from "./Components/collections";
import Footer from "./Components/footer";
import Home from "./Components/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/clubs" element={<Collections />}></Route>
          <Route path="/about" element={<About1 />}></Route>
          <Route path="/register" element={<Comp2 />}></Route>
          <Route path="/gallery" element={<Items />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
