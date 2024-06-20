import React, { useState } from "react";
import MessageList from "./MessageList";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserData } from "../../utils/types/UserData";
import { sendMessage } from "../../utils/sendMessage";

interface ChatViewProps {
	user: UserData;
	setHasToRefresh: Function;
	hasToRefresh: boolean;
}

const ChatView: React.FC<ChatViewProps> = ({
	user,
	setHasToRefresh,
	hasToRefresh,
}) => {
	const [content, setContent] = useState("");
	const loggedUser = {
		email: localStorage.getItem("email") ?? "",
		name: localStorage.getItem("name") ?? "",
		surname: localStorage.getItem("surname") ?? "",
		phoneNumber: localStorage.getItem("phoneNumber") ?? "",
	};

	return (
		<div className='d-flex flex-column h-100'>
			<div className='flex-grow-1 overflow-auto'>
				<MessageList messages={user.messages} />
			</div>
			<div className='p-3 border-top d-flex'>
				<input
					type='text'
					className='form-control me-2'
					placeholder='Wprowadź wiadomość'
					onChange={(e) => setContent(e.target.value)}
				/>
				<button
					className='btn btn-primary'
					onClick={async () => {
						const isSended =
							(await sendMessage({
								content: content,
								type: "income",
								user: user,
								fromEmail: loggedUser.email,
								fromNameAndSurname: loggedUser.name + " " + loggedUser.surname,
							})) &&
							(await sendMessage({
								content: content,
								type: "outcome",
								user: loggedUser,
								fromEmail: user.email,
								fromNameAndSurname: user.name + " " + user.surname,
							}));
						isSended ? setHasToRefresh(!hasToRefresh) : null;
					}}>
					Wyślij
				</button>
			</div>
		</div>
	);
};

export default ChatView;
