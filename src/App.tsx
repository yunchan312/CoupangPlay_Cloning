import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tv from "./Router/Tv";
import Search from "./Router/Search";
import Home from "./Router/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
