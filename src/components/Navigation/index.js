import "./style.css";

const Navigation = () => {
  return (
    <header className="primary__header">
      <div className="container primary__container">
        <a href="#">
          <img src="" alt="Binar Car Rental" />
        </a>
        <nav className="primary__navigation">
          <ul className="nav__list">
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
