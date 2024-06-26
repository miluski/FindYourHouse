import "./styles/Picker.css";
import { useDispatch } from "react-redux";
import { PickerProps } from "../../utils/types/PickerProps";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CHANGE_CALCULATED_CREDENTIALS } from "../../utils/ActionTypes";

export const Picker = (props: PickerProps) => {
	const dispatch = useDispatch();
	return (
		<Container>
			<p className='fw-bold fs-5 ff-inter text-wrap'>{props.formLabel}</p>
			<Container fluid='true'>
				<Row fluid='true'>
					<Col xs={12} md={8}>
						<Form.Range
							className='pickerRange d-flex'
							min={props.minRange}
							step={props.stepRange}
							max={props.maxRange}
							value={props.selectedValue}
							onChange={(event) => {
								dispatch({
									type: props.dispatchType,
									newSelectedValue: event.target.value,
								});
								dispatch({ type: CHANGE_CALCULATED_CREDENTIALS });
							}}
						/>
					</Col>
					<Col xs={12} md={4} className='text-right'>
						<p className='text-nowrap ff-inter fs-6 fw-bold'>
							{props.value}
						</p>
					</Col>
				</Row>
				<Row className='d-flex justify-content-between'>
					<Col xs={6}>
						<p className='text-nowrap d-none d-md-block fs-7 ff-inter'>
							{props.minValue}
						</p>
					</Col>
					<Col xs={6} className='text-right'>
						<p className='text-nowrap d-none d-md-block fs-7 ff-inter mx-3'>
							{props.maxValue}
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
