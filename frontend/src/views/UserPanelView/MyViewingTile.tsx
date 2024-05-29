import { Container } from "react-bootstrap"
import { EnvelopePaper } from "react-bootstrap-icons"

export const MyViewingTile = () => {
    return(
        <Container className="border border-black rounded mb-4 cursor-pointer button">
        <Container className="d-flex align-items-center justify-content-center mt-4">
        <EnvelopePaper size={120}/>
        </Container>    
        <Container  className="d-flex align-items-center justify-content-center mt-2 mb-3  ">
            <text> Moje ogłoszenia</text>
        </Container>

    </Container>
    )
}