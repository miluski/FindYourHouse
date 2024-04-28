import { useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import { Building, CurrencyExchange, Wallet2 } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";

export const CalculatedCredentialsView = () => {
	const { monthlyInstallment, loanAmount, interest } = useSelector(
		(state: CalculatorState) => state
	);
	return (
		<Container className='w-100 mb-5 mt-5'>
			<Container className='d-flex flex-column align-items-center border border-black shadow-md rounded-3 p-5'>
				<Row className='mb-5'>
					<Col className='d-flex flex-column align-items-center'>
						<text className='fs-5 fw-regular ff-inter'>
							Obliczona rata miesięczna:{" "}
						</text>
						<div className='d-flex flex-column flex-md-row align-items-center'>
							<Wallet2 size={32} className='mx-2 mb-2' />
							<text className='ff-inter fs-4 text-lightgreen fw-bold text-nowrap'>
								{monthlyInstallment.toLocaleString("pl-PL")} PLN{" "}
							</text>
						</div>
					</Col>
				</Row>
				<Row fluid md={8} sm={12} className=' mx-5'>
					<Col className='d-flex flex-column align-items-center'>
						<text className='fs-5 fw-regular ff-inter'>Kwota kredytu: </text>
						<Col className='d-flex flex-row align-items-center'>
							<div className='d-flex flex-column flex-md-row align-items-center'>
								<Building size={32} className='mx-2' />
								<text className='ff-inter fs-4 fw-bold text-nowrap mb-3 mb-md-0'>
									{loanAmount.toLocaleString("pl-PL")} PLN
								</text>
							</div>
						</Col>
					</Col>
					<Col className='d-flex flex-column align-items-center'>
						<text className='fs-5 fw-regular ff-inter'>Odsetki: </text>
						<Col className='d-flex flex-row align-items-center'>
							<div className='d-flex flex-column flex-md-row align-items-center'>
								<CurrencyExchange size={32} className='mx-2' />
								<text className='ff-inter fs-4 fw-bold text-nowrap'>
									{interest.toLocaleString("pl-PL")} PLN
								</text>
							</div>
						</Col>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
