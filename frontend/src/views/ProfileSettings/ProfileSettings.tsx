import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import FooterView from "../../components/Footer/FooterView";
import { AccountOptionsView } from "./AccountOptionsView";
import { EditingAccountFormView } from "./EditingAccountFormView";
import { SettingsView } from "./SettingsView";

export const ProfileSettings = () => {
  return (
    <>
      <Container>
        <Header />
        <SettingsView />
        <Container className="d-flex flex-row align-items-stretch">
          <AccountOptionsView />
          <EditingAccountFormView />
        </Container>
      </Container>
      <FooterView fixedBottom />
    </>
  );
};
