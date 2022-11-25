import "./App.css";
import Login from "./Login";
import Wheel from "./Wheel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/Wheel" element={<Wheel/>}></Route>         
        </Routes>
      </Router>
    </div>
  );
}

export default App;

