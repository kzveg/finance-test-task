import { render, screen } from "../../../configTest";
import userEvent from "@testing-library/user-event";
import NavBarTickersLisr from "./NavBarTickersLisr";

describe("NavBarTickersLisr component", () => {
  it("renders NavBarTickersLisr", () => {
    render(<NavBarTickersLisr />);

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("GOOGL")).toBeInTheDocument();
    expect(screen.getByText("MSFT")).toBeInTheDocument();
    expect(screen.getByText("AMZN")).toBeInTheDocument();
    expect(screen.getByText("FB")).toBeInTheDocument();
    expect(screen.getByText("TSLA")).toBeInTheDocument();
  });

  it("user click on Ticker item", () => {
    render(<NavBarTickersLisr />);
    expect(screen.getByText(/GOOGL/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/GOOGL/i));

    expect(screen.queryByText(/GOOGL/i)).not.toBe(true);
  });
});
