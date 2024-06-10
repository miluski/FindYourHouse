import { useEffect, useRef, useState } from "react";
import { Container, Col, Image, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { finalizePayment } from "./finalizePayment";
import Header from "../../components/Header/Header";
import FooterView from "../../components/Footer/FooterView";
import { Payment } from "../../utils/types/Payment";
import { addOffer } from "./addOffer";
import { handleRegisterOfflineTransaction } from "./handleRegisterOfflineTransaction";

export default function PaymentView() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastOrderIDRef = useRef<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<String | null>(null);
  const [isEnded, setIsEnded] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const orderID = params.get("token");
    const operation = localStorage.getItem("operation");
    setTimeout(() => {
      navigate("/flats");
    }, 10000);
    if (orderID && orderID !== lastOrderIDRef.current) {
      (async () => {
        lastOrderIDRef.current = orderID;
        const paymentObject: Number | Payment = await finalizePayment(orderID);
        !(paymentObject instanceof Number) && paymentObject
          ? setPaymentStatus(paymentObject.status || null)
          : null;
        if (
          !(paymentObject instanceof Number) &&
          paymentObject &&
          paymentObject.status === "DENIED"
        ) {
          localStorage.removeItem("offerCredentials");
          navigate("/cancelled-payment");
        } else if (
          !(paymentObject instanceof Number) &&
          paymentObject &&
          paymentObject.status === null
        ) {
          await handleRegisterOfflineTransaction();
        } else {
          const offerObject = JSON.parse(
            localStorage.getItem("offerCredentials") ?? "",
          );
          await addOffer(offerObject);
        }
        setIsEnded(true);
      })();
    } else if (operation === "checkoutFailed") {
      setIsEnded(true);
      (async () => await handleRegisterOfflineTransaction())();
    }
  }, [location]);
  return (
    <>
      <Header />
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5 ">
        <Col className="text-center ">
          {paymentStatus === "COMPLETED" ? (
            <>
              <Image src="../../src/assets/accept.png" />
              <Container className="fs-1 d-flex flex-column justify-content-center align-items-center fw-bold">
                <p className="mt-4 ">
                  Transakcja została pomyślnie zrealizowana!
                </p>
              </Container>
            </>
          ) : isEnded ? (
            paymentStatus === null ? (
              <Container className="d-flex flex-column justify-content-center align-items-center mt-5 ">
                <Col className="text-center ">
                  <Image src="../../src/assets/delete.png" />
                </Col>
                <Container className="fs-1 d-flex flex-column justify-content-center align-items-center fw-bold">
                  <p className="mt-4 ">
                    Płatność została odrzucona i zarejestrowana jako płatność
                    offline.
                  </p>
                </Container>
              </Container>
            ) : (
              <></>
            )
          ) : (
            <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-light opacity-75">
              <Spinner animation="border" role="status" variant="primary" />
            </div>
          )}
        </Col>
      </Container>
      <FooterView fixedBottom />
    </>
  );
}
