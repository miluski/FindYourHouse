import { Container, Col } from "react-bootstrap";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotAuthorizedView() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <HeaderView />
      <Container fluid>
        <Col
          fluid
          className="d-flex flex-column align-items-center justify-content-center vh-75"
        >
          <h1>401</h1>
          <p>Dostep do zawartości strony wymaga uwierzytelnienia</p>
        </Col>
      </Container>
      <FooterView fixedBottom />
    </>
  );
}
