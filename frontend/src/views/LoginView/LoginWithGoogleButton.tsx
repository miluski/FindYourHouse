import { Button } from "react-bootstrap";
import { googleUrlParams } from "../../google";

export const LoginWithGoogleButton = () => {
	return (
		<div className='pb-4 pt-2 px-2 px-lg-4'>
			<h6 className='fw-normal text-center pt-3 border-secondary-subtle'>
				Lub zaloguj się za pomocą:
			</h6>
			<Button
				href='#'
				variant='outline-dark'
				className='align-self-center w-100 mt-3 '
				onClick={() => {
					window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${googleUrlParams.toString()}`;
				}}>
				<i className='bi bi-google text-lg-start me-2 '></i>
				Zaloguj się poprzez Google
			</Button>
		</div>
	);
};
