import { Container, Form } from "react-bootstrap";
import { SeparateLine } from "./SeparateLine";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_DESCRIPTION } from "../../utils/ActionTypes";
import { OfferState } from "../../utils/types/State";
import { useState } from "react";

export default function AddDescriptionView() {
	const dispatch = useDispatch();
	const [isProvided, setIsProvided] = useState(false);
	const { description } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<Container fluid>
			<text className='fs-5 fw-bold'>Opis </text>{" "}
			<Container fluid className='d-flex flex-column align-items-center'>
				<SeparateLine />
				<Container className='d-flex flex-column mx-5 w-75'>
					<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1'>
						<text>Wprowadź opis</text>
						<span className='text-danger px-1'>*</span>
					</Form.Label>
					<Form.Control
						onChange={(event) => {
							setIsProvided(false);
							dispatch({ type: CHANGE_DESCRIPTION, newDescription: event.target.value });
						}}
						onBlur={() => setIsProvided(true)}
						as='textarea'
						rows={4}
						className='mb-1 mt-2 shadow border-black'
						placeholder='np. Czysta 4 to nowoczesna inwestycja klasy premium zlokalizowana w centrum Wrocławia, oferująca wielowymiarowy komfort życia w mieście. W prostej formie łączy piękno nowoczesnej architektury z funkcjonalnością rozwiązań służących mieszkańcom.'
						required
					/>
					{isProvided && description.length <= 49 ? (
						<div className='text-danger text-center mb-2'>
							Opis musi mieć conajmniej 50 znaków!
						</div>
					) : (
						<div className='mb-4' />
					)}
				</Container>
			</Container>
		</Container>
	);
}
