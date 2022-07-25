import "./style.css";

const Faq = () => {
  return (
    <section>
      <div className="container">
        <div className="faq__columns">
          <div className="faq__column__left">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq__column__right">
            <article className="faq">
              <div className="faq__qa">
                <h4>Apa saja syarat yang dibutuhkan?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto neque veniam optio dolorem quo esse.
                </p>
              </div>
              <div className="faq__icon">
                <i className="uil uil-angle-down"></i>
              </div>
            </article>

            <article className="faq">
              <div className="faq__qa">
                <h4>Berapa hari minimal sewa mobil lepas kunci?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto neque veniam optio dolorem quo esse.
                </p>
              </div>
              <div className="faq__icon">
                <i className="uil uil-angle-down"></i>
              </div>
            </article>

            <article className="faq">
              <div className="faq__qa">
                <h4>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto neque veniam optio dolorem quo esse.
                </p>
              </div>
              <div className="faq__icon">
                <i className="uil uil-angle-down"></i>
              </div>
            </article>

            <article className="faq">
              <div className="faq__qa">
                <h4>Apakah Ada biaya antar-jemput?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto neque veniam optio dolorem quo esse.
                </p>
              </div>
              <div className="faq__icon">
                <i className="uil uil-angle-down"></i>
              </div>
            </article>

            <article className="faq">
              <div className="faq__qa">
                <h4>Bagaimana jika terjadi kecelakaan</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto neque veniam optio dolorem quo esse.
                </p>
              </div>
              <div className="faq__icon">
                <i className="uil uil-angle-down"></i>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
