import { Button, Container } from "react-bootstrap"


export const RedirectButtonsView = () => { 
    return(
        <>
        <Container className=" mt-4 align-items-center  justify-content-center flex-column d-flex "> 
         <Button variant="success">Kalkulator kredytu</Button>
         
     
         <Button variant="danger">Zgłoś ofertę</Button>
         </Container>
        </> 

    ) 
}