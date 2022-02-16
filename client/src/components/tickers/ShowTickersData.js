import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledDataTicker,
  StyledShowTickers,
  StyledTickerData,
  StyledTickersContainer,
} from "./ShowTickersDataStyled";

const ShowTickersData = () => {
  let colorPercent = "";
  let arrow = "";
  let show = "";
  let showTickersData = [];
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.items);
  const tickersTitle = useSelector((state) => state.data.tickersTitle);

  let makeColor = (name) => {
    const item1 = name[0].toUpperCase().charCodeAt();
    const item2 = name[1].toUpperCase().charCodeAt();
    return item1 * 11 + item2;
  };

  for (let i of tickersTitle) {
    for (let j of data) {
      if (j.ticker === i) {
        showTickersData.push(j);
      }
    }
  }

  const changeArrow = (el) => {
    if (el > 0) {
      arrow = "▲";
      colorPercent = "green";
    } else {
      arrow = "▼";
      colorPercent = "red";
    }
  };

  const deleteTicker = (item) => {
    dispatch({
      type: "DELETE_TICKER",
      payload: item,
    });
  };

  if (showTickersData.length > 0) {
    show = showTickersData.map((el, i) => (
      <StyledDataTicker key={i}>
        <img
          style={{ width: "33px", borderRadius: "20px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Zp-hTnGBxXKoMGtK0J09gA6ArnCb13flrm1ki-iowy4E1eu_bDHd4KMDa6DVU2-jpVM&usqp=CAU"
          alt="close"
          onClick={() => deleteTicker(el.ticker)}
        />{" "}
        <StyledTickerData
          color="wheat"
          bg={"#" + makeColor(el.ticker)}
          w="77px"
        >
          {el.ticker}
        </StyledTickerData>
        <StyledTickerData bg="#a8dce5" w="90px">
          {el.exchange}
        </StyledTickerData>
        <StyledTickerData color={colorPercent} bg="white" w="151px">
          {changeArrow(el.change_percent)} {arrow} {el.change_percent} %
        </StyledTickerData>
        <StyledTickerData color={colorPercent} bg="#d3e2e5" w="125px">
          dividend: {el.dividend} $
        </StyledTickerData>
        <StyledTickerData bg="#a8dce5" w="96px">
          yield: {el.yield} $
        </StyledTickerData>
      </StyledDataTicker>
    ));
  }

  return (
    <StyledTickersContainer>
      <StyledShowTickers>{show}</StyledShowTickers>
    </StyledTickersContainer>
  );
};

export default ShowTickersData;
