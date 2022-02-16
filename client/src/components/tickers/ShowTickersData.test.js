// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../configTest";
import ShowTickersData from "./ShowTickersData";
import userEvent from "@testing-library/user-event";

describe("ShowTickersData component", () => {
  it("renders ShowTickersData", () => {
    render(<ShowTickersData />);

    expect(screen.queryByRole("ShowTickersData")).toBeNull();
  });

  // it("delete ShowTickersData", () => {
  //   render(<ShowTickersData />);

  //   expect(screen.getByText(/GOOGL/i)).not.toBeNull();

  //   userEvent.click(screen.getByRole("img"));
  //   expect(screen.getByText(/GOOGL/i)).not.toBe(true);
  // });
});
