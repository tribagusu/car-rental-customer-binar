import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import SignUp from "../../components/SignUp"
import swal from "sweetalert"
import "./style.css"

const Registration = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name,
      email,
      password,
    }
    axios
      .post(
        "https://bootcamp-rent-car.herokuapp.com/customer/auth/register",
        payload
      )
      .then((res) => {
        console.log(res)
        swal("Berhasil", "Anda sudah terdaftar!", "success")
        navigate("/login")
      })
      .catch((err) => console.log(err.message))
  }

  const props = {
    handleEmail,
    handlePassword,
    handleName,
    handleSubmit,
    name,
    email,
    password,
  }
  return (
    <div>
      <SignUp {...props} />
    </div>
  )
}

export default Registration
