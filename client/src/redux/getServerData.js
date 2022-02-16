import { io } from "socket.io-client";
import { useEffect } from "react";
import { getTickersData } from "./reducer";

const getServerData = () => {
  const socket = io.connect("http://localhost:4000");

  return function (dispatch) {
    useEffect(() => {
      socket.emit("start");

      socket.on("ticker", function (data) {
        dispatch(getTickersData(data));
      });
    });
  };
};

export default getServerData;
