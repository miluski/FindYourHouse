import { Container } from "react-bootstrap";
import StatisticsView from "./StatisticsView";
import SearcherView from "./SearcherView";

export default function ContentView() {
	return (
		<Container fluid className='bg-gray mt-1'>
			<StatisticsView />
            <SearcherView />
		</Container>
	);
}
