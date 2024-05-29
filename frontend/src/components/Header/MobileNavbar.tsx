import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CloseButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import AccordionHeader from "./AccordionHeader.tsx";
import AccordionLink from "./AccordionLink.tsx";
import HelpAndContactList from "./HelpAndContactList.tsx";
import AccordionPopularCities from "./AccordionPopularCities.tsx";
import AccordionPropertyType from "./AccordionPropertyType.tsx";
import { useNavigate } from "react-router-dom";

interface MobileNavbarProps {
	showOffcanvas: boolean;
	handleCloseOffcanvas: () => void;
	handleShowModal: () => void;
}

function MobileNavbar({
	showOffcanvas,
	handleCloseOffcanvas,
	handleShowModal,
}: MobileNavbarProps) {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	return (
		<Navbar.Offcanvas
			show={showOffcanvas}
			onHide={handleCloseOffcanvas}
			className='d-xl-none'
			id={`offcanvasNavbar-expand-xl`}
			aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
			placement='end'>
			<Offcanvas.Header>
				<CloseButton
					onClick={handleCloseOffcanvas}
					data-bs-dismiss='offcanvas'
					aria-label='Close'
					className='fs-2 shadow-none text-black'
				/>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<AccordionHeader buttonText={"Kupuję"} />
						<Accordion.Body className='border-top p-0'>
							<Accordion flush>
								<AccordionPropertyType />
								<AccordionPopularCities />
							</Accordion>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'></Accordion.Item>
				</Accordion>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<AccordionHeader buttonText={"Wynajmuję"} />
						<Accordion.Body className='border-top p-0'>
							<Accordion flush>
								<AccordionPropertyType />
								<AccordionPopularCities />
							</Accordion>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'></Accordion.Item>
				</Accordion>
				<div className='border-bottom py-3'>
					<AccordionLink
						linkText={"Kredyty"}
						linkURL={"#"}
						className={"ps-0"}
					/>
				</div>
				<div className='border-bottom py-3'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button shadow-none text-black ps-0 bg-white fw-normal'
							type='button'
							onClick={() => {
								token !== "" && token !== null
									? navigate("/user-panel")
									: handleShowModal();
							}}>
							<i className='bi bi-person fs-2 me-2' />
							Moje konto
						</button>
					</h2>
				</div>
				<Accordion flush>
					<Accordion.Item eventKey='0'>
						<AccordionHeader
							classNameIcon={"bi bi-telephone fs-2 me-2"}
							buttonText={"Pomoc i kontakt"}
						/>
						<Accordion.Body className='border border-black rounded-3'>
							<HelpAndContactList />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<Button
					variant='outline-dark'
					className='mt-5 align-self-center fw-bold px-3 py-2 w-100 border-2'
					onClick={() => navigate("/add-offer")}>
					Dodaj Ogłoszenie
				</Button>
			</Offcanvas.Body>
		</Navbar.Offcanvas>
	);
}

export default MobileNavbar;
