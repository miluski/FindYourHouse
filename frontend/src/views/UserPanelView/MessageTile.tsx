import { Container } from "react-bootstrap";
import { ChatSquareText } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const MessageTile = () => {
    const navigate = useNavigate();
	return (
		<Container
			className='border border-black rounded mb-4 cursor-pointer button'
            onClick={()=>{
                navigate("/messages")
            }}
			fluid>
			<Container className='d-flex align-items-center justify-content-center mt-4'>
				<ChatSquareText size={120} />
			</Container>
			<Container className='d-flex align-items-center justify-content-center mt-2 mb-3  '>
				<text> Wiadomości</text>
			</Container>
		</Container>
	);
};
