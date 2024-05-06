import { pl } from "date-fns/locale/pl";
import { AdminState } from "../../utils/types/State";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_START_DATE } from "../../utils/ActionTypes";
import DatePicker, { registerLocale } from "react-datepicker";
import { Button, Col, Container, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function SearcherView() {
	registerLocale("pl", pl);
	const dispatch = useDispatch();
	const { startDate } = useSelector((state: AdminState) => state.adminReducer);
	return (
		<Container fluid className='mb-5'>
			<Form action=''>
				<Form.Group className='mx-3 d-flex flex-row'>
					<Form.Control placeholder='Wyszukaj za pomocą: imienia, nazwiska itd' />
					<DatePicker
						selected={startDate}
						onChange={(date: Date) =>
							dispatch({ type: CHANGE_START_DATE, newStartDate: date })
						}
						locale='pl'
						dateFormat='P'
						placeholderText='Otrzymano - wybierz datę'
					/>
				</Form.Group>
				<Form.Group className='mx-3 d-flex flex-row'>
					<Form.Select className='w-80'></Form.Select>
					<Form.Control className='w-25' />
					<Col xs={12} lg={4} className='p-0 ps-lg-1 w-15'>
						<Button
							type='submit'
							className='ff-inter btn-reversed-primary rounded-1 fw-bold w-100'>
							ZASTOSUJ
						</Button>
					</Col>
				</Form.Group>
			</Form>
		</Container>
	);
}
