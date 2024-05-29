import { Form } from 'react-bootstrap';


export const ChooseOfferTypeView = () => {
  return (
      <Form className='w-25 mb-5 mt-2'>
      <Form.Select >
        <option value="renting"> Wynajem</option>
        <option value="selling">Sprzedaż</option>
      </Form.Select>
      </Form>
  );
};


