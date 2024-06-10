import FlatListSubSection from "./FlatListSubSection/FlatListSubSection.tsx";
import Container from "react-bootstrap/Container";

export default function FlatListSection() {
  return (
    <section>
      <Container
        className={"d-flex flex-column w-100 gap-5 "}
        style={{ marginBottom: "60px" }}
        fluid={"xl"}
      >
        <FlatListSubSection />
        <FlatListSubSection />
        <FlatListSubSection />
        <FlatListSubSection />
      </Container>
    </section>
  );
}
