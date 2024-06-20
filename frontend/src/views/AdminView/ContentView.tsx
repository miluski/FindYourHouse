import { Container } from "react-bootstrap";
import MessagesView from "./MessagesView";

export default function ContentView() {
  return (
    <Container
      fluid='true'
      className="d-flex flex-column flex-fill mt-2 p-0 bg-light w-100 h-full border-top border-black"
      data-testid="contentView"
    >
      <MessagesView />
    </Container>
  );
}
