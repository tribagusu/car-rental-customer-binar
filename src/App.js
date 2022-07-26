import { Routes, Route } from "react-router-dom";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import SearchCars from "./pages/SearchCars";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil/" element={<SearchCars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
      </Routes>
    </div>
  );
};

export default App;
