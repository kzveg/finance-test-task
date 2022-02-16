import React from "react";
import { useDispatch } from "react-redux";
import Tickers from "../tickers/ShowTickersData";
import NavBar from "../navBar/index";
import getServerData from "../../redux/getServerData";
import { StyledHeader, StyledDiv, StyledH1 } from "./AppStyled";

function App() {
  const dispatch = useDispatch();
  dispatch(getServerData());

  return (
    <div>
      <StyledHeader>
        <StyledH1> Finance tasck </StyledH1>
      </StyledHeader>
      <StyledDiv>
        <NavBar />
        <Tickers />
      </StyledDiv>
    </div>
  );
}

export default App;
