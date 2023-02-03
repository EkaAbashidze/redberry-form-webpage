import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import Personal from "./Components/Personal";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
