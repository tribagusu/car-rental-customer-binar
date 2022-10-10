import { useDispatch } from "react-redux"
import { handleLogin } from "../../redux/actions/authAction"
import { useState } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import SignIn from "../../components/UserAuth/SignIn"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logging, setLogging] = useState(false)

  const user = localStorage.getItem("token")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    setLogging(true)
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    dispatch(handleLogin(payload, navigate, from))
  }

  const props = {
    handleEmail,
    handlePassword,
    email,
    password,
    handleSubmit,
    setLogging,
    logging,
  }
  return <>{!user ? <SignIn {...props} /> : <Navigate to="/" replace />}</>
}

export default Login
