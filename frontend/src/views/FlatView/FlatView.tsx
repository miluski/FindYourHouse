import { Container, Row } from "react-bootstrap";
import FooterView from "../../components/Footer/FooterView";
import { RedirectButtonsView } from "./RedirectButtonsView";
import { FlatPhotos } from "./FlatPhotos";
import { SendMessageView } from "./SendMessageView";
import { BottomAdvertismentCredentials } from "./BottomAdvertismentCredentials";
import HeaderView from "../../components/Header/Header";

export const FlatView = () => {
	return (
		<>
			<HeaderView />
			<Container className='d-flex justify-content-betweeen align-items-center align-self-center' >
				<Row className='w-100 mb-3'>
					<RedirectButtonsView />
				</Row>
				<Row className='w-100 mb-3'>
					<FlatPhotos />
				</Row>
				<Row className='w-100 mb-3 ms-3'>
					<SendMessageView />
				</Row>
			</Container>
			<Container>
				<BottomAdvertismentCredentials />
			</Container>
			<FooterView />
		</>
	);
};
