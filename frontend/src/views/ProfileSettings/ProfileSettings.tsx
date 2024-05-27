import { Col, Container, Row } from "react-bootstrap";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";
import { AccountOptionsView } from "./AccountOptionsView";
import { EditingAccountFormView } from "./EditingAccountFormView";
import { SettingsView } from "./SettingsView";

export const ProfileSettings = () => {
  return (
    <>
    <Container>
      <HeaderView />
      <SettingsView />
      <Row>
        <Col>
          <AccountOptionsView
            user={{
              avatar: "",
              name: "",
              surname: "",
              email: "",
            }}
            deleteUserAccount={function (): void {
              throw new Error("Function not implemented.");
            }}
            logoutUser={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Col>
        <Col>
          <EditingAccountFormView />
        </Col>
      </Row>
    </Container>
    <FooterView />
    </>
  );
};
