import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer__columns">
          <div class="footer__address">
            <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div class="footer__navigation">
            <ul>
              <li>
                <a href="#">Our services</a>
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
          </div>

          <div class="footer__social-media">
            <h4>Connect with us</h4>
            <ul>
              <li>
                <a href="#">
                  <i class="uil uil-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-instagram-alt"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-envelope"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-tv-retro"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="copyright">
            <h4>Copyright Binar 2022</h4>
            <a href="#">
              <img src="" alt="Binar Car Rental" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
