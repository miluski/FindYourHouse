import { Container } from "react-bootstrap";
import "../../index.css";
import { GeoAltFill } from "react-bootstrap-icons";
import { Photo } from "../../utils/types/Photo";
import { OfferState } from "../../utils/types/State";
import { useSelector } from "react-redux";

export const FlatPhotos = () => {
	const { actualSelectedOffer } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<>
			<Container className='mb-3'>
				<h2>{actualSelectedOffer.title}</h2>
			</Container>

			<Container className='border border-black d-flex justify-content-center mb-3'>
				<img
					src={actualSelectedOffer.photos[0].filePath}
					alt='obraz'
					className='rounded'
					style={{ width: 500, height: 300 }}
				/>
			</Container>
			<Container className='d-flex justify-content-between'>
				{actualSelectedOffer.photos.map((photo: Photo, index: number) =>
					index === 0 ? (
						<></>
					) : (
						<div key={index} className='border border-black p-2 mb-5 onclick '>
							<img
								src={photo.filePath}
								alt={`User upload ${index + 1}`}
								className='rounded img-fluid'
							/>
						</div>
					)
				)}
			</Container>
			<Container className='d-flex '>
				<GeoAltFill className=' h-21' />
				<h3>
					{" "}
					ul. {actualSelectedOffer.street} {actualSelectedOffer.apartmentNumber}
					/{actualSelectedOffer.houseNumber}, {actualSelectedOffer.city}
				</h3>
			</Container>
			<Container>
				<h2 className='mt-2 align-items-center  d-flex'>
					{actualSelectedOffer.price} zł
				</h2>
			</Container>
		</>
	);
};
