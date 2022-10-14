import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import SignUp from "../../components/UserAuth/SignUp"
import swal from "sweetalert"

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
      email,
      password,
    }
    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
        payload
      )
      .then((res) => {
        console.log(res)
        swal({
          title: "Success!",
          text: "Registered successfully",
          type: "success",
          timer: 1500,
        })
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
