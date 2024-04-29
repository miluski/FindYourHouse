import { Col, Container } from "react-bootstrap";
import { Tile } from "./Tile";
import { useState } from "react";

const statisticsTiles = [
  {
    count: 23,
    title: "KOLEJKA",
    textColor: "#FF7A50",
  },
  {
    count: 52,
    title: "NOWE",
    textColor: "#7331FF",
  },
  {
    count: 70,
    title: "ROZPATRZANE",
    textColor: "#22E4FF",
  },
  {
    count: 100,
    title: "UKOŃCZONE",
    textColor: "#2EBC0A",
  },
];

export default function StatisticsView() {
  const [selectedTitle, setSelectedTitle] = useState("KOLEJKA");
  return (
    <Container fluid className="mt-3">
      <text className="ff-inter fs-3 fw-light m-3">Nowe wiadomości</text>
      <Container fluid className="d-flex flex-row">
        {statisticsTiles.map((tile: Tile, index: number) => (
          <Col
            lg={1}
            md={8}
            sm={10}
            key={index}
            className="d-flex flex-column shadow-lg m-1 bg-white cursor-pointer py-2 rounded-3 w-lg-15 align-items-center"
            style={{
              borderColor: selectedTitle === tile.title ? "#FFE604" : "#FFFFFF",
              borderWidth: 1,
              borderStyle: "solid",
            }}
            onClick={() => setSelectedTitle(tile.title)}
          >
            <text>{tile.count}</text>
            <Col
              style={{ color: tile.textColor }}
            >
              {tile.title}
            </Col>
          </Col>
        ))}
      </Container>
    </Container>
  );
}
