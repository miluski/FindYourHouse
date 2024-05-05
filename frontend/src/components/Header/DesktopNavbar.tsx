import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { OperationState } from "../../utils/Operation/OperationState";
import { CHANGE_TOKEN } from "../../utils/Operation/OperationActionTypes";

interface DesktopNavbarProps {
	handleShowModal: () => void;
}

function DesktopNavbar({ handleShowModal }: DesktopNavbarProps) {
	const dispatch = useDispatch();
	const token = useSelector((state: OperationState) => state?.token);
	console.log("JWT token ", token);
	return (
		<>
			<ul className='d-none d-xl-flex list-unstyled m-0 w-25 justify-content-between'>
				<li>
					<a
						className='text-black fw-normal link-offset-2 link-offset-3-hover text-decoration-underline link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'
						href=''>
						Kupuję
					</a>
				</li>
				<li>
					<a
						className='text-black fw-normal link-offset-2 link-offset-3-hover text-decoration-underline link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'
						href=''>
						Wynajmuję
					</a>
				</li>
				<li>
					<a
						className='text-black fw-normal link-offset-2 link-offset-3-hover text-decoration-underline link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover'
						href=''>
						Kredyty
					</a>
				</li>
			</ul>
			<div className='d-none d-xl-flex align-items-center w-25'>
				<a
					type='button'
					className='text-decoration-none text-black d-flex align-items-center me-4 fw-normal'
					onClick={() => {
						token !== "" && token !== null
							? (window.location.href = "/calculator")
							: handleShowModal();
					}}>
					<i className='bi bi-person fs-2 me-2 fw'></i>
					Moje konto
				</a>
				<Button
					variant='outline-dark'
					className='align-self-center fw-bold px-3 py-2  border-2'>
					Dodaj Ogłoszenie
				</Button>
				{token !== null && token !== "" ? (
					(console.log(token),
					(
						<Button
							variant='outline-dark'
							className='align-self-center fw-bold px-3 py-2  border-2'
							onClick={() => {
								dispatch({ type: CHANGE_TOKEN, newToken: null });
								window.location.href = "/";
							}}>
							Wyloguj się
						</Button>
					))
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default DesktopNavbar;
