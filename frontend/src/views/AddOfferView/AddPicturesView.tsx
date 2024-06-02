import { Col, Container, Row } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { SeparateLine } from "./SeparateLine";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PHOTOS } from "../../utils/ActionTypes";
import { OfferState } from "../../utils/types/State";
import { Photo } from "../../utils/types/Photo";
import { uploadFile } from "./uploadFile";

export const AddPicturesView = () => {
	const dispatch = useDispatch();
	const { photos } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	const handleClick = (value: number) => {
		const input = document.getElementById(
			`file-input-${value}`
		) as HTMLInputElement;
		input.click();
	};
	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const file = event.target.files?.[0];
		if (file) {
			try {
				const filePath = await uploadFile(file);
				const photo: Photo = {
					fileName: file.name,
					filePath: filePath,
					fileSize: file.size,
					fileType: file.type,
				};
				const newPhotos = [...photos];
				newPhotos[index] = photo;
				dispatch({ type: CHANGE_PHOTOS, newPhotos: newPhotos });
			} catch (error) {
				console.error("File upload failed", error);
			}
		}
	};
	const cameraArray = Array.from({ length: 10 }, (_, index) => index + 1);
	return (
		<Container fluid>
			<text className='fs-5 fw-bold'> Zdjęcia </text>
			<SeparateLine />
			<Row className='d-flex justify-content-between cursor-pointer mb-5'>
				{cameraArray.map((cameraIndex: number) => (
					<Col
						className='mb-3 mt-3 border border-black d-flex justify-content-center align-items-between button mx-3 shadow'
						key={cameraIndex}
						onClick={() => handleClick(cameraIndex)}>
						{photos[cameraIndex] ? (
							<img
								src={photos[cameraIndex].filePath}
								alt='Selected'
								style={{ width: "100px", height: "100px", objectFit: "cover" }}
							/>
						) : (
							<Camera size={64} />
						)}
						<input
							type='file'
							id={`file-input-${cameraIndex}`}
							style={{ display: "none" }}
							accept='.png,.jpg,.jpeg'
							onChange={(event) => handleFileChange(event, cameraIndex)}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};
