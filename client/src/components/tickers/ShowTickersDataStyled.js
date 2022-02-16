import styled from "styled-components";

export const StyledTickersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69%;
  height: 98%;
  background-color: #065399;
  margin-left: 5px;
`;
export const StyledShowTickers = styled.ul`
  list-style: none;
  cursor: pointer;
`;
export const StyledDataTicker = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  border-bottom: solid gray;
  margin-bottom: 10px;
`;

export const StyledTickerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  width: ${(props) => props.w};
  height: 90%;
  border: solid 1px;
  margin-left: 10px;
  border-radius: 7px;
`;
