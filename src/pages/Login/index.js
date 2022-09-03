import { useDispatch } from "react-redux"
import { handleLogin } from "../../redux/actions/authAction"
import { useState } from "react"
import SignIn from "../../components/SignIn"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    dispatch(handleLogin(payload))
    navigate("/")
  }

  const props = {
    handleEmail,
    handlePassword,
    email,
    password,
    handleSubmit,
  }
  return <SignIn {...props} />
}

export default Login
