import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";
import { CredentialsPickerView } from "./CredentialsPickerView";
import { CalculatedCredentialsView } from "./CalculatedCredentialsView";
import { Col, Container, Row } from "react-bootstrap";
import AccessBlockedView from "../ErrorViews/AccessBlockedView";
import { useSelector } from "react-redux";
import { OperationState } from "../../utils/types/State";

export const MortrageCalculatorView = () => {
	let { token } = useSelector(
		(state: OperationState) => state.operationReducer
	);
	token = token ? token : localStorage.getItem("token");
	return (
		<>
			<HeaderView />
			{token !== null && token !== "" && token !== undefined ? (
				<>
					<Container
						fluid
						className='d-flex flex-column justify-content-center mb-5'>
						<Row className='border border-black shadow-md rounded-3 align-items-center m-5 pb-5'>
							<Col xs={12} md={6}>
								<CredentialsPickerView />
							</Col>
							<Col xs={12} md={6}>
								<CalculatedCredentialsView />
							</Col>
						</Row>
					</Container>
					<Container fluid className='mb-1 p-5' />
				</>
			) : (
				<AccessBlockedView />
			)}
			<FooterView />
		</>
	);
};
