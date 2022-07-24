import "./style.css";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div>
          <i className="uil uil-thumbs-up"></i>
        </div>
        <h3>Mobil Lengkap</h3>
        <p>
          Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
        </p>
      </div>

      <div class="card">
        <div class="card__icon">
          <i class="uil uil-pricetag-alt"></i>
        </div>
        <h3>Harga Murah</h3>
        <p>
          Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
          mobil lain
        </p>
      </div>

      <div class="card">
        <div class="card__icon">
          <i class="uil uil-clock"></i>
        </div>
        <h3>Layanan 24 Jam</h3>
        <p>
          Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
          di akhir minggu
        </p>
      </div>

      <div class="card">
        <div class="card__icon">
          <i class="uil uil-award-alt"></i>
        </div>
        <h3>Sopir Profesional</h3>
        <p>
          Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
          waktu
        </p>
      </div>
    </div>
  );
};

export default Cards;
