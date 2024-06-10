import Modal from "react-bootstrap/Modal";
import { CloseButton } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { MouseEventHandler } from "react";
import "./AuthenticationView.css";
import LoginView from "./LoginView/LoginView.tsx";
import RegisterView from "./RegisterView/RegisterView.tsx";
import ForgotPasswordView from "./ForgotPasswordView/ForgotPasswordView.tsx";

export default function AuthenticationView({
  tabName,
  setTabName,
  show,
  handleClose,
}: {
  tabName: string;
  setTabName: Function;
  show: boolean;
  handleClose: () => void | MouseEventHandler;
}) {
  const changeTab = (eventKey: string | null) => {
    if (eventKey) {
      setTabName(eventKey);
    }
  };

  const headerText =
    tabName === "forgotPassword"
      ? "Zapomniałeś hasła?"
      : "Witaj w Znajdź Swój Dach";
  const displayNav = tabName === "forgotPassword" ? "d-none" : "d-flex";
  return (
    <Modal
      fullscreen={"lg-down"}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={"overflow-auto"}
    >
      <Modal.Header className={"border-bottom-0"}>
        <CloseButton
          onClick={handleClose}
          data-bs-dismiss="modal"
          aria-label="Close"
          className="shadow-none"
        />
      </Modal.Header>
      <Modal.Body className="d-flex flex-column px-2  align-self-center  px-lg-4 w-100 tabContainer">
        <h4 className="align-self-center fw-bold">{headerText}</h4>
        <Tab.Container
          defaultActiveKey={tabName}
          activeKey={tabName}
          onSelect={changeTab}
        >
          <Nav
            className={
              "flex-row mt-4 border-bottom border-secondary-subtle " +
              displayNav
            }
          >
            <Nav.Item
              className={
                "shadow-none border-0 border-bottom rounded-0 border-4  " +
                (tabName === "login"
                  ? "text-black border-warning  "
                  : " border-white")
              }
            >
              <Nav.Link className={"px-3 pb-3 no-transition"} eventKey="login">
                Zaloguj się
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                " shadow-none border-0 border-bottom  rounded-0  border-4 " +
                (tabName === "register"
                  ? " text-black border-warning  "
                  : " border-white")
              }
            >
              <Nav.Link
                className={"px-3  pb-3 no-transition"}
                eventKey="register"
              >
                Zarejestruj się
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="login">
              <LoginView changeTab={changeTab} />
            </Tab.Pane>
            <Tab.Pane eventKey="register">
              <RegisterView />
            </Tab.Pane>
            <Tab.Pane eventKey="forgotPassword">
              <ForgotPasswordView changeTab={changeTab} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );
}
