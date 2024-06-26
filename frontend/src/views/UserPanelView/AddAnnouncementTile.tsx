import { Container } from "react-bootstrap";
import { HouseAddFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const AddAnnouncementTile = () => {
	const navigate = useNavigate();
	return (
		<Container
			className='border border-black rounded mb-4 cursor-pointer button'
			fluid
			onClick={() => {
				navigate("/add-offer");
			}}>
			<Container className='d-flex align-items-center justify-content-center mt-4'>
				<HouseAddFill size={120} />
			</Container>
			<Container className='d-flex align-items-center justify-content-center mt-2 mb-3 '>
				<text> Dodaj ogłoszenie</text>
			</Container>
		</Container>
	);
};
