import { Col, Container } from "react-bootstrap";
import { Tile } from "../../utils/types/Tile";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../utils/types/State";
import { CHANGE_SELECTED_TITLE } from "../../utils/ActionTypes";

const statisticsTiles = [
	{
		count: 23,
		title: "KOLEJKA",
		textColor: "#FF7A50",
	},
	{
		count: 52,
		title: "NOWE",
		textColor: "#7331FF",
	},
	{
		count: 70,
		title: "ROZPATRZANE",
		textColor: "#22E4FF",
	},
	{
		count: 100,
		title: "UKOŃCZONE",
		textColor: "#2EBC0A",
	},
];

export default function StatisticsView() {
	const dispatch = useDispatch();
	const { selectedTitle } = useSelector(
		(state: AdminState) => state.adminReducer
	);
	return (
		<Container fluid className='d-flex flex-column mt-3 shadow-md'>
			<text className='ff-inter fs-3 fw-light mt-3 mx-md-3'>
				Nowe wiadomości
			</text>
			<Col fluid className='d-flex flex-row flex-xs-column m-md-3 w-sm-25'>
				{statisticsTiles.map((tile: Tile, index: number) => (
					<Col
						key={index}
						className={`d-flex flex-column shadow-lg m-1 bg-white cursor-pointer py-2 rounded-3 align-items-center ${
							tile.title === "NOWE" || tile.title === "KOLEJKA" ? "px-sm-3" : ""
						}`}
						style={{
							borderColor: selectedTitle === tile.title ? "#FFE604" : "#FFFFFF",
							borderWidth: 1,
							borderStyle: "solid",
						}}
						onClick={() =>
							dispatch({
								type: CHANGE_SELECTED_TITLE,
								newSelectedTitle: tile.title,
							})
						}>
						<text>{tile.count}</text>
						<Col style={{ color: tile.textColor }}>{tile.title}</Col>
					</Col>
				))}
			</Col>
		</Container>
	);
}
