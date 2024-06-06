import { Container, Form } from "react-bootstrap";
import { SeparateLine } from "./SeparateLine";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TITLE } from "../../utils/ActionTypes";
import { OfferState } from "../../utils/types/State";
import { useState } from "react";

export const AddOfferTitleView = () => {
	const dispatch = useDispatch();
	const [isProvided, setIsProvided] = useState(false);
	const { title } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<Container fluid>
			<SeparateLine />
			<Container fluid className='w-25 mb-5 mt-3'>
				<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
					<text>Wprowadź tytuł ogłoszenia</text>
					<span className='text-danger px-1'>*</span>
				</Form.Label>
				<Form.Control
					className='shadow border-black'
					type='text'
					placeholder='np. Super mieszkanie'
					onChange={(event) => {
						setIsProvided(false);
						dispatch({ type: CHANGE_TITLE, newTitle: event.target.value });
					}}
					onBlur={() => setIsProvided(true)}
				/>
				{isProvided && title.length <= 4 ? (
					<div className='text-danger text-center mt-2'>Wprowadź poprawny tytuł!</div>
				) : (
					<></>
				)}
			</Container>
		</Container>
	);
};
