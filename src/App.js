import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Drinks from "./Drinks";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="drinks">Drinks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
}

export default App;
