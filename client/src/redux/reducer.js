const GET_TICKERS_DATA = "GET_TICKERS_DATA";
const CHANGE_FLAG = "CHANGE_FLAG";
const DELETE_TICKER = "DELETE_TICKER";

const initialState = {
  items: [],
  showTickers: [
    { title: "AAPL", flag: false },
    { title: "GOOGL", flag: false },
    { title: "MSFT", flag: false },
    { title: "AMZN", flag: false },
    { title: "FB", flag: false },
    { title: "TSLA", flag: false },
  ],
  tickersTitle: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKERS_DATA:
      const data = action.payload;
      return {
        ...state,
        items: data,
      };
    case CHANGE_FLAG:
      const title = action.payload;
      return {
        ...state,
        showTickers: state.showTickers.map((el) =>
          el.title === title ? { title: title, flag: !el.flag } : el
        ),
        tickersTitle: [...state.tickersTitle, title],
      };
    case DELETE_TICKER:
      const name = action.payload;
      return {
        ...state,
        showTickers: state.showTickers.map((el) =>
          el.title === name ? { title: name, flag: !el.flag } : el
        ),
        tickersTitle: [...state.tickersTitle.filter((el) => el !== name)],
      };

    default:
      return state;
  }
};

export const getTickersData = (items) => ({
  type: "GET_TICKERS_DATA",
  payload: items,
});
