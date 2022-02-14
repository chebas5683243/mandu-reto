import { ReactComponent as Logo } from "../../assets/LogoMandu.svg";
import "../../styles/atoms/LogoMandu.style.less";

const LogoMandu = () => {
  return (
    <div className="logo-container">
      <Logo />
    </div>
  );
}

export default LogoMandu;