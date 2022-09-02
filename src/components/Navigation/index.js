import "./style.css";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Fragment, default as React } from "react";
import DrawerComp from "../Drawer";

const Navigation = (props) => {
  const { NavMenu } = props;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
                    </ul>
                  </nav>
                </div>
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navigation;
