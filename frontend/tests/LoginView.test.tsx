import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginView from "../src/views/AuthenticationView/LoginView/LoginView";

const changeTabMock = jest.fn();

describe("LoginView", () => {
  test("renders the form and handles login button click with invalid inputs", async () => {
    render(<LoginView changeTab={changeTabMock} />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hasło/i)).toBeInTheDocument();
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Hasło/i);
    const loginButton = screen.getByText("Zaloguj się");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "testexample.com" } });
      fireEvent.change(passwordInput, { target: { value: "" } });

      fireEvent.click(loginButton);
    });

    expect(screen.getByText("Nieprawidłowy adres mailowy")).toBeInTheDocument();
    expect(screen.getByText("Pole jest wymagane")).toBeInTheDocument();
  });
});
