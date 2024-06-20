import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminView from "../src/views/AdminView/AdminView";
import { MemoryRouter } from "react-router-dom";

describe("AdminView", () => {
	test("renders the StripeView component", () => {
		render(
			<MemoryRouter>
				<AdminView />
			</MemoryRouter>
		);
		const stripeViewElement = screen.getByTestId("stripeView");
		expect(stripeViewElement).toBeInTheDocument();
	});

	test("renders the ContentView component", () => {
		render(
			<MemoryRouter>
				<AdminView />
			</MemoryRouter>
		);
		const contentViewElement = screen.getByTestId("contentView");
		expect(contentViewElement).toBeInTheDocument();
	});

	test("renders the NotAuthorizedView component when role is not ADMIN", () => {
		localStorage.setItem("role", "USER");
		render(
			<MemoryRouter>
				<AdminView />
			</MemoryRouter>
		);
		const notAuthorizedViewElement = screen.getByTestId("notAuthorizedView");
		expect(notAuthorizedViewElement).toBeInTheDocument();
	});
});
