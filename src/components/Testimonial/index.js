import "./style.css";
import testimonialImage1 from "../../assets/testimonials-1.jpg";

const Testimonial = (props) => {
  const { starsIcon } = props;
  return (
    <section className="carousel">
      <h2>Testimonial</h2>
      <p>Berbagai review positif dari para pelanggan kami</p>
      <div className="carousel__container">
        <div className="carousel__card">
          <div className="carousel__card__image">
            <img src={testimonialImage1} alt="" />
          </div>
          <div className="carousel__card__info">
            <div className="carousel__card__info__stars">
              <ul>
                <li>{starsIcon}</li>
              </ul>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <small>John Dee 32, Bromo</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
