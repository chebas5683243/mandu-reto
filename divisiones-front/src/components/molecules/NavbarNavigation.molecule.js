import LogoMandu from "../atoms/LogoMandu.atom";
import NavbarButton from "../atoms/NavbarButton.atom";
import "../../styles/molecules/NavbarNavigation.style.less";
import { navigationOptions } from "../../constants/NavigationOptions.constants";
import React from "react";

const NavbarNavigation = () => {
  return (
    <div className="navbar-navigation-containter">
      <LogoMandu />
      {navigationOptions.map((option, index) =>
        <div key={index} style={{display: "flex", alignItems: "center"}}>
          <div className="separator" />
          <NavbarButton text={option.text} selected={option.selected} isMenu={option.isMenu} />
        </div>
      )}
    </div>
  );
}

export default NavbarNavigation;