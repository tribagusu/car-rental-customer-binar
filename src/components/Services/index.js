import "./style.css";
import serviceImg from "../../assets/img_service.png";

const Services = (props) => {
  const { servicesList, checkIcon5 } = props;
  return (
    <section id="services">
      <div className="container services__container">
        <div className="services__columns">
          <div className="services__image">
            <img src={serviceImg} alt="services" />
          </div>
          <div className="services__info">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="services__checklist">
              <div>
                {checkIcon5.map((item) => (
                  <ul>
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
              <div>
                {servicesList.map((item) => (
                  <ul key={item.id}>
                    <li>{item.service}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
