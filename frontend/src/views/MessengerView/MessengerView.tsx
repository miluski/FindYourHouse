import React, { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import ChatView from "./ChatView";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import HeaderView from "../../components/Header/Header";
import { axiosInstance } from "../../utils/axiosInstance";
import { Message } from "../../utils/types/Message";
import { UserData } from "../../utils/types/UserData";

const MessengerView: React.FC = () => {
	const email = localStorage.getItem("email") ?? "";
	const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
	const [usersData, setUsersData] = useState([]);
	const [hasToRefresh, setHasToRefresh] = useState(false);
	useEffect(() => {
		(async () => {
			const response = await axiosInstance.get(`/api/messages/get/${email}`);
			setUsersData(
				response.data.reduce((acc: any[], message: Message) => {
					let user = acc.find((user) => user.email === message.fromEmail);
					if (user) {
						user.messages.push(message.content);
					} else {
						user = {
							id: message.id,
							name: message.fromNameAndSurname,
							email: message.fromEmail,
							avatar: "",
							messages: [message.content],
							timestamp: new Date(),
						};
						acc.push(user);
					}
					return acc;
				}, [])
			);
			setSelectedUser(
				response.data.reduce((acc: any, message: Message) => {
					if (acc.id === undefined) {
						acc.id = message.id;
						acc.name = message.fromNameAndSurname;
						acc.email = message.fromEmail;
						acc.avatar = "";
					}
					acc.messages = acc.messages || [];
					acc.messages.push({
						id: message.id,
						content: message.content,
						timestamp: new Date(),
					});
					return acc;
				}, {} as any)
			);
		})();
	}, [hasToRefresh]);
	return (
		<>
			<HeaderView />
			<Container className='fluid vh-100'>
				<div className='row h-75'>
					<div className='col-3 border-end'>
						<LeftSideBar users={usersData} onSelectUser={setSelectedUser} />
					</div>
					<div className='col-9 '>
						{selectedUser && (
							<ChatView
								user={selectedUser}
								setHasToRefresh={setHasToRefresh}
								hasToRefresh={hasToRefresh}
							/>
						)}
					</div>
				</div>
			</Container>
		</>
	);
};

export default MessengerView;
