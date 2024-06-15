import { Col, Container, Row } from "react-bootstrap";
import HeaderView from "../../components/Header/Header";
import FooterView from "../../components/Footer/FooterView";
import { AccountOptionsView } from "./AccountOptionsView";
import { MessageTile } from "./MessageTile";
import { SettingsAccountTile } from "./SettingsAccountTile";
import { MyViewingTile } from "./MyViewingTile";
import { AddAnnouncementTile } from "./AddAnnouncementTile";

export const UserPanel = () => {
  return (
    <>
      <HeaderView />
      <Container
        fluid
        className="d-flex align-items-center flex-column mt-2 mb-4"
      >
        <text className="w-bold  fs-2"> Moje Konto </text>
      </Container>
      <Container className="align-items-center justify-content-center mb-2 ">
        <Row>
          <Col>
            <AccountOptionsView />
          </Col>
          <Col>
            <MessageTile />
            <SettingsAccountTile />
          </Col>
          <Col>
            <MyViewingTile />
            <AddAnnouncementTile />
          </Col>
        </Row>
      </Container>
      <FooterView fixedBottom />
    </>
  );
};
