import "./topbar.scss";
import { Phone, Mail } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AlexDev
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+79022552132</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>AlexanderIlinykhDev@yandex.ru</span>
          </div>
        </div>

        <div className="right">right</div>
      </div>
    </div>
  );
}
