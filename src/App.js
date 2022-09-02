import "./App.css"
import { Routes, Route } from "react-router-dom"
import DetailCar from "./pages/DetailCar"
import Home from "./pages/Home"
import SearchCars from "./pages/SearchCars"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carimobil" element={<SearchCars />} />
        <Route path="detailmobil/:id" element={<DetailCar />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
