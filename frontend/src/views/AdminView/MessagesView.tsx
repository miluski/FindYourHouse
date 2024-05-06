import { Badge, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import { Message } from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../utils/types/State";
import { CHANGE_CURRENT_PAGE } from "../../utils/ActionTypes";

const MESSAGES_PER_PAGE = 2;

const exampleMessagesArray = [
	{
		topic: "lorem ipsum dolor",
		clientName: "Kamil Nowak",
		category: "Akceptacja Transakcji",
		jobId: 1,
		date: "12.03.2024",
	},
	{
		topic: "lorem ipsum dolor",
		clientName: "Kamil Nowak",
		category: "Zgłoszenie",
		jobId: 2,
		date: "12.03.2024",
	},
	{
		topic: "lorem ipsum dolor",
		clientName: "Kamil Nowak",
		category: "Anulowanie Transakcji",
		jobId: 3,
		date: "12.03.2024",
	},
	{
		topic: "lorem ipsum dolor",
		clientName: "Kamil Nowak",
		category: "Pomoc ogólna",
		jobId: 4,
		date: "12.03.2024",
	},
	{
		topic: "lorem ipsum dolor",
		clientName: "Kamil Nowak",
		category: "Akceptacja Transakcji",
		jobId: 5,
		date: "15.03.2024",
	},
];

export default function MessagesView() {
	const dispatch = useDispatch();
	const { currentPage, messagesCount } = useSelector(
		(state: AdminState) => state.adminReducer
	);
	const maxPagesNumber = Math.ceil(exampleMessagesArray.length / 2);
	const currentMessagesArray = exampleMessagesArray.slice(
		(currentPage - 1) * MESSAGES_PER_PAGE,
		currentPage * MESSAGES_PER_PAGE
	);
	return (
		<Container fluid className='d-flex flex-column mx-5'>
			<Row className='mb-3'>
				<Col className='d-flex align-items-center'>
					<p className='mb-0'>Liczba wiadomości </p>
					<Badge bg='primary' className='ms-2'>
						{messagesCount}
					</Badge>
				</Col>
			</Row>
			<Col>
				<Table striped bordered hover className='overflow-scroll mr-5'>
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
								<td>{"dupa"}</td>
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
