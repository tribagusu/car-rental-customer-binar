import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

//# redux
import { useSelector, useDispatch } from "react-redux"
import { handleCar } from "../../redux/actions/carAction"

//# components
import Navigation from "../../components/LandingPage/Navigation"
import DetailCarResult from "../../components/DetailCarResult"
import Footer from "../../components/LandingPage/Footer"
import { NavMenu } from "../../components/LandingPage/Navigation/data"
import {
  socialMediaLogo,
  userGroupIcon,
  angleLeftIcon,
} from "../../const/staticData"

const Car = () => {
  const { car } = useSelector((state) => state.carReducer)
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(() => {
    const id = param.id
    dispatch(handleCar(id))
  }, [])

  const props = {
    car,
    socialMediaLogo,
    NavMenu,
    userGroupIcon,
    angleLeftIcon,
  }
  return (
    <div>
      <Navigation {...props} />
      <DetailCarResult {...props} />
      <Footer {...props} />
    </div>
  )
}
export default Car
