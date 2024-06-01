import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_OFFER_TYPE } from "../../utils/ActionTypes";

export const ChooseOfferTypeView = () => {
	const dispatch = useDispatch();
	return (
		<Container className='w-25 mb-5 mt-2'>
			<Form.Select
				required
				onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
					dispatch({
						type: CHANGE_OFFER_TYPE,
						newOfferType: event.target.value,
					});
				}}>
				<option value='Wynajem'>Wynajem</option>
				<option value='Sprzedaż'>Sprzedaż</option>
			</Form.Select>
		</Container>
	);
};
