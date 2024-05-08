import CardBodyTipsForm from "./CardBodyTipsForm";
import { render, screen } from "@testing-library/react";

const fields = [
  { label: "Tips brut", placeholder: "enter tips brut", type: "text" },
  { label: "Tips net", placeholder: "enter tips net", type: "text" },
];

test("<form> should be rendered in CardBodyTipsForm", () => {
  render(<CardBodyTipsForm fields={fields} />);

  // Checking that the <form> is being rendered in the DOM
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();

  // Checking that the fa icon is rendered in the CardBodyTipsForm
  const faSackDollar = screen.getByTestId("fa-sack-dollar");
  expect(faSackDollar).toBeInTheDocument();

  // Checking that GiCoins icon is rendered in the CardBodyTipsForm component
  const faGiCoins = screen.getByTestId("fa-gi-coins");
  expect(faGiCoins).toBeInTheDocument();

  // Check if the input fields are rendered within the CardBodyTipsForm
  const inputElements = screen.getAllByRole("spinbutton");
  expect(inputElements.length).toBeGreaterThan(0);

  // Check if the label fields are redered within the CardBodyTipsForm
  const labelElement = screen.getByTestId("enterTipsForm-label-Tips brut");
  expect(labelElement).toBeInTheDocument();
});
