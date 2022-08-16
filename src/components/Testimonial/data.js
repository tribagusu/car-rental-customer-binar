import testiImage1 from "../../assets/testimonials-1.jpg";
import testiImage2 from "../../assets/testimonials-2.jpg";
import testiImage3 from "../../assets/testimonials-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const starsIcon = [<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>];
const starsIcon5 = Array(5).fill(starsIcon);

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

export { dataTestimoni };
