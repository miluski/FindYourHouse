import { Badge, Card } from "react-bootstrap";
import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FlatCard.css";
import loadingPhoto from "../../assets/loadingPhoto.svg";
import PlaceHolder from "../PlaceHolder/PlaceHolder.tsx";

export default function FlatCard({
  isNew,
  propertyType,
  price,
  roomsNumber,
  sqft,
  street,
  city,
  thumbNail,
  link,
  loading,
}: {
  isNew: boolean;
  propertyType: string;
  price: string;
  roomsNumber: number;
  sqft: number;
  street: string;
  city: string;
  thumbNail: string;
  link: string;
  loading: boolean;
}) {
  const route = useNavigate();
  const [like, setLike] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <Card
      tabIndex={0}
      className={"w-25 rounded-4 border-0 cursor-pointer flatCard"}
      onClick={() => route(link)}
    >
      <div className={"position-relative"}>
        {isNew && !loading && (
          <Badge
            pill
            className={"position-absolute top-0 start-0 mt-2 ms-2 fw-semibold"}
            bg="primary"
          >
            Nowość
          </Badge>
        )}
        <Card.Img
          className={"rounded-top-4 cardImg"}
          variant="top"
          src={loading ? loadingPhoto : thumbNail}
        />
        {loading ? (
          <></>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLike((prevState) => !prevState);
            }}
            className={
              "position-absolute z-1  border-0 rounded-circle bottom-0 end-0 me-2 mb-2 p-0 "
            }
          >
            <RoundedIcon
              className={" bg-white p-4 myListButton"}
              iconColor={"text-dark"}
              icon={`${like ? "bi-check-lg" : "bi-heart"} text-dark fs-4 `}
            />
          </button>
        )}
      </div>
      <Card.Body className={"d-flex flex-column flatCardBody"}>
        <div className={"d-flex align-items-center "}>
          {loading ? (
            <PlaceHolder width={"col-7"} />
          ) : (
            <>
              <div
                className={
                  "circleBadge bg-success d-inline rounded-circle me-1"
                }
              ></div>
              <div className={"fs-7"}>{propertyType}</div>
            </>
          )}
        </div>
        {loading ? (
          <PlaceHolder className={"flex-grow-1"} width={"col-10"} />
        ) : (
          <>
            <div className={"fw-bold fs-4 d-flex"}>
              <div className={"price me-1"}>{price}</div> zł
            </div>
            <div className={"d-flex gap-3"}>
              <div className={"d-flex"}>
                <div className={"me-1 fw-bold roomsNumber"}>{roomsNumber}</div>
                pomieszczenia
              </div>
              <div className={"d-flex"}>
                <span className={"me-1 fw-bold flatSize"}>{sqft}</span>
                m²
              </div>
            </div>
          </>
        )}
        {loading ? (
          <PlaceHolder className={"h-25"} width={"col-6"} />
        ) : (
          <div className={"fs-7"}>
            <div className={"street"}>{street}</div>
            <div className={"d-flex"}>
              <div className={"city "}>{city}</div>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
