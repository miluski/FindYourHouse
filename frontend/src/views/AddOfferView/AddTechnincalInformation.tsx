import { Container, Form } from "react-bootstrap"
import { ChooseRoomQuantity } from "./ChooseRoomsQuantity"

export const AddTechnicalInformatin = () => {
    return ( 
        <><Container fluid className="d-flex align-items-center fs-5 flex-column mb-3">
            <text className="fs-5 "> Informacje techniczne </text>
        </Container><Container className="align-items-center justify-content-between d-flex">
                <text> Wprowadź cenę w zł * </text>
                <text aria-required> wprowadź czynsz w zł</text>
                <text aria-required> wprowadź kaucję</text>

            </Container><Container className="justify-content-between d-flex">
                <Form.Control type="number" className="w-25 mb-5 mt-2'" />
                <Form.Control type="number" className="w-25 mb-5 mt-2'" />
                <Form.Control type="number" className="w-25 mb-5 mt-2'" />
            </Container><Container fluid className="d-inline-flex justify-content-between">
                <text aria-required> wprowadź powierzchnię w m2</text>
                <text> wybierz ilość pokoi</text>
            </Container>
            <Container fluid className="d-inline-flex justify-content-between">
            <Form.Control type="number" className="w-25 mb-5 mt-2'"/>
            <ChooseRoomQuantity/>
            </Container> </>
    )
}