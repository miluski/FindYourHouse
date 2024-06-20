import { Badge, Card } from "react-bootstrap";
import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";
import { useEffect, useState } from "react";
import "./FlatCard.css";
import loadingPhoto from "../../assets/loadingPhoto.svg";
import PlaceHolder from "../PlaceHolder/PlaceHolder.tsx";
import { axiosInstance } from "../../utils/axiosInstance";

export default function FlatCard({
  isNew,
  propertyType,
  price,
  roomsNumber,
  sqft,
  street,
  city,
  thumbNail,
  navigate,
  loading,
  handleShowModal,
  email,
  offerId,
}: {
  isNew: boolean;
  propertyType: string;
  price: string;
  roomsNumber: number;
  sqft: number;
  street: string;
  city: string;
  thumbNail: string;
  navigate: Function;
  loading: boolean;
  handleShowModal: Function;
  email: string;
  offerId: number;
}) {
  const [like, setLike] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (email && !loading && thumbNail !== undefined) {
      axiosInstance
        .get(`/api/favorites/${email}`)
        .then((response) => {
          const favorites = response.data;
          console.log(favorites);
          const isFavorite = favorites.some((fav: any) => fav.id === offerId);
          setLike(isFavorite);
        })
        .catch((error) => {
          console.error("Error fetching favorites:", error);
        });
    }
  }, [email, loading, thumbNail, offerId]);

  const handleFavoriteToggle = async (e: any) => {
    e.stopPropagation();
    if (token !== "" && token !== null) {
      try {
        if (like) {
          await axiosInstance.delete(`/api/favorites/${email}/${offerId}`);
        } else {
          await axiosInstance.post(`/api/favorites/${email}/${offerId}`);
        }
        setLike(!like);
      } catch (error) {
        console.error("Error updating favorite status:", error);
      }
    } else {
      handleShowModal("login");
    }
  };

  return (
    <Card
      tabIndex={0}
      className={"w-25 rounded-4 border-0 cursor-pointer flatCard"}
      onClick={() => {
        if (!loading && thumbNail !== undefined) {
          {
            navigate();
          }
        }
      }}
    >
      <div className={"position-relative"}>
        {isNew && !loading && thumbNail !== undefined && (
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
          src={loading || thumbNail === undefined ? loadingPhoto : thumbNail}
        />
        {loading || thumbNail === undefined ? (
          <></>
        ) : (
          <button
            type={"button"}
            onClick={handleFavoriteToggle}
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
          {loading || propertyType === undefined ? (
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
        {loading ||
        price === undefined ||
        roomsNumber === undefined ||
        sqft === undefined ? (
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
        {loading || street === undefined || city === undefined ? (
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
