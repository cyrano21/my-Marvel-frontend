// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Comics from "./Pages/Comics/Comics";

export default function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/marvel/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}
