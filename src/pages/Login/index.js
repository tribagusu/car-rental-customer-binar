import SignIn from "../../components/SignIn"
import { useSelector, useDispatch } from "react-redux"
import { authAction } from "../../redux/actions/authAction"
import { useState, useEffect } from "react"

const Login = () => {
  const { auth } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  console.log(auth)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [login, setLogin] = useState("")
  // console.log(email, password)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.PreventDefault()

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
    // login,
    handleSubmit,
    // auth,
  }
  return <SignIn {...props} />
}

export default Login
