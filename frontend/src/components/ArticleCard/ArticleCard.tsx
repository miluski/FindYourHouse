import { Badge, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";

export default function ArticleCard({
  thumbNail,
  badgeText,
  link,
  text,
}: {
  thumbNail: string;
  badgeText: string;
  link: string;
  text: string;
}) {
  const route = useNavigate();

  return (
    <Card
      tabIndex={0}
      className={"w-25 rounded-4 border-0 cursor-pointer articleCard"}
      onClick={() => route(link)}
    >
      <div className={"position-relative"}>
        <Badge
          pill
          className={"position-absolute top-0 start-0 mt-2 ms-2 fw-semibold"}
          bg="primary"
        >
          {badgeText}
        </Badge>

        <Card.Img
          className={"rounded-top-4 cardImg"}
          variant="top"
          src={thumbNail}
        />
      </div>
      <Card.Body className={" articleCardBody"}>
        <p className={"m-0 articleCardText"}>{text}</p>
      </Card.Body>
    </Card>
  );
}
