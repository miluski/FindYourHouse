import { Container } from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const SettingsAccountTile = () => {
	const navigate = useNavigate();
	return (
		<Container
			className='border border-black rounded mb-4 cursor-pointer button'
			onClick={() => {
				navigate("/settings");
			}}>
			<Container className='d-flex align-items-center justify-content-center mt-4'>
				<Gear size={120} />
			</Container>
			<Container className='d-flex align-items-center justify-content-center mt-2 mb-3  '>
				<text> Ustawienia Konta</text>
			</Container>
		</Container>
	);
};
