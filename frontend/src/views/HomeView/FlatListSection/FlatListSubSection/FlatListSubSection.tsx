import FlatCard from "../../../../components/FlatCard/FlatCard.tsx";

export default function FlatListSubSection() {
  return (
    <section className={"d-flex flex-column"}>
      <div className={"mb-3 "}>
        <h2 className={"m-0 fw-bold fs-4"}>Homes around $366,900</h2>
        <a className={"d-inline"} href="#">
          View all in The Villages, FL
        </a>
      </div>
      <div className={"d-flex gap-3 justify-content-between"}>
        <FlatCard />
        <FlatCard />
        <FlatCard />
        <FlatCard />
      </div>
    </section>
  );
}
