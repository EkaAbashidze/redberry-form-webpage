import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import LastPage from "./Components/LastPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/lastpage" element={<LastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;