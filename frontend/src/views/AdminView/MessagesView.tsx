import {
	Badge,
	Button,
	Col,
	Container,
	Pagination,
	Row,
	Table,
} from "react-bootstrap";
import { Message } from "../../utils/types/Message";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../utils/types/State";
import { CHANGE_CURRENT_PAGE } from "../../utils/ActionTypes";
import { useEffect, useState } from "react";
import { retrieveTickets } from "./retrieveTickets";
import { handleAcceptTransaction } from "./handleAcceptTransaction";
import { refuseAcceptTransaction } from "./refuseAcceptTransaction";

const MESSAGES_PER_PAGE = 5;

export default function MessagesView() {
	const dispatch = useDispatch();
	const { currentPage } = useSelector(
		(state: AdminState) => state.adminReducer as unknown as AdminState
	);
	const [hasToReload, setHasToReload] = useState(false);
	const [messagesArray, setMessagesArray] = useState([]);
	const maxPagesNumber = Math.ceil(messagesArray.length / 2);
	const currentMessagesArray = messagesArray.slice(
		(currentPage - 1) * MESSAGES_PER_PAGE,
		currentPage * MESSAGES_PER_PAGE
	);
	useEffect(() => {
		(async () => {
			const tickets = await retrieveTickets();
			setMessagesArray(tickets || []);
		})();
	}, [hasToReload]);
	return (
		<Container fluid className='d-flex flex-column'>
			<Row className='mb-3'>
				<Col className='d-flex align-items-center'>
					<p className='mb-0'>Liczba wiadomości </p>
					<Badge bg='primary' className='ms-2'>
						{messagesArray !== null && messagesArray.length}
					</Badge>
				</Col>
			</Row>
			<Col>
				<Table striped bordered hover className='overflow-scroll'>
					<thead>
						<tr>
							<th className='text-center'>Temat</th>
							<th className='text-center'>Imię klienta</th>
							<th className='text-center'>Kategoria</th>
							<th className='text-center'>ID zlecenia</th>
							<th className='text-center'>Data</th>
							<th className='text-center'>Opcje</th>
						</tr>
					</thead>
					<tbody>
						{currentMessagesArray.map(
							(message: Message, index: number) => (
								console.log(message),
								(
									<tr key={index}>
										<td className='text-center'>{message.topic}</td>
										<td className='text-center'>{message.clientName}</td>
										<td className='text-center'>{message.category}</td>
										<td className='text-center'>{message.offer.id}</td>
										<td className='text-center'>{message.date}</td>
										<td className='d-flex justify-content-center'>
											<Button
												variant='success'
												className='align-self-center mx-5'
												onClick={async () => {
													const isAccepted = await handleAcceptTransaction(
														message.id
													);
													isAccepted
														? setHasToReload(!hasToReload)
														: alert(
																"Wystąpił nieoczekiwany błąd! Spróbuj ponownie później!"
														  );
												}}>
												Zaakceptuj
											</Button>
											<Button
												variant='danger'
												className='align-self-center mx-5'
												onClick={async () => {
													const isDeleted = await refuseAcceptTransaction(
														message.id
													);
													isDeleted
														? setHasToReload(!hasToReload)
														: alert(
																"Wystąpił nieoczekiwany błąd! Spróbuj ponownie później!"
														  );
												}}>
												Odrzuć
											</Button>
										</td>
									</tr>
								)
							)
						)}
					</tbody>
				</Table>
			</Col>
			<Row className='mt-3'>
				<Col>
					<Pagination>
						<Pagination.Prev
							onClick={() => {
								currentPage - 1 >= 1
									? dispatch({
											type: CHANGE_CURRENT_PAGE,
											newCurrentPage: currentPage - 1,
									  })
									: null;
							}}
						/>
						<input
							value={currentPage}
							type='number'
							className='no-arrows'
							onChange={(e) =>
								dispatch({
									type: CHANGE_CURRENT_PAGE,
									newCurrentPage:
										Number(e.target.value) <= 0
											? 1
											: Number(e.target.value) > maxPagesNumber
											? maxPagesNumber
											: Number(e.target.value),
								})
							}
						/>
						<Pagination.Next
							onClick={() => {
								dispatch({
									type: CHANGE_CURRENT_PAGE,
									newCurrentPage:
										currentPage + 1 <= maxPagesNumber
											? currentPage + 1
											: currentPage,
								});
							}}
						/>
					</Pagination>
				</Col>
			</Row>
		</Container>
	);
}
