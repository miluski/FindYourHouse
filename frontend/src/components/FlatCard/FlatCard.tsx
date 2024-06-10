import { Badge, Card } from "react-bootstrap";
import flatThumbNail from "../../assets/flatThumbNail.webp";
import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";

export default function FlatCard() {
  return (
    <Card
      className={"w-25 rounded-4 border-0 "}
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <div className={"position-relative"}>
        <Badge
          pill
          className={"position-absolute top-0 start-0 mt-2 ms-2"}
          bg="primary"
        >
          Nowość
        </Badge>
        <Card.Img
          className={"rounded-top-4"}
          variant="top"
          src={flatThumbNail}
        />
        <button
          className={
            "position-absolute  bg-transparent border-0 rounded-circle bottom-0 end-0 me-2 mb-2"
          }
        >
          <RoundedIcon
            className={" bg-white p-4 "}
            iconColor={"text-dark"}
            icon={"bi-heart text-dark fs-4 "}
          />
        </button>
      </div>
      <Card.Body
        className={"d-flex flex-column"}
        style={{ padding: "12px 16px", gap: "4px" }}
      >
        <div className={"d-flex align-items-center"}>
          <div
            style={{ width: "12px", height: "12px" }}
            className={" bg-success d-inline rounded-circle me-1"}
          ></div>
          <div className={"fs-7"}>Single-Family-Home</div>
        </div>
        <div className={"fw-bold fs-4"}>$359,900</div>
        <div className={"d-flex"} style={{ gap: "16px" }}>
          <div>
            <span className={"me-1 fw-bold"}>3</span>
            sypialnie
          </div>
          <div>
            <span className={"me-1 fw-bold"}>2</span>
            łazienki
          </div>
          <div>
            <span className={"me-1 fw-bold"}>1392</span>
            sqft
          </div>
        </div>
        <div className={"fs-7"}>
          <div>2709 Privada Dr</div>
          <div>The Villages, FL 32162</div>
        </div>
      </Card.Body>
    </Card>
  );
}
