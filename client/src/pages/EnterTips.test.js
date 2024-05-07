import { render, screen } from "@testing-library/react";
import EnterTips from "./EnterTips";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
    return () => <div data-testid="mock-navbar"></div>;
  });

  test("card should be rendered within EnterTips component", () => {
    render(<EnterTips />);
    
    // Check if the Card component is rendered
    const cardElement = screen.getByRole("card");
    expect(cardElement).toBeInTheDocument();

    // Check if the CardBodyTipsForm component is rendered within the Card
    const tipsFormElement = screen.getByTestId("card-body-tips-form");
    expect(tipsFormElement).toBeInTheDocument();

    // Check if the input fields are rendered within the CardBodyTipsForm
    const inputElements = screen.getAllByRole("spinbutton");
    expect(inputElements.length).toBeGreaterThan(0);
});
