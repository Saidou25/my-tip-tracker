import CardBodyTipsForm from "./CardBodyTipsForm";
import { fireEvent, render, screen } from "@testing-library/react";

const fields = [
  { label: "Tips brut", placeholder: "enter tips brut", type: "text" },
  { label: "Tips net", placeholder: "enter tips net", type: "text" },
];

test("<form> should be rendered in CardBodyTipsForm", () => {
  render(<CardBodyTipsForm fields={fields} />);

  // Checking that the <form> is being rendered in the DOM
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();

  // Checking that the <FaSackDollar> is rendered in the CardBodyTipsForm
  const faSackDollar = screen.getByTestId("fa-sack-dollar");
  expect(faSackDollar).toBeInTheDocument();

  // Checking that <GiCoins> icon is rendered in the CardBodyTipsForm component
  const faGiCoins = screen.getByTestId("fa-gi-coins");
  expect(faGiCoins).toBeInTheDocument();

  let inputElements;
  // Check if the <input> fields are rendered within the CardBodyTipsForm
  inputElements = screen.getAllByPlaceholderText(/enter tips brut/i);
  expect(inputElements.length).toBeGreaterThan(0);

  // Check if the <input> fields are rendered within the CardBodyTipsForm
  inputElements = screen.getAllByPlaceholderText(/enter tips net/i);
  expect(inputElements.length).toBeGreaterThan(0);

  let labelElement;
  // Check if the <label> fields are redered within the CardBodyTipsForm
  labelElement = screen.getByLabelText(/Tips brut/i);
  expect(labelElement).toBeInTheDocument();

  // Check if the <label> fields are redered within the CardBodyTipsForm
  labelElement = screen.getByLabelText(/Tips net/i);
  expect(labelElement).toBeInTheDocument();

  // Check if the <Button /> is rendered in the CardBodyTipsForm
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Tips brut input should be empty", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const inputTipsBrutElement = screen.getByPlaceholderText("enter tips brut");
  expect(inputTipsBrutElement.value).toBe("");
});

test("Tips net input should be empty", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const inputTipsBrutElement = screen.getByPlaceholderText("enter tips net");
  expect(inputTipsBrutElement.value).toBe(""); // Assert that the input is empty
});

// test("button should be disabled", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toBeDisabled(true);
// });

test("error should not show in the component", () => {
  render(<CardBodyTipsForm fields={fields} />);
  // we're using queryByText instead of getByText to handle the case where the text might not be found. This allows the test to pass if the error message is not present in the component. If the error message is present when it shouldn't be, it will fail the test.
  const spanElement = screen.queryByText(/Oops, something went wrong.../i);
  expect(spanElement).not.toBeInTheDocument();
});

test("enter tips brut should change", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const inputElement = screen.getByPlaceholderText(/enter tips brut/i)
  const testValue = "test";

  fireEvent.change(inputElement, { target: { value: testValue }});
  expect(inputElement.value).toBe(testValue);
})

test("enter tips net should change", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const inputElement = screen.getByPlaceholderText(/enter tips net/i)
  const testValue = "test";

  fireEvent.change(inputElement, { target: { value: testValue }});
  expect(inputElement.value).toBe(testValue);
})

test("please wait... should not show when loading is false", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement.textContent).toEqual("save");
})

test("save should show when loading is true", () => {
  render(<CardBodyTipsForm fields={fields} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement.textContent).toEqual("save");
})

test("Oops, something went wrong... should not show when error is false", () => {
render(<CardBodyTipsForm fields={fields} />);
const spanElement = screen.queryByTestId("oops");
expect(spanElement).not.toBeInTheDocument();
})
