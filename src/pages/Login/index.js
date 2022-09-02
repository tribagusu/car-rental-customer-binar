// import SignIn from "../../components/SignIn"
import "./style.css"
import { useSelector, useDispatch } from "react-redux"
import { authAction } from "../../redux/actions/authAction"
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { token } = useSelector((state) => state.authReducer)
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

  // const props = {
  //   handleEmail,
  //   handlePassword,
  //   email,
  //   password,
  //   // login,
  //   handleSubmit,
  //   auth,
  // }
  return (
    <>
      <div className="signin">
        <div className="signin__left">
          <div className="signin__container">
            <div className="signin__logo">
              <img src="" alt="BCR" />
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit} className="signin__form">
              <div className="signin__email">
                <div className="signin__label">
                  <label>Email</label>
                </div>
                <input onChange={handleEmail} value={email} type="text" />
              </div>
              <div className="signin__password">
                <div className="signin__label">
                  <label>Password</label>
                </div>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                />
              </div>
              <button className="button">Sign In</button>
            </form>
            <div className="signin__signup">
              <p>Don't have an account?</p>
              <Link to="/registration">Sign Up for free</Link>
            </div>
            <p>token {token}</p>
          </div>
        </div>
        <div className="signin__right">
          <div className="signin__right__logo">
            <h1>Binar Car Rental</h1>
          </div>
          <div className="signin__right__image">
            <img src="" alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
