import { Routes, Route, Navigate } from "react-router-dom"
import DetailCar from "./pages/DetailCar"
import Home from "./pages/Home"
import SearchCars from "./pages/SearchCars"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import PaymentMethod from "./pages/Payment/Metode"
import PayingProcess from "./pages/Payment/Paying"
import Tiket from "./pages/Payment/Tiket"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carimobil" element={<SearchCars />} />
        <Route path="detailmobil/:id" element={<DetailCar />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="payment/metode" element={<PaymentMethod />} />
        <Route path="payment/paying" element={<PayingProcess />} />
        <Route path="payment/tiket" element={<Tiket />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
