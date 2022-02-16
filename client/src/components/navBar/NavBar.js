import React from "react";
import Timer from "./timer/timer";
import NavBarTickersLisr from "./navBarTickersLisr/NavBarTickersLisr";
import { StyledNavBar, StyledTimer, StyledListOfTickers } from "./NavBarStyled";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledTimer>
        <Timer />
      </StyledTimer>
      <StyledListOfTickers>
        <NavBarTickersLisr />
      </StyledListOfTickers>
    </StyledNavBar>
  );
};

export default NavBar;
