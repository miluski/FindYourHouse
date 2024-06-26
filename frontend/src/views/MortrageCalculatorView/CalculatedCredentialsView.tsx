import { useSelector } from "react-redux";
import { Building, CurrencyExchange, Wallet2 } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import { CalculatorState } from "../../utils/types/State";

export const CalculatedCredentialsView = () => {
	const { monthlyInstallment, loanAmount, interest } = useSelector(
		(state: CalculatorState) =>
			state.calculatorReducer as unknown as CalculatorState
	);
	return (
		<Container fluid="true" className='my-5'>
			<Container
				fluid="true"
				className='d-flex flex-column align-items-center border-sm border-sm-black shadow-md rounded-3 p-5'
				data-testid='calculatedView'>
				<Row fluid="true" md={8} sm={12} className='mb-5'>
					<Col className='d-flex flex-column align-items-center'>
						<p className='fs-5 fw-regular ff-inter'>Obliczona rata:</p>
						<div className='d-flex flex-column flex-md-row align-items-center'>
							<Wallet2 size={32} className='mx-2' />
							<p className='ff-inter fs-4 text-lightgreen fw-bold text-sm-nowrap text-xs-wrap'>
								{monthlyInstallment.toLocaleString("pl-PL")} PLN{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row fluid="true" md={8} sm={12} className=' mx-5'>
					<Col className='d-flex flex-column align-items-center'>
						<p className='fs-5 fw-regular ff-inter'>Kwota kredytu: </p>
						<Col className='d-flex flex-row align-items-center'>
							<div className='d-flex flex-column flex-md-row align-items-center'>
								<Building size={32} className='mx-2' />
								<p className='ff-inter fs-4 fw-bold mb-3 mb-md-0 text-sm-nowrap text-xs-wrap'>
									{loanAmount.toLocaleString("pl-PL")} PLN
								</p>
							</div>
						</Col>
					</Col>
					<Col className='d-flex flex-column align-items-center'>
						<p className='fs-5 fw-regular ff-inter'>Odsetki: </p>
						<Col className='d-flex flex-row align-items-center'>
							<div className='d-flex flex-column flex-md-row align-items-center'>
								<CurrencyExchange size={32} className='mx-2' />
								<p className='ff-inter fs-4 fw-bold text-sm-nowrap text-xs-wrap'>
									{interest.toLocaleString("pl-PL")} PLN
								</p>
							</div>
						</Col>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
