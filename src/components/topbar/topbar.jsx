import "./topbar.scss";
import { Phone, Mail } from "@material-ui/icons";
export default function Topbar({ isMenuOpen, serIsMenuOpen }) {
  return (
    <div className={"topbar " + (isMenuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AlexDev
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <p>+7 902 255 21 32</p>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <p>AlexanderIlinykhDev@yandex.ru</p>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              serIsMenuOpen(!isMenuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
