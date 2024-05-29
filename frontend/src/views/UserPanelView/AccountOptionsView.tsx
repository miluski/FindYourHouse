import { Button, Container} from "react-bootstrap";
import UserIcon from "../../assets/UserIcon.png";


export const AccountOptionsView =() => {
  return (


    <Container className="border border-black rounded " fluid>
        <Container fluid className=" mt-3 d-flex align-items-center justify-content-center ">
        <img src={UserIcon} alt="UserIcon"/>
      </Container>
      <Container>

      </Container>
      
        <Container className="mb-4 align-items-center d-flex justify-content-center mt-3 ">
        <Button
          //onClick={}
          className="mb-3 btn-secondary w-25 "

        >
          Wyloguj
        </Button>
      </Container>
    </Container>
  );
};