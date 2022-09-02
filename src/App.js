import { Routes, Route } from "react-router-dom"
import DetailCar from "./pages/DetailCar"
import Home from "./pages/Home"
import SearchCars from "./pages/SearchCars"
import Login from "./pages/Login"
import Registration from "./pages/Registration"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carimobil" element={<SearchCars />} />
        <Route path="detailmobil/:id" element={<DetailCar />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
