import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OfferState } from "../../utils/types/State";

export const BottomAdvertismentCredentials = () => {
    const { actualSelectedOffer } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<>
			<div
				className='d-flex flex-column p-3'
				style={{ maxWidth: "800px", margin: "0 auto" }}>
				<div>
					<h5>Szczegóły ogłoszenia</h5>
					<Table bordered hover size='sm'>
						<tbody>
							<tr>
								<td>Powierzchnia</td>
								<td>{actualSelectedOffer.area} m²</td>
							</tr>
							<tr>
								<td>Forma własności</td>
								<td>pełna własność</td>
							</tr>
							<tr>
								<td>Liczba pokoi</td>
								<td>{actualSelectedOffer.roomCount}</td>
							</tr>
							<tr>
								<td>Stan wykończenia</td>
								<td>do zamieszkania</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className='mt-4'>
					<h5>Opis</h5>
					<p>
						{actualSelectedOffer.description}
					</p>
				</div>
			</div>
		</>
	);
};
