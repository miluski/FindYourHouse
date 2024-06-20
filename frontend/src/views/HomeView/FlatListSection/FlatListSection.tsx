import FlatListSubSection from "./FlatListSubSection/FlatListSubSection.tsx";
import Container from "react-bootstrap/Container";
import FlatCard from "../../../components/FlatCard/FlatCard.tsx";
import { useEffect, useState } from "react";
import { OfferState } from "../../../utils/types/State";
import { axiosInstance } from "../../../utils/axiosInstance.ts";
import AuthenticationView from "../../AuthenticationView/AuthenticationView.tsx";
import { CHANGE_ACTUAL_SELECTED_OFFER } from "../../../utils/ActionTypes.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FlatListSection() {
  const [offers, setOffers] = useState<OfferState[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabName, setTabName] = useState("login");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const email = localStorage.getItem("email") || "";

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (tabName: string) => {
    setTabName(tabName);
    setShowModal(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/api/offers");

        // await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(response.data);
        setOffers(response.data);
        console.log(offers);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      <Container
        className={"d-flex flex-column w-100 gap-5 "}
        style={{ marginBottom: "60px" }}
        fluid={"xl"}
      >
        <FlatListSubSection
          title={"Domy za około 300.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          {Array.from({ length: 4 }).map((_, index) => {
            const offer = offers[index];
            return (
              <FlatCard
                key={index}
                loading={loading}
                isNew
                navigate={() => {
                  dispatch({
                    type: CHANGE_ACTUAL_SELECTED_OFFER,
                    newActualSelectedOffer: offer,
                  });
                  navigate("/flat-view");
                }}
                propertyType={offer?.propertyType}
                price={offer?.price?.toString()}
                roomsNumber={offer?.roomCount}
                sqft={offer?.area}
                street={offer?.street}
                city={offer?.city}
                thumbNail={offer?.photos?.[0]?.filePath}
                handleShowModal={handleShowModal}
                email={email}
                offerId={offer?.id}
              />
            );
          })}
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 500.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          {Array.from({ length: 4 }).map((_, i) => {
            const index = i + 4;
            const offer = offers[index];
            return (
              <FlatCard
                key={index}
                loading={loading}
                isNew
                navigate={() => {
                  dispatch({
                    type: CHANGE_ACTUAL_SELECTED_OFFER,
                    newActualSelectedOffer: offer,
                  });
                  navigate("/flat-view");
                }}
                propertyType={offer?.propertyType}
                price={offer?.price?.toString()}
                roomsNumber={offer?.roomCount}
                sqft={offer?.area}
                street={offer?.street}
                city={offer?.city}
                thumbNail={offer?.photos?.[0]?.filePath}
                handleShowModal={handleShowModal}
                email={email}
                offerId={offer?.id}
              />
            );
          })}
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 300.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          {Array.from({ length: 4 }).map((_, i) => {
            const index = i + 8;
            const offer = offers[index];
            return (
              <FlatCard
                key={index}
                loading={loading}
                isNew
                navigate={() => {
                  dispatch({
                    type: CHANGE_ACTUAL_SELECTED_OFFER,
                    newActualSelectedOffer: offer,
                  });
                  navigate("/flat-view");
                }}
                propertyType={offer?.propertyType}
                price={offer?.price?.toString()}
                roomsNumber={offer?.roomCount}
                sqft={offer?.area}
                street={offer?.street}
                city={offer?.city}
                thumbNail={offer?.photos?.[0]?.filePath}
                handleShowModal={handleShowModal}
                email={email}
                offerId={offer?.id}
              />
            );
          })}
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 300.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          {Array.from({ length: 4 }).map((_, i) => {
            const index = i + 12;
            const offer = offers[index];
            return (
              <FlatCard
                key={index}
                loading={loading}
                isNew
                navigate={() => {
                  dispatch({
                    type: CHANGE_ACTUAL_SELECTED_OFFER,
                    newActualSelectedOffer: offer,
                  });
                  navigate("/flat-view");
                }}
                propertyType={offer?.propertyType}
                price={offer?.price?.toString()}
                roomsNumber={offer?.roomCount}
                sqft={offer?.area}
                street={offer?.street}
                city={offer?.city}
                thumbNail={offer?.photos?.[0]?.filePath}
                handleShowModal={handleShowModal}
                email={email}
                offerId={offer?.id}
              />
            );
          })}
        </FlatListSubSection>
      </Container>
      <AuthenticationView
        tabName={tabName}
        setTabName={setTabName}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </section>
  );
}
