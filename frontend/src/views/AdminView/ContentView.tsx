import StatisticsView from "./StatisticsView";
import SearcherView from "./SearcherView";
import { Container } from "react-bootstrap";

export default function ContentView() {
  return (
    <Container
      fluid
      className="d-flex flex-column mt-2 p-0 bg-light w-full w-100 border-top border-black"
    >
      <StatisticsView />
      <SearcherView />
    </Container>
  );
}
