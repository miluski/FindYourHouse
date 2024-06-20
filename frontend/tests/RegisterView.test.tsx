import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterView from "../src/views/AuthenticationView/RegisterView/RegisterView";

describe("RegisterView", () => {
  test("renders the form and handles register button click with invalid inputs", async () => {
    render(<RegisterView />);

    expect(screen.getByLabelText("Imię:")).toBeInTheDocument();
    expect(screen.getByLabelText("Nazwisko:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Hasło:")).toBeInTheDocument();
    expect(screen.getByLabelText("Numer telefonu:")).toBeInTheDocument();
    const nameInput = screen.getByLabelText("Imię:");
    const lastNameInput = screen.getByLabelText("Nazwisko:");
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Hasło:");
    const phoneNumberInput = screen.getByLabelText("Numer telefonu:");
    const registerButton = screen.getByText("Zarejestruj się");

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "" } });
      fireEvent.change(lastNameInput, { target: { value: "testexample.com" } });
      fireEvent.change(emailInput, { target: { value: "testexample.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.change(phoneNumberInput, { target: { value: 123456789123 } });

      fireEvent.click(registerButton);
    });

    expect(screen.getByText("Nieprawidłowy adres mailowy")).toBeInTheDocument();
    expect(
      screen.getByText("Nieprawidłowy numer telefonu"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Hasło musi zawierać:/i)).toBeInTheDocument();
    expect(screen.getByText("Pole jest wymagane")).toBeInTheDocument();
  });
});
