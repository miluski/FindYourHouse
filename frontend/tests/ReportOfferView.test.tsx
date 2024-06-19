import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ReportOfferView from "../src/views/ReportOfferView/ReportOfferView";
import { MemoryRouter } from "react-router-dom";


jest.mock("react-bootstrap/Offcanvas", () => ({
    __esModule: true,
    default: () => <div />,
    Header: () => <div />,
    Title: () => <div />,
}));

jest.mock("react-bootstrap/Navbar", () => ({
  __esModule: true,
  default: () => <div />,
  Brand: () => <div />,
  Toggle: () => <div />,
  Offcanvas: () => <div />,
}));

jest.mock("react-bootstrap/Container", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("ReportOfferView", () => {
  test("renders the component", () => {
    render(
      <MemoryRouter>
        <ReportOfferView />
      </MemoryRouter>
    );
    const mainReportViewElement = screen.getByTestId("mainReportView");
    expect(mainReportViewElement).toBeInTheDocument();
  });

  test("displays email error message for invalid email", () => {
    render(
      <MemoryRouter>
        <ReportOfferView />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "invalid-email.com" } });

    const submitButton = screen.getByTestId('zglos-button');
    fireEvent.click(submitButton);

    const emailErrorMessage = screen.getByText("Podaj poprawny adres email");
    expect(emailErrorMessage).toBeInTheDocument();
  });

  test("displays reason error message for empty reason", () => {
    render(
      <MemoryRouter>
        <ReportOfferView />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "przyklad@gmail.com" } });
    const reasonInput = screen.getByPlaceholderText("Opisz swój powód tutaj");
    fireEvent.change(reasonInput, { target: { value: "" } });

    const submitButton = screen.getByTestId('zglos-button');
    fireEvent.click(submitButton);

    const reasonErrorMessage = screen.getByText("Podaj powód zgłoszenia");
    expect(reasonErrorMessage).toBeInTheDocument();
  });
});