import React from "react"
import "./style.css"

const SignIn = () => {
  return (
    <>
      <div className="container signin">
        <div className="signin__left">
          <div className="signin__container">
            <div className="signin__logo">
              <img src="" alt="BCR" />
            </div>
            <h2>Welcome Back!</h2>
            <form className="signin__form">
              <div className="signin__email">
                <div className="signin__label">
                  <label>Email</label>
                </div>
                <input type="text" />
              </div>
              <div className="signin__password">
                <div className="signin__label">
                  <label>Password</label>
                </div>
                <input type="password" />
              </div>
              <button className="button">Sign In</button>
            </form>
            <div className="signin__signup">
              <p>Don't have an account?</p>
              <a href="/">Sign Up for free</a>
            </div>
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
