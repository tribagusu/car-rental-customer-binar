import "./style.css"
import { Link } from "react-router-dom"

const SignIn = (props) => {
  const {
    handleEmail,
    handlePassword,
    email,
    password,
    handleSubmit,
    logging,
  } = props

  return (
    <>
      <div className="signin">
        <div className="signin__left">
          <div className="signin__container">
            <div className="signin__logo">
              <Link to="/">
                <h3>BCR LOGO</h3>
              </Link>
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit} className="signin__form">
              <div className="signin__email">
                <div className="signin__label">
                  <label>Email</label>
                </div>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="text"
                  required
                />
              </div>
              <div className="signin__password">
                <div className="signin__label">
                  <label>Password</label>
                </div>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  required
                />
              </div>
              <button className="button">Sign In</button>
            </form>
            <div className="signin__signup">
              <p>Don't have an account?</p>
              <Link to="/registration">Sign Up for free</Link>
            </div>
            {logging && (
              <div>
                <p>Signing...</p>
              </div>
            )}
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

export default SignIn
