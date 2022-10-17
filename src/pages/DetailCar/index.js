import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

//# redux
import { useSelector, useDispatch } from "react-redux"
import { handleCar } from "../../redux/actions/carAction"

//# components
import Navigation from "../../components/LandingPage/Navigation"
import DetailCarResult from "../../components/DetailCarResult"
import Footer from "../../components/LandingPage/Footer"

const Car = () => {
  const { car } = useSelector((state) => state.carReducer)
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(() => {
    const id = param.id
    dispatch(handleCar(id))
  }, [])

  return (
    <div>
      <Navigation />
      <DetailCarResult />
      <Footer />
    </div>
  )
}
export default Car
