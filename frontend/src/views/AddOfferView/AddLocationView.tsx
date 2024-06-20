import { Container, Form } from "react-bootstrap";
import { SeparateLine } from "./SeparateLine";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_APARTMENT_NUMBER,
	CHANGE_CITY,
	CHANGE_HOUSE_NUMBER,
	CHANGE_STREET,
} from "../../utils/ActionTypes";
import { useState } from "react";
import { OfferState } from "../../utils/types/State";

export const AddLocationView = () => {
	const dispatch = useDispatch();
	const { city, street, houseNumber, propertyType, apartmentNumber } =
		useSelector(
			(state: OfferState) => state.offerReducer as unknown as OfferState
		);
	const [isProvided, setIsProvided] = useState({
		city: false,
		street: false,
		houseNumber: false,
		apartment: false,
	});
	return (
		<Container fluid="true" data-testid="addLocationView">
			<text className='fs-5 fw-bold'>Lokalizacja </text>
			<SeparateLine />
			<Container fluid="true" className='d-flex flex-row'>
				<Container className='d-flex flex-column mx-5'>
					<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
						<text>Wprowadź miasto</text>
						<span className='text-danger px-1'>*</span>
					</Form.Label>
					<Form.Control
						type='text'
						className='w-26 mb-1 mt-2 shadow border-black'
						placeholder='np. Warszawa'
						onChange={(event) => {
							setIsProvided((prevValues) => ({ ...prevValues, city: false }));
							dispatch({ type: CHANGE_CITY, newCity: event.target.value });
						}}
						onBlur={() =>
							setIsProvided((prevValues) => ({
								...prevValues,
								city: true,
							}))
						}
						required
					/>
					{isProvided.city && city.length <= 2 ? (
						<div className='text-danger text-center mb-2'>Wprowadź poprawne miasto!</div>
					) : (
						<div className='mb-4' />
					)}
				</Container>
				<Container className='d-flex flex-column mx-5'>
					<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
						<text>Wprowadź ulicę</text>
						<span className='text-danger px-1'>*</span>
					</Form.Label>
					<Form.Control
						type='text'
						className='w-26 mb-1 mt-2 shadow border-black'
						placeholder='np. Aleja Tysiąclecia Państwa Polskiego'
						onChange={(event) => {
							setIsProvided((prevValues) => ({ ...prevValues, street: false }));
							dispatch({ type: CHANGE_STREET, newStreet: event.target.value });
						}}
						onBlur={() =>
							setIsProvided((prevValues) => ({
								...prevValues,
								street: true,
							}))
						}
					/>
					{isProvided.street && street.length <= 3 ? (
						<div className='text-danger text-center mb-2'>Wprowadź poprawną ulicę!</div>
					) : (
						<></>
					)}
				</Container>
				<Container className='d-flex flex-column mx-5'>
					<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
						<text>
							Wprowadź numer {propertyType === "Dom" ? "domu" : "nieruchomości"}
						</text>
						<span className='text-danger px-1'>*</span>
					</Form.Label>
					<Form.Control
						type='number'
						className='w-26 mb-1 mt-2 shadow border-black'
						min={1}
						defaultValue={1}
						max={10000}
						onChange={(event) => {
							setIsProvided((prevValues) => ({
								...prevValues,
								houseNumber: false,
							}));
							dispatch({
								type: CHANGE_HOUSE_NUMBER,
								newHouseNumber: Number(event.target.value),
							});
						}}
						onBlur={() =>
							setIsProvided((prevValues) => ({
								...prevValues,
								houseNumber: true,
							}))
						}
					/>
					{isProvided.houseNumber && Number(houseNumber) < 0 ? (
						<div className='text-danger text-center mb-2'>
							Wprowadź poprawny numer{" "}
							{propertyType === "Dom" ? "domu" : "nieruchomości"}!
						</div>
					) : (
						<></>
					)}
				</Container>
				{propertyType === "Mieszkanie" ? (
					<Container className='d-flex flex-column mx-5'>
						<Form.Label className='d-flex justify-content-center align-items-center fs-5 mt-6 mb-1 w-100'>
							<text>Wprowadź numer mieszkania</text>
							<span className='text-danger px-1'>*</span>
						</Form.Label>
						<Form.Control
							type='number'
							className='w-26 mb-1 mt-2 shadow border-black'
							min={1}
							defaultValue={1}
							max={10000}
							onChange={(event) => {
								setIsProvided((prevValues) => ({
									...prevValues,
									apartment: false,
								}));
								dispatch({
									type: CHANGE_APARTMENT_NUMBER,
									newApartmentNumber: event.target.value,
								});
							}}
							onBlur={() =>
								setIsProvided((prevValues) => ({
									...prevValues,
									apartment: true,
								}))
							}
						/>
						{isProvided.apartment && Number(apartmentNumber) < 0 ? (
							<div className='text-danger text-center mb-2'>
								Wprowadź poprawny numer mieszkania!
							</div>
						) : (
							<></>
						)}
					</Container>
				) : (
					<></>
				)}
			</Container>
		</Container>
	);
};
