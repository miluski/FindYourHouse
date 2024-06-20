import { render, screen, fireEvent } from "@testing-library/react";
import ChatView from "./ChatView";
import '@testing-library/jest-dom';

describe("ChatView", () => {
	const user = {
		name: "John",
		phoneNumber: "123456789",
		surname: "Doe",
		email: "john.doe@example.com",
		messages: [
			{ content: "Hello", type: "income" },
			{ content: "Hi", type: "outcome" },
		],
	};
	const setHasToRefresh = jest.fn();
	const hasToRefresh = false;

	test("renders the component", () => {
		render(
			<ChatView
				user={user}
				setHasToRefresh={setHasToRefresh}
				hasToRefresh={hasToRefresh}
			/>
		);
		const chatViewElement = screen.getByTestId("chatView");
		expect(chatViewElement).toBeInTheDocument();
	});

	test("updates content state when input value changes", () => {
		render(
			<ChatView
				user={user}
				setHasToRefresh={setHasToRefresh}
				hasToRefresh={hasToRefresh}
			/>
		);
		const inputElement = screen.getByPlaceholderText("Wprowadź wiadomość") as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: "Test message" } });
		expect(inputElement.value).toBe("Test message");
	});

	test("calls setHasToRefresh when send button is clicked", () => {
		render(
			<ChatView
				user={user}
				setHasToRefresh={setHasToRefresh}
				hasToRefresh={hasToRefresh}
			/>
		);
		const sendButton = screen.getByText("Wyślij");
		fireEvent.click(sendButton);
		expect(setHasToRefresh).toHaveBeenCalledTimes(1);
	});
});