import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/FindMyHouse_Logo.svg";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import AuthenticationView from "../../views/AuthenticationView/AuthenticationView.tsx";
import HeaderMobile from "./HeaderMobile.tsx";
import HeaderDesktop from "./HeaderDesktop.tsx";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [tabName, setTabName] = useState("login");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (tabName: string) => () => {
    setTabName(tabName);
    setShowModal(true);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <Navbar className={"py-0 position-relative border-bottom"} expand={"xl"}>
      <Container fluid={"xl"}>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Find My House Logo" width={120} />
        </Navbar.Brand>
        <HeaderDesktop handleShowModal={handleShowModal} />
        <Navbar.Toggle
          className={"shadow-none border-0"}
          onClick={handleShowOffcanvas}
          aria-controls={`offcanvasNavbar-expand-xxl`}
        />
        <Navbar.Offcanvas
          onHide={handleCloseOffcanvas}
          className={"d-xl-none"}
          show={showOffcanvas}
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header>
            <Offcanvas.Title
              className={"fs-6"}
              id={`offcanvasNavbarLabel-expand-xxl`}
            >
              Menu
            </Offcanvas.Title>
            <CloseButton
              className={"shadow-none"}
              onClick={handleCloseOffcanvas}
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HeaderMobile handleShowModal={handleShowModal} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <AuthenticationView
        tabName={tabName}
        setTabName={setTabName}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </Navbar>
  );
}
