import React, { useEffect, useState } from "react";
import HeaderView from "../../components/Header/Header";
import Footer from "../../components/Footer/FooterView";
import { Container } from "react-bootstrap";
import { axiosInstance } from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CHANGE_ACTUAL_SELECTED_OFFER } from "../../utils/ActionTypes";
import { Offer } from "../../utils/types/Offer";

const FlatListView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const [offers, setOffers] = useState<Offer[]>([]);
  const [filters, setFilters] = useState<{
    propertyType: String;
    offerType: String;
    fromPrice: String;
    toPrice: String;
    fromArea: String;
    toArea: String;
    visibility: String;
  }>({
    propertyType: "",
    offerType: "",
    fromPrice: "",
    toPrice: "",
    fromArea: "",
    toArea: "",
    visibility: "",
  });
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {
      propertyType: searchParams.get("propertyType") ?? "",
      offerType: searchParams.get("offerType") ?? "",
      fromPrice: searchParams.get("fromPrice") ?? "",
      toPrice: searchParams.get("toPrice") ?? "",
      fromArea: searchParams.get("fromArea") ?? "",
      toArea: searchParams.get("toArea") ?? "",
      visibility: searchParams.get("visibility") ?? "all",
    };
    setFilters(params);
    (async () => {
      const response = await axiosInstance.get("/api/offers");
      setOffers(response.data);
    })();
  }, []);

  return (
    <>
      <HeaderView />
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {offers
          .filter((offer: Offer) => {
            return (
              (filters.offerType === "" ||
                offer.offerType === filters.offerType) &&
              (filters.propertyType === "" ||
                offer.propertyType === filters.propertyType) &&
              (filters.fromPrice === "" ||
                Number(offer.price) >= Number(filters.fromPrice)) &&
              (filters.toPrice === "" ||
                Number(offer.price) <= Number(filters.toPrice)) &&
              (filters.fromArea === "" ||
                Number(offer.area) >= Number(filters.fromArea)) &&
              (filters.toArea === "" ||
                Number(offer.area) <= Number(filters.toArea)) &&
              (filters.visibility === "" ||
                filters.visibility === "all" ||
                offer.exhibitorEmail === email)
            );
          })
          .map((offer: Offer) => {
            const imgSource = offer.photos[0]
              ? offer.photos[0].filePath
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIgbod9h1RhzVSGZ7YKDOKhMxv4WNDr3NdA&s";
            return offer.canShow ? (
              <div
                key={offer.title}
                className="card mb-3 cursor-pointer w-75 d-flex"
                onClick={() => {
                  dispatch({
                    type: CHANGE_ACTUAL_SELECTED_OFFER,
                    newActualSelectedOffer: offer,
                  });
                  navigate("/flat-view");
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={imgSource}
                      alt={offer.title}
                      className="img-fluid"
                      style={{ width: 500, height: 300 }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h3>{offer.title}</h3>
                        <button
                          className="btn btn-primary "
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "white",
                          }}
                        >
                          <i className="bi bi-heart text-black"></i>
                        </button>
                      </div>
                      <h5 className="card-text">{offer.price} zł</h5>
                      <div className="d-flex flex-row">
                        <p className="card-text">
                          {" "}
                          {offer.city}, {offer.street}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="card-text">
                          {offer.roomCount} pokoje, {offer.area}m,{" "}
                          {offer.pricePerQuadraMeter} zł/m
                        </p>
                      </div>
                      <div
                        style={{
                          overflowWrap: "break-word",
                          wordWrap: "break-word",
                        }}
                      >
                        <br />
                        {offer.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            );
          })}
      </Container>
      <Footer />
    </>
  );
};

export default FlatListView;
