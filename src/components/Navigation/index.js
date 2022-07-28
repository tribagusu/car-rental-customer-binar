import "./style.css";
import {
  AppBar,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
          // position: "inherit",
        }}
      >
        <Toolbar>
          <Link to="/" className="logo-small-screen">
            <img src="" alt="Binar Car Rental" />
          </Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <div className="primary__header">
                <div className="container primary__container">
                  <Link to="/" className="logo-big-screen">
                    <img src="" alt="Binar Car Rental" />
                  </Link>
                  <nav className="primary__navigation">
                    <ul className="nav__list">
                      {NavMenu.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navigation;
