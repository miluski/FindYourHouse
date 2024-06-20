import { Button, Container } from "react-bootstrap";
import UserIcon from "../../assets/UserIcon.png";
import { deleteUserAccount } from "./deleteUserAccount";
import { useNavigate } from "react-router-dom";

export const AccountOptionsView = () => {
	const navigate = useNavigate();
	const email: String = localStorage.getItem("email") ?? "";
	const name: String = localStorage.getItem("name") ?? "";
	const surname: String = localStorage.getItem("surname") ?? "";
	return (
		<Container className='border border-black rounded mx-2' fluid>
			<Container
				fluid
				className=' mt-3 d-flex align-items-center justify-content-center'>
				<img src={UserIcon} alt='UserIcon' />
			</Container>
			<Container className='d-flex flex-column'>
				<text className='text-center fs-2 fw-bold'>
					{name ? name : "" + " " + surname ? surname : ""}
				</text>
				<text className='text-center fs-3'>{email ? email : ""}</text>
			</Container>
			<Container className='mb-2 mt-4 align-items-center d-flex justify-content-center '>
				<Button
					onClick={async () => {
						const isDeleted = await deleteUserAccount();
						if (isDeleted) {
							localStorage.removeItem("role");
							localStorage.removeItem("refreshToken");
							localStorage.removeItem("email");
							localStorage.removeItem("phoneNumber");
							localStorage.removeItem("name");
							localStorage.removeItem("surname");
							localStorage.removeItem("token");
							navigate("/");
						} else {
							alert(
								"Wystąpił błąd przy próbie usunięcia wskazanego konta! Spróbuj ponownie później"
							);
						}
					}}
					className='mb-4 btn-danger w-25'>
					Usuń konto
				</Button>
			</Container>
			<Container className='mb-4 align-items-center d-flex justify-content-center '>
				<Button
					onClick={() => {
						localStorage.removeItem("token");
						localStorage.removeItem("refreshToken");
						navigate("/");
					}}
					className='mb-3 btn-secondary w-25 '>
					Wyloguj
				</Button>
			</Container>
		</Container>
	);
};
