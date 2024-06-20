import { render, screen, fireEvent } from "@testing-library/react";
import ChatView from "../src/views/MessengerView/ChatView";
import '@testing-library/jest-dom';
import LeftSideBar from "../src/views/MessengerView/LeftSideBar";
import { MemoryRouter } from 'react-router-dom';

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
            <MemoryRouter>
                <ChatView
                    user={user}
                    setHasToRefresh={setHasToRefresh}
                    hasToRefresh={hasToRefresh}
                />
            </MemoryRouter>
		);
		const chatViewElement = screen.getByTestId("chatView");
		expect(chatViewElement).toBeInTheDocument();
	});

	test("updates content state when input value changes", () => {
		render(
            <MemoryRouter>
                <ChatView
                    user={user}
                    setHasToRefresh={setHasToRefresh}
                    hasToRefresh={hasToRefresh}
                />
            </MemoryRouter>
		);
		const inputElement = screen.getByPlaceholderText("Wprowadź wiadomość") as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: "Test message" } });
		expect(inputElement.value).toBe("Test message");
	});


    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      ];
      
      test("renders the component with user list", () => {
        render(
            <MemoryRouter>
                <LeftSideBar users={users} onSelectUser={() => {}} />
            </MemoryRouter>
        );
        const userButtons = screen.getAllByRole("button");
        expect(userButtons).toHaveLength(users.length);
      });
      
      test("calls onSelectUser when a user button is clicked", () => {
        const onSelectUser = jest.fn();
        render(
            <MemoryRouter>
                <LeftSideBar users={users} onSelectUser={onSelectUser} />
            </MemoryRouter>
        );
        const userButton = screen.getByText("John Doe (john.doe@example.com)");
        fireEvent.click(userButton);
        expect(onSelectUser).toHaveBeenCalledWith(users[0]);
      });

    

});

