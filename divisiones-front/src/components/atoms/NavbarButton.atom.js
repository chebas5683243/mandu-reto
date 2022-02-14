import "../../styles/atoms/NavbarButton.style.less";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import Resources from "../../constants/Resources.es.constants";

const NavbarButton = ({ text, selected, isMenu, userAvatar }) => {
  return (
    <button className={`navbar-button ${selected ? "selected" : ""}`}>
      {userAvatar ? <img src={userAvatar} alt={Resources.UserAvatar}/> : null}
      {text}
      {isMenu ? <ArrowDown /> : null}
    </button>
  );
}

export default NavbarButton;