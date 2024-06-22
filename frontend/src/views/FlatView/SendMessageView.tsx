import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OfferState } from "../../utils/types/State";
import {  useState } from "react";
import { sendMessage } from "../../utils/sendMessage";
import { useNavigate } from "react-router-dom";

export const SendMessageView = () => {
	const navigate = useNavigate();
	const { actualSelectedOffer } = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	const [messageContent, setMessageContent] = useState("");
	const user = {
		email: localStorage.getItem("email") ?? "",
		name: localStorage.getItem("name") ?? "",
		surname: localStorage.getItem("surname") ?? "",
		phoneNumber: localStorage.getItem("phoneNumber") ?? "",
	};

	return (
		<>
			<Container className=''>
				<Container className='border border-black '>
					<div
						className='d-flex flex-column align-items-center p-3'
						style={{
							maxWidth: "400px",
							margin: "0 auto",
							backgroundColor: "#f8f9fa",
							borderRadius: "10px",
						}}>
						<div className='d-flex flex-column align-items-center mb-3'>
							<div
								className='rounded-circle bg-secondary'
								style={{ width: "60px", height: "60px" }}></div>
							<h5 className='mt-2'>
								{actualSelectedOffer.exhibitorName}{" "}
								{actualSelectedOffer.exhibitorSurname}
							</h5>
							<small className='text-muted'>ogłoszenie dewelopera</small>
							<p className='mb-0'>
								+48 {actualSelectedOffer.exhibitorPhoneNumber}
							</p>
						</div>
						{actualSelectedOffer.exhibitorEmail !== user.email ? (
							<>
								<textarea
									placeholder='Podaj treść wiadomości'
									className='mb-3'
									onChange={(e) => setMessageContent(e.target.value)}
									style={{ width: 300, height: 150 }}
								/>
								<Button
									variant='warning'
									type='submit'
									className='w-100'
									onClick={async () => {
										const isSended =
											(await sendMessage({
												content: messageContent,
												type: "income",
												user: user,
												fromEmail: actualSelectedOffer.exhibitorEmail ?? "",
												fromNameAndSurname:
													actualSelectedOffer.exhibitorName ??
													"" + " " + actualSelectedOffer.exhibitorSurname ?? "",
											})) &&
											(await sendMessage({
												content: messageContent,
												type: "outcome",
												user: {
													email: actualSelectedOffer.exhibitorEmail ?? "",
													name: actualSelectedOffer.exhibitorName ?? "",
													surname: actualSelectedOffer.exhibitorSurname ?? "",
													phoneNumber:
														actualSelectedOffer.exhibitorPhoneNumber ?? "",
												},
												fromEmail: user.email,
												fromNameAndSurname: user.name + " " + user.surname,
											}));
										isSended ? navigate("/messages") : null;
									}}>
									Wyślij wiadomość
								</Button>{" "}
							</>
						) : (
							<></>
						)}
					</div>
				</Container>
			</Container>
		</>
	);
};
