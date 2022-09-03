import { useDispatch } from "react-redux"
import { authAction } from "../../redux/actions/authAction"
import { useState } from "react"
import SignIn from "../../components/SignIn"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

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
    dispatch(authAction(payload))
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
