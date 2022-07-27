import "./style.css";
import { AppBar } from "@mui/material/AppBar";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { NavMenu } = props;
  return (
    <header className="primary__header">
      <div className="container primary__container">
        <Link to="/">
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
    </header>
  );
};

export default Navigation;
