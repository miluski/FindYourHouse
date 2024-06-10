import { Button, Container, Form } from "react-bootstrap"

export const  SendMessageView = () => { 

    return ( 
        <>
        <Container className=""> 
            <Container className="border border-black ">
            <div className="d-flex flex-column align-items-center p-3" style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <div className="d-flex flex-column align-items-center mb-3">
                <div className="rounded-circle bg-secondary" style={{ width: '60px', height: '60px' }}></div>
                <h5 className="mt-2">Anna Piasta</h5>
                <small className="text-muted">ogłoszenie dewelopera</small>
                <p className="mb-0">+48 123456789</p>
            </div>
            <Form>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Imię*</Form.Label>
                    <Form.Control type="text" placeholder="Imię" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Numer telefonu*</Form.Label>
                    <Form.Control type="tel" placeholder="Numer telefonu" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>podaj treść wiadomości*</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="podaj treść wiadomości" />
                </Form.Group>
                <Button variant="warning" type="submit" className="w-100">
                    Wyślij wiadomość
                </Button>
            </Form>
        </div>
      </Container>
      </Container>
        </>
    )
}