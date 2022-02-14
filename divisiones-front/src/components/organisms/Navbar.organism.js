import NavbarNavigation from "../molecules/NavbarNavigation.molecule";
import NavbarUserOptions from "../molecules/NavbarUserOptions.molecule";
import "../../styles/organisms/Navbar.style.less";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavbarNavigation />
      <NavbarUserOptions />
    </div>
  );
}

export default Navbar;