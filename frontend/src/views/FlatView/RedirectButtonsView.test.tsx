import { render, screen, fireEvent } from "@testing-library/react";
import { RedirectButtonsView } from "./RedirectButtonsView";
import { useNavigate } from "react-router-dom";
import '@testing-library/jest-dom';

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("RedirectButtonsView", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  test("renders the component", () => {
    render(<RedirectButtonsView />);
    const buttonElement = screen.getByTestId("Kalkulator-kredytu");
    expect(buttonElement).toBeInTheDocument(); 
  });

  test("calls navigate when button is clicked", () => {
    render(<RedirectButtonsView />);
    const buttonElement = screen.getByTestId("Kalkulator-kredytu");
    fireEvent.click(buttonElement);
    expect(navigate).toHaveBeenCalledWith("/calculator");
  });
});