import { render, screen, fireEvent } from "@testing-library/react";
import CustomFormInput from "../src/components/CustomFormInput/CustomFormInput";
import "@testing-library/jest-dom";

describe("CustomFormInput", () => {
  test("renders input correctly", () => {
    render(
      <CustomFormInput
        label="Email"
        type="text"
        placeholder="Enter your email"
        name="email"
        value="test@example.com"
        onChange={() => {}}
        onBlur={() => {}}
        isInvalid={false}
        isValid={true}
        errorMessage=""
        id="email-input"
      />,
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue("test@example.com");

    fireEvent.blur(inputElement);
  });
});
