import { render, screen } from "@testing-library/react";
import Timer from "./Timer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

describe("Timer component", () => {
  it("Timer renders", () => {
    render(<Timer />);

    expect(screen.getByText("select interval")).toBeInTheDocument();
    expect(screen.getByText("5 sec")).toBeInTheDocument();
  });

  it("options should have a data-value attribute", () => {
    render(
      <Select open value={5}>
        <MenuItem value={2}> 2 sec </MenuItem>
        <MenuItem value={5}> 5 sec </MenuItem>
      </Select>
    );
    const options = screen.getAllByRole("option");

    expect(options[0]).toHaveAttribute("data-value", "2");
    expect(options[1]).toHaveAttribute("data-value", "5");
  });
});
