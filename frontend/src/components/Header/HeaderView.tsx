import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import houseLogo from "../../assets/FindMyHouse_Logo.svg";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import AuthenticationView from "../../views/AuthenticationView/AuthenticationView.tsx";
import { useNavigate } from "react-router-dom";

export default function HeaderView() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
	const navigate = useNavigate();

	return (
		<header>
			<Navbar expand='xl' className='py-2 px-2'>
				<Container fluid={"xl"} className='d-xl-flex align-items-center py-2 '>
					<Navbar.Brand
						className='fs-2 p-0 m-0 w-25 cursor-pointer'
						onClick={() => navigate("/")}>
						<img width='153' src={houseLogo} alt='' />
					</Navbar.Brand>
					<Navbar.Toggle
						onClick={handleShowOffcanvas}
						aria-controls='basic-navbar-nav'
						className='border-0 shadow-none p-0 fs-2'
					/>
					<MobileNavbar
						showOffcanvas={showOffcanvas}
						handleCloseOffcanvas={handleCloseOffcanvas}
						handleShowModal={handleShowModal}
					/>
					<DesktopNavbar handleShowModal={handleShowModal} />
				</Container>
				<LoginRegisterModal show={showModal} handleClose={handleCloseModal} />
			</Navbar>
		</header>
	);
  return (
    <header>
      <Navbar expand="xl" className="py-2 px-2">
        <Container fluid={"xl"} className="d-xl-flex align-items-center py-2 ">
          <Navbar.Brand href="/" className="fs-2 p-0 m-0 w-25">
            <img width="153" src={houseLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleShowOffcanvas}
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none p-0 fs-2"
          />
          <MobileNavbar
            showOffcanvas={showOffcanvas}
            handleCloseOffcanvas={handleCloseOffcanvas}
            handleShowModal={handleShowModal}
          />
          <DesktopNavbar handleShowModal={handleShowModal} />
        </Container>
        <AuthenticationView show={showModal} handleClose={handleCloseModal} />
      </Navbar>
    </header>
  );
}
