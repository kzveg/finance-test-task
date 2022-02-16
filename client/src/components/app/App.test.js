import { render, screen } from "../../configTest";
import App from "./App";

describe("App component", () => {
  it("renders App", () => {
    render(<App />);

    expect(screen.getByText("Finance tasck")).toBeInTheDocument();
    expect(screen.getByText("select interval")).toBeInTheDocument();
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("GOOGL")).toBeInTheDocument();
    expect(screen.getByText("MSFT")).toBeInTheDocument();
    expect(screen.getByText("AMZN")).toBeInTheDocument();
    expect(screen.getByText("FB")).toBeInTheDocument();
    expect(screen.getByText("TSLA")).toBeInTheDocument();
  });
});
