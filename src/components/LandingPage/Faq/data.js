import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const angleDownIcon = <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>;

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

export { faq };
