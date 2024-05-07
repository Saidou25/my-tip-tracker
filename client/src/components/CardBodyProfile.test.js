import { render, screen } from "@testing-library/react";
import CardBodyProfile from "./CardBodyProfile";

test("renders workPlace body in the <p> with the {field.workPlace} as a prop", () => {
  const fields = [
    {
      workPlace: "Test workPlace 1",
      position: "Position 1",
      firstname: "First name 1",
    },
    {
      workPlace: "Test workPlace 2",
      position: "Position 2",
      firstname: "First name 2",
    },
  ];
  render(<CardBodyProfile fields={fields} />);
  const pElement1 = screen.getByText(/Test workPlace 1/i);
  const pElement2 = screen.getByText(/Test workPlace 2/i);
  expect(pElement1).toBeInTheDocument();
  expect(pElement2).toBeInTheDocument();
});
