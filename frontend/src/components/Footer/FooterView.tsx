import { Col, Container } from "react-bootstrap";
import {
  EnvelopeOpen,
  Facebook,
  GeoAlt,
  Instagram,
  Linkedin,
  TelephoneFill,
} from "react-bootstrap-icons";

export default function FooterView({ fixedBottom }: { fixedBottom?: boolean }) {
  return (
    <footer
      className={
        "footer bg-dark-subtle p-2" + (fixedBottom ? " fixed-bottom" : "")
      }
    >
      <Container fluid className="d-flex flex-row">
        <Container className="d-flex flex-column justify-content-center">
          <Container>
            <text className="ff-kreon fs-3 fw-regular">Znajdź swój dach!</text>
          </Container>
          <Container>
            <text className="ff-kreon fs-5 fw-regular">Dołącz do nas</text>
            <Instagram
              className="cursor-pointer mx-2"
              size={32}
              onClick={() => {
                window.location.href = "https://instagram.com";
              }}
            />
            <Facebook
              className="cursor-pointer mx-2"
              size={32}
              onClick={() => {
                window.location.href = "https://facebook.com";
              }}
            />
            <Linkedin
              className="cursor-pointer mx-2"
              size={32}
              onClick={() => {
                window.location.href = "https://linkedin.com";
              }}
            />
          </Container>
        </Container>
        <Container className="w-25 d-flex flex-column ml-5 d-none d-lg-block">
          <Col sm={12} md={10}>
            <TelephoneFill className="my-2 mx-5" size={32} />
            <text className="text-nowrap">+48 456 654 789</text>
          </Col>
          <Col sm={12} md={10}>
            <EnvelopeOpen className="my-2 mx-5" size={32} />
            <text className="text-nowrap">znajdzswojdach@tu.kielce.pl</text>
          </Col>
          <Col sm={12} md={10}>
            <GeoAlt className="my-2 mx-5" size={32} />
            <text className="text-nowrap">plac Wolności 2, 25-367 Kielce</text>
          </Col>
        </Container>
      </Container>
    </footer>
  );
}
