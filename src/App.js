import { Routes, Route, Link } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import SearchCars from "./pages/SearchCars";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<SearchCars />} />
        <Route path="/mobil" element={<Car />} />
      </Routes>
    </div>
  );
};

export default App;
