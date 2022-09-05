import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

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
  const [car, setCar] = useState({})

  const param = useParams()
  const id = param.id

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err))
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
