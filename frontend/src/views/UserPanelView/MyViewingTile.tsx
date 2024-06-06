import { Container } from "react-bootstrap";
import { EnvelopePaper } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const MyViewingTile = () => {
	const navigate = useNavigate();
	return (
		<Container
			className='border border-black rounded mb-4 cursor-pointer button'
			onClick={() => {
				navigate(`/flats?filter=nickname&nickname=${"test"}`)
			}}>
			<Container className='d-flex align-items-center justify-content-center mt-4'>
				<EnvelopePaper size={120} />
			</Container>
			<Container className='d-flex align-items-center justify-content-center mt-2 mb-3  '>
				<text> Moje ogłoszenia</text>
			</Container>
		</Container>
	);
};
