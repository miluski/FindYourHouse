import { Button, Container } from "react-bootstrap";
import UserIcon from "../../assets/UserIcon.png";
import { useNavigate } from "react-router-dom";

export const AccountOptionsView = () => {
  const navigate = useNavigate();
	return (
		<Container className='border border-black rounded ' fluid>
			<Container
				fluid
				className=' mt-3 d-flex align-items-center justify-content-center '>
				<img src={UserIcon} alt='UserIcon' />
			</Container>
			<Container className='mb-4 align-items-center d-flex justify-content-center mt-3 '>
				<Button
					onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            navigate("/");
          }}
					className='mb-3 btn-secondary w-25 '>
					Wyloguj
				</Button>
			</Container>
		</Container>
	);
};
