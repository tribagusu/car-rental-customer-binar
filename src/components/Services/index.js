import "./style.css";
import serviceImg from "../../assets/img_service.png";

const Services = () => {
  return (
    <section>
      <div class="container services__container">
        <div class="services__columns">
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
            <div class="services__checklist">
              <ul>
                <li>
                  <i class="uil uil-check"></i>
                </li>
                <li>
                  {" "}
                  <i class="uil uil-check"></i>
                </li>
                <li>
                  {" "}
                  <i class="uil uil-check"></i>
                </li>
                <li>
                  {" "}
                  <i class="uil uil-check"></i>
                </li>
                <li>
                  {" "}
                  <i class="uil uil-check"></i>
                </li>
              </ul>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
