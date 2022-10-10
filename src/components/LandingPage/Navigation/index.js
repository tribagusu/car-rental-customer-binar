import { Fragment, default as React } from "react"
import { Link, useNavigate } from "react-router-dom"

//# style
import "./style.css"

//# lib
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import DrawerComp from "./Drawer/index"

const Navigation = (props) => {
  const { NavMenu } = props
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const user = localStorage.getItem("token")

  // redux
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <Fragment>
      <AppBar
        sx={{
          background: "var(--clr-variant)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Link to="/" className="logo-small-screen">
            <a href="#hero">Binar Car Rental</a>
          </Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <nav className="primary__header" id="nav">
                <div className="container primary__container">
                  <Link to="/" className="logo-big-screen">
                    <a href="#hero">Binar Car Rental</a>
                  </Link>
                  <nav className="primary__navigation">
                    <ul className="nav__list">
                      {NavMenu.map((item) => (
                        <li>{item}</li>
                      ))}
                      {!user ? (
                        <Link to="/login">
                          <button className="button">Login</button>
                        </Link>
                      ) : (
                        <button onClick={handleLogout} className="button">
                          Logout
                        </button>
                      )}
                    </ul>
                  </nav>
                </div>
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Navigation
