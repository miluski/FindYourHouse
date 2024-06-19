import { Badge, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import { Message } from "../../utils/types/Message";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../utils/types/State";
import { CHANGE_CURRENT_PAGE } from "../../utils/ActionTypes";
import { useEffect, useState } from "react";
import { retrieveTickets } from "./retrieveTickets";

const MESSAGES_PER_PAGE = 5;

export default function MessagesView() {
	const dispatch = useDispatch();
	const { currentPage } = useSelector(
		(state: AdminState) => state.adminReducer as unknown as AdminState
	);
	const [messagesArray, setMessagesArray] = useState([]);
	const maxPagesNumber = Math.ceil(messagesArray.length / 2);
	const currentMessagesArray = messagesArray.slice(
		(currentPage - 1) * MESSAGES_PER_PAGE,
		currentPage * MESSAGES_PER_PAGE
	);
	useEffect(() => {
		(async () => {
			setMessagesArray(await retrieveTickets());
		})();
	}, []);
	return (
		<Container fluid className='d-flex flex-column'>
			<Row className='mb-3'>
				<Col className='d-flex align-items-center'>
					<p className='mb-0'>Liczba wiadomości </p>
					<Badge bg='primary' className='ms-2'>
						{messagesArray.length}
					</Badge>
				</Col>
			</Row>
			<Col>
				<Table striped bordered hover className='overflow-scroll'>
					<thead>
						<tr>
							<th>Temat</th>
							<th>Imię klienta</th>
							<th>Kategoria</th>
							<th>ID zlecenia</th>
							<th>Data</th>
							<th>Opcje</th>
						</tr>
					</thead>
					<tbody>
						{currentMessagesArray.map((message: Message, index: number) => (
							<tr key={index}>
								<td>{message.topic}</td>
								<td>{message.clientName}</td>
								<td>{message.category}</td>
								<td>{message.jobId}</td>
								<td>{message.date}</td>
								<td>
									<button>Zaakceptuj</button>
								</td>
							</tr>
						))}
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
