import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_ROOM_COUNT } from "../../utils/ActionTypes";

export const ChooseRoomQuantity = () => {
	const dispatch = useDispatch();
	return (
		<Form className='mb-2 mx-4 w-83 shadow'>
			<Form.Select
				className='border-black align-content-center'
				onChange={(event) =>
					dispatch({ type: CHANGE_ROOM_COUNT, newRoomCount: Number(event.target.value) })
				}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
			</Form.Select>
		</Form>
	);
};
