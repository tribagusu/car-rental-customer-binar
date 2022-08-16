//# fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEnvelope,
  faAngleLeft,
  faAngleRight,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

//# buttons
const ButtonSewa = [<button className="button">Mulai Sewa Mobil</button>];
const ButtonCari = [<button className="button">Cari Mobil</button>];
const ButtonPilih = [<button className="button">Pilih Mobil</button>];
const ButtonEdit = [<button className="button">Edit</button>];
const ButtonBack = [
  <button className="button">
    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
  </button>,
];

//# icons
const checkIcon = [<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>];
const checkIcon5 = Array(5).fill(checkIcon);
const angleLeftIcon = <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>;
const angleRightIcon = <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>;
const userGroupIcon = <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>;

//# socialmedia logo
const socialMediaLogo = [
  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>,
  <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>,
];

export {
  checkIcon5,
  socialMediaLogo,
  ButtonSewa,
  ButtonCari,
  ButtonPilih,
  ButtonEdit,
  ButtonBack,
  angleLeftIcon,
  angleRightIcon,
  userGroupIcon,
};
