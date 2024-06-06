import { Col, Row } from "react-bootstrap";
import { BuildingFill, HouseDoorFill } from "react-bootstrap-icons";
import { PiGarageBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PROPERTY_TYPE } from "../../utils/ActionTypes";
import { OfferState } from "../../utils/types/State";

const apartmentTypeTiles = ["Dom", "Mieszkanie", "Garaż"];

export default function ChooseApartmentType() {
	const dispatch = useDispatch();
	const { propertyType } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	const handleChangePropertyType = (propertyType: string) => {
		dispatch({ type: CHANGE_PROPERTY_TYPE, newPropertyType: propertyType });
	};
	return (
		<Row className='d-flex justify-content-between '>
			{apartmentTypeTiles.map((renderedPropertyType: string, index: number) => (
				<Col
					className='border border-black shadow-md m-4 p-4 cursor-pointer button icons-position'
					style={{
						backgroundColor:
							propertyType === renderedPropertyType ? "whitesmoke" : "white",
					}}
					key={index}
					onClick={() => handleChangePropertyType(renderedPropertyType)}>
					{renderedPropertyType}
					{renderedPropertyType === "Dom" ? (
						<HouseDoorFill size={32} />
					) : renderedPropertyType === "Mieszkanie" ? (
						<BuildingFill
							size={32}
						/>
					) : renderedPropertyType === "Garaż" ? (
						<PiGarageBold
							size={32}
						/>
					) : (
						<></>
					)}
				</Col>
			))}
		</Row>
	);
}
