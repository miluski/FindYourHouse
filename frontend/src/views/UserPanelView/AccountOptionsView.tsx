import { Button, Container } from "react-bootstrap";
import UserIcon from "../../assets/UserIcon.png";
import { useNavigate } from "react-router-dom";

export const AccountOptionsView = () => {
	const navigate = useNavigate();
	const email: String = localStorage.getItem("email") ?? "";
	const name: String = localStorage.getItem("name") ?? "";
	const surname: String = localStorage.getItem("surname") ?? "";
	return (
		<Container className='border border-black rounded ' fluid>
			<Container
				fluid
				className=' mt-3 d-flex align-items-center justify-content-center '>
				<img src={UserIcon} alt='UserIcon' />
			</Container>
			<Container className='d-flex flex-column pb-2'>
				<text className='text-center fs-2 fw-bold'>
					{name ? name : "" + " " + surname ? surname : ""}
				</text>
				<text className='text-center fs-3'>{email ? email : ""}</text>
			</Container>
			<Container className='mb-4 align-items-center d-flex justify-content-center mt-3 '>
				<Button
					onClick={() => {
						localStorage.removeItem("token");
						localStorage.removeItem("refreshToken");
						localStorage.removeItem("name");
						localStorage.removeItem("surname");
						localStorage.removeItem("email");
						localStorage.removeItem("phoneNumber");
						navigate("/");
					}}
					className='mb-3 btn-secondary w-25 '>
					Wyloguj
				</Button>
			</Container>
		</Container>
	);
};

