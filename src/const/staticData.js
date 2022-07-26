import {
  UilThumbsUp,
  UilPricetagAlt,
  UilClock,
  UilAwardAlt,
} from "@iconscout/react-unicons";

// # fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheck,
  faAngleDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

// # image
import testiImage1 from "../assets/testimonials-1.jpg";
import testiImage2 from "../assets/testimonials-2.jpg";
import testiImage3 from "../assets/testimonials-3.jpg";

// _ variables
// # icons
const checkIcon = [<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>];
const checkIcon5 = Array(5).fill(checkIcon);

const starsIcon = [<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>];
const starsIcon5 = Array(5).fill(starsIcon);

const angleDownIcon = <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>;

// # navigation
const NavMenu = ["Our services", "Why us", "Testimonial", "FAQ"];

// # services
const strList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

// #strength
const strengthCard = [
  {
    id: 1,
    icon: <UilThumbsUp />,
    title: "Mobil Lengkap",
    detail:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    id: 2,
    icon: <UilPricetagAlt />,
    title: "Harga Murah",
    detail:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    id: 3,
    icon: <UilClock />,
    title: "Layanan 24 Jam",
    detail:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    id: 4,
    icon: <UilAwardAlt />,
    title: "Sopir Profesional",
    detail:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

// # testimoni
const dataTestimoni = [
  {
    id: 1,
    imgsrc: testiImage1,
    icon: [starsIcon5],
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    name: "John Dee 32, Bromo",
  },
  {
    id: 2,
    imgsrc: testiImage2,
    icon: [starsIcon5],
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    name: "John Dee 32, Bromo",
  },
  {
    id: 3,
    imgsrc: testiImage3,
    icon: [starsIcon5],
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    name: "John Dee 32, Bromo",
  },
];

// # frequently asked questions
const faq = [
  {
    id: 1,
    question: "Apa saja syarat yang dibutuhkan?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque veniam optio dolorem quo esse.",
    icon: [angleDownIcon],
  },
  {
    id: 2,
    question: "Berapa hari minimal sewa mobil lepas kunci?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque veniam optio dolorem quo esse.",
    icon: [angleDownIcon],
  },
  {
    id: 3,
    question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque veniam optio dolorem quo esse.",
    icon: [angleDownIcon],
  },
  {
    id: 4,
    question: "Apakah Ada biaya antar-jemput?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque veniam optio dolorem quo esse.",
    icon: [angleDownIcon],
  },
  {
    id: 5,
    question: "Bagaimana jika terjadi kecelakaan?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto neque veniam optio dolorem quo esse.",
    icon: [angleDownIcon],
  },
];

// # footer socialmedia logo
const socialMediaLogo = [
  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>,
];

// _ export

export {
  strList,
  checkIcon5,
  strengthCard,
  dataTestimoni,
  faq,
  socialMediaLogo,
  NavMenu,
};
