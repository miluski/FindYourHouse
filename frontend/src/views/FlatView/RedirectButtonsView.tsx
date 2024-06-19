import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const RedirectButtonsView = () => {
	const navigate = useNavigate();
	return (
		<>
			<Container className=' mt-4 align-items-center  justify-content-center flex-column d-flex '>
				<Button variant='success' onClick={() => navigate("/calculator")}>
					Kalkulator kredytu
				</Button>
				<Button variant='danger'>Zgłoś ofertę</Button>
			</Container>
		</>
	);
};
