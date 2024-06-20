import FlatListSubSection from "./FlatListSubSection/FlatListSubSection.tsx";
import Container from "react-bootstrap/Container";
import FlatCard from "../../../components/FlatCard/FlatCard.tsx";
import thumbNail from "../../../assets/flatThumbNail.webp";
import { useEffect, useState } from "react";
import { OfferState } from "../../../utils/types/State";
import { axiosInstance } from "../../../utils/axiosInstance.ts";

export default function FlatListSection() {
  const [offers, setOffers] = useState<OfferState[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/api/offers");

        // await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(response.data);
        setOffers(response.data);
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
          <FlatCard
            loading={loading}
            isNew
            link={"/notImplemented"}
            propertyType={offers[0]?.propertyType}
            price={offers[0]?.price.toString()}
            roomsNumber={offers[0]?.roomCount}
            sqft={offers[0]?.area}
            street={offers[0]?.street}
            city={offers[0]?.city}
            thumbNail={offers[0]?.photos[0].filePath}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 500.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 300.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
        </FlatListSubSection>
        <FlatListSubSection
          title={"Domy za około 300.000 zł"}
          subTitle={"Zobacz wszystkie w Kielcach"}
        >
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />{" "}
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
          <FlatCard
            isNew
            link={"#"}
            propertyType={"Dom Jednorodzinny"}
            price={"294.990"}
            roomsNumber={2}
            sqft={1121}
            street={"Paderewskiego 19"}
            city={"Kielce"}
            thumbNail={thumbNail}
          />
        </FlatListSubSection>
      </Container>
    </section>
  );
}
