import { Button, Container } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import UserIcon from "../../assets/UserIcon.png";

export const AccountOptionsView = () => {
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
					//onClick={}
					className='mb-4 btn-danger w-25'>
					Usuń konto
				</Button>
			</Container>
			<Container className='mb-4 align-items-center d-flex justify-content-center '>
				<Button
					//onClick={}
					className='mb-3 btn-secondary w-25 '>
					Wyloguj
				</Button>
			</Container>
		</Container>
	);
};
