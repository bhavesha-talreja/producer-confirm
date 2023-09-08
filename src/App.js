import React from "react";
import Filter from "./Filter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details";
//import Routes from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
