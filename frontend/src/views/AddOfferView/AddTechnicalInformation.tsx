import { Col, Container, Form } from "react-bootstrap";
import { ChooseRoomQuantity } from "./ChooseRoomsQuantity";
import { SeparateLine } from "./SeparateLine";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_AREA,
	CHANGE_CAUTION,
	CHANGE_PRICE,
	CHANGE_RENT,
} from "../../utils/ActionTypes";
import { OfferState } from "../../utils/types/State";

export const AddTechnicalInformation = () => {
	const dispatch = useDispatch();
	const { price, rent, caution, area } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<Container fluid="true" data-testid="addTechnicalInformation">
			<text className='fs-5 fw-bold'> Informacje techniczne </text>
			<SeparateLine />
			<Container fluid="true" className='d-flex flex-column'>
				<Container fluid="true" className='d-flex flex-row'>
					<Container className='d-flex flex-column mx-5'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
							<text>Wprowadź cenę w zł</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<Form.Control
							type='number'
							className='w-26 mb-1 mt-2 shadow border-black'
							min={100}
							defaultValue={price}
							onChange={(event) =>
								dispatch({
									type: CHANGE_PRICE,
									newPrice: Number(event.target.value),
								})
							}
						/>
						{Number(price) <= 99 ? (
							<div className='text-danger text-center mb-2'>Wprowadź poprawną cenę!</div>
						) : (
							<></>
						)}
					</Container>
					<Container className='d-flex flex-column mx-5'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
							<text>Wprowadź czynsz w zł</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<Form.Control
							type='number'
							className='w-26 mb-1 mt-2 shadow border-black'
							min={50}
							defaultValue={rent}
							onChange={(event) =>
								dispatch({
									type: CHANGE_RENT,
									newRent: Number(event.target.value),
								})
							}
						/>
						{Number(rent) <= 49 ? (
							<div className='text-danger text-center mb-2'>Wprowadź poprawny czynsz!</div>
						) : (
							<div className="mb-4"/>
						)}
					</Container>
					<Container className='d-flex flex-column mx-5'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
							<text>Wprowadź kaucję</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<Form.Control
							type='number'
							className='w-26 mb-1 mt-2 shadow border-black'
							min={50}
							defaultValue={caution}
							onChange={(event) =>
								dispatch({
									type: CHANGE_CAUTION,
									newCaution: Number(event.target.value),
								})
							}
						/>
						{Number(caution) <= 49 ? (
							<div className='text-danger text-center mb-2'>Wprowadź poprawną kaucję!</div>
						) : (
							<></>
						)}
					</Container>
				</Container>
				<Container fluid="true" className='d-flex flex-row mx-3'>
					<Col md={4} className='mx-5 w-27'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1'>
							<text>Wprowadź powierzchnię w m2</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<Form.Control
							type='number'
							className='mb-1 mt-2 shadow border-black'
							min={10}
							defaultValue={area}
							onChange={(event) =>
								dispatch({
									type: CHANGE_AREA,
									newArea: Number(event.target.value),
								})
							}
						/>
						{Number(area) <= 9 ? (
							<div className='text-danger text-center mb-2'>Wprowadź poprawną powierzchnię!</div>
						) : (
							<></>
						)}
					</Col>
					<Col md={4} className='mx-5'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1'>
							<text>Wybierz ilość pokoi</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<ChooseRoomQuantity />
					</Col>
				</Container>
			</Container>
		</Container>
	);
};
