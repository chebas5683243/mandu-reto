import "../../styles/molecules/NavbarNavigation.style.less";
import LogoManduNegative from "../atoms/LogoManduNegative.atom";
import NavbarButton from "../atoms/NavbarButton.atom";
import Avatar from "../../assets/Avatar.png";
import NavbarIconNotification from "../atoms/NavbarIconNotification.atom";
import { navigationUserOptions } from "../../constants/NavigationUserOptions.constants";
import React from "react";
import Resources from "../../constants/Resources.es.constants";

const NavbarUserOptions = () => {
  return (
    <div className="navbar-navigation-containter">
      {navigationUserOptions.map((option, index) =>
        <div key={index} style={{display: "flex", alignItems: "center"}}>
          <NavbarIconNotification icon={option.icon} count={option.count} />
          <div className="separator" />
        </div>
      )}
      <NavbarButton text={Resources.Administrator} isMenu userAvatar={Avatar} />
      <LogoManduNegative />
    </div>
  );
}

export default NavbarUserOptions;