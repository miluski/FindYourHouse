import { Container } from "react-bootstrap";
import FooterView from "../../components/Footer/FooterView";
import StripeView from "./StripeView";
import ContentView from "./ContentView";

export default function AdminView() {
  return (
    <Container fluid className="w-100">
        <StripeView />
        <ContentView />
        <FooterView />
    </Container>
  )
}
