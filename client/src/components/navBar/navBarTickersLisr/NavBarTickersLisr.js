import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Styledtickers, StyledtickersLi } from "./NavBarTickersLisrStyled";

const NavBarTickersLisr = () => {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.data.showTickers);

  let tickersLogo = tickers.map((el, i) => {
    let item;
    if (el.flag === false) {
      item = <StyledtickersLi key={i}>{el.title}</StyledtickersLi>;
    }
    return item;
  });

  const changeFlagTicker = (e) => {
    const value = e.target.innerText;

    dispatch({
      type: "CHANGE_FLAG",
      payload: value,
    });
  };

  return (
    <Styledtickers onClick={changeFlagTicker}>{tickersLogo}</Styledtickers>
  );
};

export default NavBarTickersLisr;
